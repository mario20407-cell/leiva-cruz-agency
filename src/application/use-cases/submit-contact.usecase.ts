import { Lead, validateLead, CreateLeadProps } from '../../domain/entities/lead.entity';
import { ILeadRepository } from '../../domain/ports/lead-repository.port';

/**
 * Caso de Uso: Registrar e iniciar el contacto con un nuevo cliente potencial (Lead).
 * Orquesta la validación de la entidad del dominio y la persistencia mediante inyección de dependencias.
 */
export class SubmitContactUseCase {
  /**
   * Recibe la abstracción/puerto del repositorio por inyección de dependencias (DIP - SOLID).
   */
  constructor(private readonly leadRepository: ILeadRepository) {}

  /**
   * Ejecuta el caso de uso del formulario de contacto corporativo.
   * 
   * @param leadData Propiedades enviadas por el formulario de la presentación (sin id ni fecha de creación)
   * @throws Error si falla la validación de negocio del Dominio
   */
  async execute(leadData: CreateLeadProps): Promise<void> {
    // 1. Ejecutar las reglas de validación del Dominio
    validateLead(leadData);

    // 2. Construir la entidad Lead completa
    const newLead: Lead = {
      id: this.generateUuid(),
      ...leadData,
      createdAt: new Date(),
    };

    // 3. Persistir la entidad a través del puerto de salida
    await this.leadRepository.save(newLead);
  }

  /**
   * Generador simple y compatible de UUID v4 para entornos web/Node.
   */
  private generateUuid(): string {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }
    // Fallback en caso de entornos antiguos de testing sin soporte de crypto.randomUUID
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}

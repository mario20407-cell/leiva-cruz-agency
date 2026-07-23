import type { Lead } from '../../domain/entities/lead.entity';
import type { ILeadRepository } from '../../domain/ports/lead-repository.port';

/**
 * Adaptador de Infraestructura para persistir leads mediante peticiones HTTP.
 * Implementa el puerto ILeadRepository para mantener el Dominio libre de detalles de red.
 */
export class ApiLeadRepository implements ILeadRepository {
  /**
   * Guarda un Lead simulando una petición HTTP asíncrona a un backend corporativo.
   * 
   * @param lead La entidad de dominio Lead validada.
   */
  async save(lead: Lead): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      // Simulamos la latencia de red típica (1 segundo)
      setTimeout(() => {
        try {
          // Simulación de validación o fallo aleatorio de infraestructura (ej. base de datos caída)
          // Aquí podríamos cambiar la lógica para probar escenarios de fallo si fuese necesario.
          const isNetworkAvailable = true; 

          if (!isNetworkAvailable) {
            throw new Error('Servidor de base de datos no disponible temporalmente.');
          }

          // Guardamos localmente a modo de mockup premium para demostraciones offline
          const existingLeadsRaw = localStorage.getItem('leivacruz_leads');
          const leads: Lead[] = existingLeadsRaw ? JSON.parse(existingLeadsRaw) : [];
          leads.push(lead);
          localStorage.setItem('leivacruz_leads', JSON.stringify(leads));

          console.log('[Infra] Lead persistido exitosamente en la API Mock:', lead);
          resolve();
        } catch (error) {
          reject(
            new Error(
              error instanceof Error 
                ? `Error de red/servidor: ${error.message}` 
                : 'Error desconocido de red al enviar el formulario.'
            )
          );
        }
      }, 1000);
    });
  }
}

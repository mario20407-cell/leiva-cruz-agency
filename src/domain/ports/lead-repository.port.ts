import type { Lead } from '../entities/lead.entity';

/**
 * Puerto de salida para la persistencia y gestión de Leads en el dominio.
 * Define la interfaz que cualquier adaptador de infraestructura debe implementar.
 */
export interface ILeadRepository {
  /**
   * Guarda un nuevo Lead de forma persistente.
   * 
   * @param lead La entidad Lead validada de dominio.
   * @returns Una promesa que se resuelve cuando el Lead ha sido guardado exitosamente.
   */
  save(lead: Lead): Promise<void>;
}

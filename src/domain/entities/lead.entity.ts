/**
 * Representa la información de contacto de un prospecto de cliente B2B (Lead).
 * Esta entidad reside en el núcleo del Dominio y contiene reglas de negocio puras.
 */
export interface Lead {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly company: string;
  readonly message: string;
  readonly createdAt: Date;
}

/**
 * Datos requeridos para la creación de un nuevo Lead.
 */
export type CreateLeadProps = Omit<Lead, 'id' | 'createdAt'>;

/**
 * Dominios de correo electrónico personales/gratuitos comunes que no son válidos
 * para prospección B2B corporativa.
 */
const FORBIDDEN_DOMAINS = [
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'live.com',
  'icloud.com',
  'aol.com',
];

/**
 * Valida los datos de entrada para la creación de un Lead aplicando reglas de negocio corporativas.
 * 
 * @param props Propiedades del Lead a validar
 * @throws Error si alguna de las validaciones de negocio falla
 */
export function validateLead(props: CreateLeadProps): void {
  const { name, email, company, message } = props;

  // 1. Validar campos obligatorios no vacíos
  if (!name || name.trim() === '') {
    throw new Error('El nombre es requerido y no puede estar vacío.');
  }

  if (!email || email.trim() === '') {
    throw new Error('El correo electrónico es requerido.');
  }

  if (!company || company.trim() === '') {
    throw new Error('El nombre de la empresa es requerido.');
  }

  if (!message || message.trim() === '') {
    throw new Error('El mensaje no puede estar vacío.');
  }

  // 2. Validación de formato de email básico mediante expresión regular
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('El formato del correo electrónico no es válido.');
  }

  // 3. Validación de email corporativo (evitar dominios personales/públicos)
  const domain = email.split('@')[1]?.toLowerCase();
  if (domain && FORBIDDEN_DOMAINS.includes(domain)) {
    throw new Error(
      `El dominio @${domain} no está permitido. Por favor, utiliza una dirección de correo corporativa.`
    );
  }
}

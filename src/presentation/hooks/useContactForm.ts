import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import type { CreateLeadProps } from '../../domain/entities/lead.entity';
import { SubmitContactUseCase } from '../../application/use-cases/submit-contact.usecase';
import { ApiLeadRepository } from '../../infrastructure/adapters/api-lead-repository.adapter';

// Instanciamos el adaptador de infraestructura
const leadRepository = new ApiLeadRepository();
// Instanciamos el caso de uso con la dependencia inyectada
const submitContactUseCase = new SubmitContactUseCase(leadRepository);

export interface UseContactFormResult {
  formData: CreateLeadProps;
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  resetForm: () => void;
}

/**
 * Hook Controlador que maneja el estado del formulario de contacto
 * y conecta la vista (React) con el caso de uso de aplicación.
 */
export function useContactForm(): UseContactFormResult {
  const initialFormState: CreateLeadProps = {
    name: '',
    email: '',
    company: '',
    message: '',
  };

  const [formData, setFormData] = useState<CreateLeadProps>(initialFormState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Maneja el cambio de valores de los inputs.
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Resetea el formulario a sus valores iniciales.
   */
  const resetForm = () => {
    setFormData(initialFormState);
    setError(null);
    setIsSuccess(false);
  };

  /**
   * Ejecuta el caso de uso al enviar el formulario.
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      // Invocamos el caso de uso de la capa de aplicación
      await submitContactUseCase.execute(formData);
      setIsSuccess(true);
      setFormData(initialFormState);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Ocurrió un error inesperado al procesar el formulario de contacto.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    isSuccess,
    error,
    handleChange,
    handleSubmit,
    resetForm,
  };
}

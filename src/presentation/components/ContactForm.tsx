import React from 'react';
import { useContactForm } from '../hooks/useContactForm';

/**
 * Componente de Presentación: Formulario de contacto corporativo premium.
 * Consume el custom hook/controlador `useContactForm` para delegar la lógica de negocio.
 */
export const ContactForm: React.FC = () => {
  const {
    formData,
    isLoading,
    isSuccess,
    error,
    handleChange,
    handleSubmit,
    resetForm,
  } = useContactForm();

  return (
    <div className="w-full max-w-lg mx-auto bg-[#161920] border border-slate-800 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
      {/* Efecto de brillo de acento en el fondo */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-[#F8FAFC] tracking-tight">
          Inicia tu Transformación Digital
        </h3>
        <p className="text-[#94A3B8] text-sm mt-1">
          Completa el formulario para agendar una consultoría estratégica con nuestros arquitectos de software.
        </p>
      </div>

      {isSuccess ? (
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 text-center animate-fade-in">
          <svg
            className="w-12 h-12 text-emerald-400 mx-auto mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h4 className="text-[#F8FAFC] font-semibold text-lg">¡Solicitud Registrada!</h4>
          <p className="text-[#94A3B8] text-sm mt-2">
            Hemos validado tu correo corporativo. Un ingeniero especialista se pondrá en contacto contigo en menos de 24 horas.
          </p>
          <button
            onClick={resetForm}
            className="mt-5 px-5 py-2 bg-[#3B82F6] hover:bg-[#06B6D4] text-[#F8FAFC] text-sm font-medium rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/20"
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Mensaje de error general/validación */}
          {error && (
            <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-4 text-sm text-rose-400 flex items-start space-x-2 animate-shake">
              <svg
                className="w-5 h-5 text-rose-500 shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>{error}</span>
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={isLoading}
              placeholder="Ej. Juan Pérez"
              className="w-full bg-[#0D0F12] border border-slate-800 focus:border-[#3B82F6] text-[#F8FAFC] text-sm rounded-xl px-4 py-3 outline-none transition-colors placeholder:text-slate-600 disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-2">
              Correo Corporativo
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              placeholder="Ej. jperez@empresa.com"
              className="w-full bg-[#0D0F12] border border-slate-800 focus:border-[#3B82F6] text-[#F8FAFC] text-sm rounded-xl px-4 py-3 outline-none transition-colors placeholder:text-slate-600 disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-2">
              Empresa
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              disabled={isLoading}
              placeholder="Ej. Acme Corp"
              className="w-full bg-[#0D0F12] border border-slate-800 focus:border-[#3B82F6] text-[#F8FAFC] text-sm rounded-xl px-4 py-3 outline-none transition-colors placeholder:text-slate-600 disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-2">
              Mensaje / Requerimiento del Proyecto
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              disabled={isLoading}
              placeholder="Describe detalladamente los retos tecnológicos de tu empresa..."
              className="w-full bg-[#0D0F12] border border-slate-800 focus:border-[#3B82F6] text-[#F8FAFC] text-sm rounded-xl px-4 py-3 outline-none transition-colors placeholder:text-slate-600 resize-none disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] hover:from-[#2563EB] hover:to-[#0891B2] text-[#F8FAFC] font-semibold text-sm rounded-xl py-3.5 px-4 transition-all duration-300 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 active:scale-[0.98] flex items-center justify-center space-x-2 disabled:opacity-60 disabled:pointer-events-none"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>Procesando Solicitud...</span>
              </>
            ) : (
              <span>Enviar Solicitud Corporativa</span>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

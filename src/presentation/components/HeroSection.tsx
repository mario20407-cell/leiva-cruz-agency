import React from 'react';

/**
 * Componente HeroSection: Presenta un mensaje de alto impacto enfocado en conversión B2B
 * para negocios de alimentos, panaderías y PyMEs que buscan transformación digital.
 */
export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center justify-center py-6 bg-[#0D0F12]">
      {/* Luces de fondo decorativas */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-5 md:space-y-6">
        {/* Badge superior */}
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 px-3.5 py-1 rounded-full text-[11px] font-semibold text-cyan-400 tracking-wide">
          <span className="flex h-1.5 w-1.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
          </span>
          <span>TRANSFORMACIÓN DIGITAL DE OPERACIONES</span>
        </div>

        {/* Titular */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.1] max-w-4xl mx-auto">
          Software a la Medida y <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#3B82F6] via-[#22D3EE] to-[#06B6D4] bg-clip-text text-transparent">
            Sistemas Inteligentes
          </span> <br className="hidden sm:inline" />
          para Elevar tu Negocio
        </h1>

        {/* Descripción */}
        <p className="text-[#94A3B8] text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          ¿Y si tu operación pudiera escalar sin multiplicar tus dolores de cabeza? En Leiva Cruz Soluciones Tecnológicas creamos sistemas hechos a la medida exacta de tu negocio, potenciados con Inteligencia Artificial de última generación. Automatizamos procesos complejos, optimizamos recursos y asistimos a tus clientes con precisión y rapidez 24/7.
        </p>

        {/* CTA Botones */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="#contacto"
            className="w-full sm:w-auto bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] hover:from-[#2563EB] hover:to-[#0891B2] text-[#F8FAFC] font-semibold text-sm rounded-xl py-3 px-6 transition-all duration-300 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 active:scale-[0.98]"
          >
            Agendar Demostración
          </a>
          <a
            href="#servicios"
            className="w-full sm:w-auto bg-[#161920] border border-slate-800 text-[#F8FAFC] hover:border-cyan-500/50 hover:text-cyan-400 font-semibold text-sm rounded-xl py-3 px-6 transition-all duration-300"
          >
            Ver Soluciones
          </a>
        </div>
      </div>
    </section>
  );
};

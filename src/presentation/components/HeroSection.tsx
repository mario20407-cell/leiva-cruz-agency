import React from 'react';

/**
 * Componente HeroSection: Rediseñado para una experiencia "Single-View" de alto impacto.
 * Integra título, subtítulo, oferta de valor cognitiva, CTAs y un elemento visual interactivo
 * de nodos de Inteligencia Artificial en una rejilla de dos columnas.
 */
export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center py-8 bg-[#0D0F12]">
      {/* Fondos degradados decorativos */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Columna Izquierda: Información y CTAs */}
        <div className="lg:col-span-7 space-y-5 text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-[11px] font-semibold text-cyan-400 tracking-wide">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
            </span>
            <span>SISTEMAS COGNITIVOS E IA</span>
          </div>

          {/* Titular Imponente */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.1]">
            Software a la Medida y <br />
            <span className="bg-gradient-to-r from-[#3B82F6] via-[#22D3EE] to-[#06B6D4] bg-clip-text text-transparent">
              Sistemas Inteligentes
            </span> <br />
            para Elevar tu Negocio
          </h1>

          {/* Subtítulo Persuasivo */}
          <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
            ¿Y si tu operación pudiera escalar sin multiplicar tus dolores de cabeza? En Leiva Cruz Soluciones Tecnológicas creamos sistemas hechos a la medida exacta de tu negocio, potenciados con Inteligencia Artificial de última generación.
          </p>

          {/* Caja de Propuesta de Valor Integrada (Compacta) */}
          <div className="bg-[#161920]/80 border border-slate-800/80 rounded-xl p-4 text-xs sm:text-sm text-[#94A3B8] leading-relaxed relative overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-[#3B82F6] to-[#06B6D4]" />
            <p className="font-semibold text-[#F8FAFC] mb-1">El enfoque Leiva Cruz:</p>
            <p>
              Fusionamos ingeniería de software con IA para integrar capacidades cognitivas en tu propia operación. El sistema aprende de tus patrones, sugiere ajustes y automatiza procesos 24/7.
            </p>
          </div>

          {/* Bloque Cohesivo de CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <a
              href="#contacto"
              className="w-full sm:w-auto bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] hover:from-[#2563EB] hover:to-[#0891B2] text-[#F8FAFC] font-semibold text-xs sm:text-sm rounded-xl py-3 px-6 text-center transition-all duration-300 shadow-lg shadow-cyan-500/10 active:scale-[0.98]"
            >
              Agendar Demostración
            </a>
            <a
              href="#servicios"
              className="w-full sm:w-auto bg-[#161920] border border-slate-800 text-[#F8FAFC] hover:border-cyan-500/50 hover:text-cyan-400 font-semibold text-xs sm:text-sm rounded-xl py-3 px-6 text-center transition-all duration-300"
            >
              Ver Soluciones
            </a>
          </div>
        </div>

        {/* Columna Derecha: Elemento Gráfico Minimalista (Nodos IA) */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 bg-[#161920]/40 border border-slate-850 rounded-full flex items-center justify-center p-6 shadow-2xl backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full animate-pulse" />
            
            {/* SVG Abstracto de Red Neuronal / Nodos IA */}
            <svg
              className="w-full h-full text-cyan-400/80"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Conexiones / Líneas de red */}
              <line x1="40" y1="100" x2="100" y2="40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" className="opacity-40" />
              <line x1="40" y1="100" x2="100" y2="160" stroke="currentColor" strokeWidth="1.5" className="opacity-60" />
              <line x1="100" y1="40" x2="160" y2="100" stroke="currentColor" strokeWidth="1.5" className="opacity-80" />
              <line x1="100" y1="160" x2="160" y2="100" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" className="opacity-40" />
              <line x1="100" y1="40" x2="100" y2="160" stroke="currentColor" strokeWidth="1" className="opacity-30" />
              <line x1="40" y1="100" x2="160" y2="100" stroke="currentColor" strokeWidth="1" className="opacity-30" />
              
              {/* Conexiones secundarias */}
              <line x1="100" y1="100" x2="40" y2="100" stroke="currentColor" strokeWidth="2" />
              <line x1="100" y1="100" x2="100" y2="40" stroke="currentColor" strokeWidth="2" />
              <line x1="100" y1="100" x2="160" y2="100" stroke="currentColor" strokeWidth="2" />
              <line x1="100" y1="100" x2="100" y2="160" stroke="currentColor" strokeWidth="2" />

              {/* Nodos de red con pulsos */}
              <circle cx="100" cy="100" r="14" fill="#161920" stroke="url(#gradientCenter)" strokeWidth="3" />
              <circle cx="100" cy="100" r="4" fill="#06B6D4" />
              
              <circle cx="40" cy="100" r="8" fill="#161920" stroke="#3B82F6" strokeWidth="2" />
              <circle cx="40" cy="100" r="2.5" fill="#3B82F6" />
              
              <circle cx="100" cy="40" r="8" fill="#161920" stroke="#06B6D4" strokeWidth="2" />
              <circle cx="100" cy="40" r="2.5" fill="#06B6D4" />
              
              <circle cx="160" cy="100" r="8" fill="#161920" stroke="#3B82F6" strokeWidth="2" />
              <circle cx="160" cy="100" r="2.5" fill="#3B82F6" />
              
              <circle cx="100" cy="160" r="8" fill="#161920" stroke="#06B6D4" strokeWidth="2" />
              <circle cx="100" cy="160" r="2.5" fill="#06B6D4" />

              {/* Definición de degradados */}
              <defs>
                <linearGradient id="gradientCenter" x1="100" y1="86" x2="100" y2="114" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3B82F6" />
                  <stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

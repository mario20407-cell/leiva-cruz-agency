import React from 'react';

/**
 * AboutSection: Presenta la propuesta de valor institucional de Leiva Cruz Tech Solutions,
 * detallando la Misión, Visión y el enfoque de Sistemas Cognitivos e IA.
 */
export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0D0F12] border-t border-slate-900" id="nosotros">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Enfoque Tecnológico / Oferta de Valor */}
        <div className="bg-[#161920] border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 inline-block">
                Enfoque Tecnológico
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
                Oferta de Valor
              </h3>
            </div>
            
            <div className="lg:col-span-8 space-y-6 text-[#94A3B8] text-base md:text-lg leading-relaxed">
              <p className="font-medium text-[#F8FAFC]">
                En Leiva Cruz Soluciones Tecnológicas rompemos con el software genérico. No creamos solo programas que guardan datos, sino sistemas inteligentes que trabajan, piensan y asisten activamente.
              </p>
              <p>
                Fusionamos ingeniería a la medida con Inteligencia Artificial para integrar capacidades cognitivas dentro de tu propia operación —permitiendo que el sistema aprenda de tus patrones de producción, sugiera ajustes, resuelva cálculos y dudas operativas de forma intuitiva, automatice procesos y atienda a tus clientes 24/7—. Tecnología diseñada exactamente para hacer escalar tu negocio con precisión.
              </p>
            </div>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Misión */}
          <div className="bg-[#161920] border border-slate-800 rounded-2xl p-8 hover:border-blue-500/20 transition-all duration-300 relative group">
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl" />
            <div className="relative z-10 space-y-4">
              <div className="text-3xl">🎯</div>
              <div className="text-xl font-bold text-[#F8FAFC]">Nuestra Misión</div>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                Impulsar la evolución digital global mediante software a la medida e Inteligencia Artificial, transformando la complejidad operativa en sistemas inteligentes, adaptativos y eficientes que aprenden de los patrones del negocio para operar con mayor velocidad y menor esfuerzo humano.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="bg-[#161920] border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/20 transition-all duration-300 relative group">
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl" />
            <div className="relative z-10 space-y-4">
              <div className="text-3xl">👁️‍🗨️</div>
              <div className="text-xl font-bold text-[#F8FAFC]">Nuestra Visión</div>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                Ser el socio tecnológico de referencia para negocios que buscan agilidad, destacando frente a los gigantes del sector por ofrecer desarrollos personalizados y sistemas de IA altamente adaptados al ritmo actual.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

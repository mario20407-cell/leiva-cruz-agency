import React from 'react';
import { HeroSection } from './presentation/components/HeroSection';
import { ServicesSection } from './presentation/components/ServicesSection';
import { AboutSection } from './presentation/components/AboutSection';
import { LeadForm } from './presentation/components/LeadForm';

/**
 * Componente raíz de la Landing Page de Leiva Cruz Soluciones Tecnológicas.
 * Compone el Hero corporativo, la sección de servicios/ecosistema y el formulario de captación de leads.
 */
export default function App(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#0D0F12] text-[#F8FAFC] font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Cabecera / Navegación */}
      <header className="border-b border-slate-800 bg-[#0D0F12]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent tracking-wider">
              LEIVA CRUZ
            </span>
            <span className="text-xs uppercase px-2 py-0.5 rounded bg-slate-800 text-[#94A3B8] font-mono tracking-widest border border-slate-700">
              Tech Solutions
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#94A3B8]">
            <a href="#soluciones" className="hover:text-[#F8FAFC] transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-[#F8FAFC] transition-colors">Servicios</a>
            <a href="#contacto" className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-[#F8FAFC] hover:border-[#3B82F6] transition-all">
              Agendar Consulta
            </a>
          </nav>
        </div>
      </header>

      {/* 1. Sección Hero */}
      <div id="soluciones">
        <HeroSection />
      </div>

      {/* 2. Sección de Servicios / Ecosistema */}
      <ServicesSection />

      {/* 2.5. Propuesta de Valor Institucional (Misión, Visión, Oferta) */}
      <AboutSection />

      {/* 3. Sección de Captación de Leads / Formulario de Contacto */}
      <section className="py-20 bg-[#0D0F12] border-t border-slate-900" id="contacto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-semibold text-blue-400">
              🚀 RESPUESTA EN MENOS DE 24 HORAS
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F8FAFC] leading-tight">
              ¿Tu empresa está diseñada para crecer o para consumir todo tu tiempo?
            </h2>
            <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed">
              Trabajamos mano a mano con fundadores y líderes de operaciones para transformar la complejidad y el desorden en sistemas web inteligentes y automatizados. Eliminamos el trabajo manual pesado, resolvemos los cuellos de botella que frenan tu negocio y devolvemos el control total de tu rentabilidad.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-3 text-sm text-[#94A3B8]">
                <span className="text-cyan-400 mt-0.5">✔</span>
                <span><strong>Estrategia y software a la medida</strong> guiados por arquitectos de software sénior.</span>
              </div>
              <div className="flex items-start space-x-3 text-sm text-[#94A3B8]">
                <span className="text-cyan-400 mt-0.5">✔</span>
                <span><strong>Auditoría de procesos sin costo:</strong> evaluamos tu operación actual para mostrarte exactamente cómo eliminar fugas de tiempo y dinero.</span>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center lg:justify-end">
            <LeadForm />
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 bg-[#0D0F12]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-[#94A3B8] space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Leiva Cruz Soluciones Tecnológicas. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#privacidad" className="hover:text-[#F8FAFC] transition-colors">Privacidad</a>
            <a href="#terminos" className="hover:text-[#F8FAFC] transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

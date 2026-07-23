import React from 'react';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

export const ServicesSection: React.FC = () => {
  const services: ServiceItem[] = [
    {
      icon: '📊',
      title: 'Automatización de Inventarios',
      description: 'Control exacto de materia prima, mermas y existencias en tiempo real para plantas de producción de alimentos y cocinas comerciales.',
      features: [
        'Trazabilidad de lotes de ingredientes',
        'Alertas automáticas de reabastecimiento',
        'Reportes de rendimiento e histórico de mermas'
      ],
      gradient: 'from-blue-500/20 to-indigo-500/10'
    },
    {
      icon: '⚖️',
      title: 'Fórmulas y Costes de Producción',
      description: 'Calculadoras dinámicas adaptadas a la fórmula del panadero, escalado automático de recetas y cálculo de márgenes fiscales y costes reales.',
      features: [
        'Cálculo basado en porcentaje de panadero',
        'Escalado instantáneo por peso o volumen final',
        'Cálculo de IVA, aranceles e impuestos sobre materias primas'
      ],
      gradient: 'from-cyan-500/20 to-blue-500/10'
    },
    {
      icon: '🚀',
      title: 'Sistemas Web a la Medida',
      description: 'Desarrollo de aplicaciones a medida seguras y de alto rendimiento utilizando tecnologías modernas como React, Vite y arquitecturas cloud.',
      features: [
        'Diseño responsivo para móviles y tablets',
        'Arquitectura hexagonal limpia y mantenible',
        'Integraciones rápidas vía API'
      ],
      gradient: 'from-emerald-500/20 to-cyan-500/10'
    }
  ];

  return (
    <section className="py-20 bg-[#0D0F12] border-t border-slate-900" id="servicios">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Encabezado de sección */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F8FAFC]">
            Ecosistema de Soluciones de Ingeniería
          </h2>
          <p className="text-[#94A3B8] text-base md:text-lg">
            Desarrollamos soluciones robustas diseñadas específicamente para optimizar las operaciones diarias y potenciar la rentabilidad de tu negocio.
          </p>
        </div>

        {/* Tarjetas de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-[#161920] border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden group hover:-translate-y-1`}
            >
              {/* Degradado sutil de fondo al hacer hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

              <div className="relative z-10 space-y-6">
                <span className="text-4xl block">{service.icon}</span>
                
                <h3 className="text-xl font-bold text-[#F8FAFC] tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 border-t border-slate-800/80 pt-4 text-xs text-[#94A3B8]">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-2">
                      <span className="text-cyan-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';

interface SolutionItem {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'production' | 'planning';
  statusText: string;
  gradient: string;
}

export const ServicesSection: React.FC = () => {
  const solutions: SolutionItem[] = [
    {
      icon: '🍞',
      title: 'Master Baker',
      subtitle: 'Automatización Integral para Panaderías, Pastelerías y Repostería',
      description: 'Sistema robusto especializado en la gestión de cocinas comerciales. Automatiza el control de inventarios, cálculos complejos de porcentajes de panadero, prorrateo de costos, flujos de venta y asistencia inteligente.',
      status: 'production',
      statusText: 'En Producción',
      gradient: 'from-emerald-500/20 to-blue-500/10'
    },
    {
      icon: '🏥',
      title: 'Smart Clinic',
      subtitle: 'Gestión Inteligente para Clínicas, Consultorios y Médicos',
      description: 'Plataforma diseñada para agilizar la administración de pacientes, expedientes clínicos, agendamiento automatizado y optimización de flujos operativos en centros de salud y laboratorios.',
      status: 'planning',
      statusText: 'En Fase de Planeación',
      gradient: 'from-blue-500/20 to-cyan-500/10'
    },
    {
      icon: '👨‍🍳',
      title: 'Smart Chef',
      subtitle: 'Sistema Avanzado de Costeo y Gestión de Cocina',
      description: 'Software especializado para restaurantes, bistrós y servicios de banquetería. Permite calcular con exactitud el costo de recetas, mermas e insumos para maximizar la rentabilidad de cada platillo.',
      status: 'planning',
      statusText: 'En Fase de Planeación',
      gradient: 'from-cyan-500/20 to-indigo-500/10'
    },
    {
      icon: '🛍️',
      title: '3ways Shop',
      subtitle: 'Automatización de Tiendas de Ropa y E-commerce',
      description: 'Solución omnicanal para la gestión de inventarios de moda, control de tallas, pasarelas de pago y sincronización de ventas físicas con tiendas en línea asistidas por IA.',
      status: 'planning',
      statusText: 'En Fase de Planeación',
      gradient: 'from-purple-500/20 to-blue-500/10'
    }
  ];

  return (
    <section className="py-20 bg-[#0D0F12] border-t border-slate-900" id="servicios">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Encabezado de sección */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F8FAFC]">
            Portafolio de Soluciones
          </h2>
          <p className="text-[#94A3B8] text-base md:text-lg">
            Explora nuestro ecosistema de productos diseñados para digitalizar y automatizar operaciones críticas de negocio.
          </p>
        </div>

        {/* Tarjetas de soluciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {solutions.map((sol, index) => (
            <div
              key={index}
              className="bg-[#161920] border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Degradado de fondo al hacer hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${sol.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

              <div className="relative z-10 space-y-4 flex-grow">
                {/* Cabecera de tarjeta: Icono y Status Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{sol.icon}</span>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                      sol.status === 'production'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                    }`}
                  >
                    {sol.statusText}
                  </span>
                </div>
                
                {/* Título & Subtítulo */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#F8FAFC] tracking-tight">
                    {sol.title}
                  </h3>
                  <h4 className="text-[11px] font-medium text-cyan-400/90 tracking-wide uppercase">
                    {sol.subtitle}
                  </h4>
                </div>
                
                {/* Descripción */}
                <p className="text-[#94A3B8] text-xs leading-relaxed">
                  {sol.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

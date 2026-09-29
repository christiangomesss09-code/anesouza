import { Heart, Crosshair, Sparkles, User } from 'lucide-react';

const WA_LINK = 'http://wa.me/+5551980889798/';

export default function Experience() {
  const experiences = [
    {
      title: 'Atendimento personalizado',
      icon: <Heart size={20} className="text-dourado" />,
      description: 'Cada procedimento é pensado de acordo com suas características únicas.'
    },
    {
      title: 'Técnica e precisão',
      icon: <Crosshair size={20} className="text-dourado" />,
      description: 'Detalhes fazem diferença no resultado final. Cada fio, cada medida.'
    },
    {
      title: 'Respeito à naturalidade',
      icon: <Sparkles size={20} className="text-dourado" />,
      description: 'A proposta é valorizar sua beleza, não apagar sua identidade.'
    },
    {
      title: 'Experiência individual',
      icon: <User size={20} className="text-dourado" />,
      description: 'Um momento para cuidar de você e sair se sentindo ainda mais bonita.'
    }
  ];

  return (
    <section id="diferencial" className="py-24 md:py-32 bg-perola relative overflow-hidden">
      {/* Absolute decorative blurred circle to make it look ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dourado/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-24">
          <div className="lg:col-span-5">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-dourado font-semibold block mb-3">
              Por que Ane Souza?
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-grafite leading-tight">
            Nosso <span className="italic font-normal text-rose">diferencial</span> em cada detalhe.
          </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-12">
            <p className="font-sans text-sm md:text-base text-grafite/80 leading-relaxed font-light">
              Cada atendimento é pensado para entregar um resultado que faça sentido para você. Técnica, acolhimento e respeito à sua essência.
            </p>
          </div>
        </div>

        {/* Experience Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-perola border border-cinza-medio p-8 flex flex-col justify-between transition-all duration-500 hover:border-dourado hover:shadow-md group relative overflow-hidden"
            >
              {/* Top border decor */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-dourado transition-all duration-500 group-hover:w-full" />
              
              <div className="space-y-4">
                {/* Icon wrapper */}
                <div className="w-10 h-10 bg-perola border border-cinza-medio/30 flex items-center justify-center transition-colors duration-500 group-hover:bg-dourado/10">
                  {exp.icon}
                </div>
                
                <h3 className="font-serif text-lg tracking-wide text-grafite font-medium pt-2">
                  {exp.title}
                </h3>
                
                <p className="font-sans text-xs md:text-sm text-grafite/70 leading-relaxed font-light">
                  {exp.description}
                </p>
              </div>

              {/* Number tag */}
              <div className="mt-8 pt-4 border-t border-cinza-medio/30 flex justify-end">
                <span className="font-sans text-[10px] text-cinza-medio font-bold tracking-widest uppercase select-none group-hover:text-dourado transition-colors duration-300">
                  Diferencial 0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 md:mt-24">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="font-sans text-xs uppercase tracking-widest border border-grafite text-grafite hover:bg-grafite hover:text-perola px-8 py-4 transition-all duration-500 font-semibold rounded-none inline-flex items-center gap-2 group"
          >
            Conhecer mais
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

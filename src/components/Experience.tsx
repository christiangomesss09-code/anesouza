import { Sparkles, Trophy, Award, Crown, CheckSquare, Heart } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Atendimento personalizado',
      icon: <Heart size={20} className="text-dourado" />,
      description: 'Cada cliente é única. Iniciamos cada ritual com uma escuta atenta e consultoria visagista para entender suas reais preferências e harmonizar com sua rotina.'
    },
    {
      title: 'Profissionais especializados',
      icon: <Trophy size={20} className="text-dourado" />,
      description: 'Nossa equipe é formada por especialistas renomadas que passam por atualizações constantes e treinamentos com as melhores referências do mercado.'
    },
    {
      title: 'Produtos de alta performance',
      icon: <Crown size={20} className="text-dourado" />,
      description: 'Trabalhamos exclusivamente com as marcas mais conceituadas do mundo. Do tratamento à finalização, seus fios e pele recebem ativos nobres.'
    },
    {
      title: 'Ambiente sofisticado',
      icon: <Sparkles size={20} className="text-dourado" />,
      description: 'Um verdadeiro refúgio urbano de calmaria, projetado com acústica suave, iluminação indireta relaxante e aromas terapêuticos exclusivos.'
    },
    {
      title: 'Técnicas atualizadas',
      icon: <Award size={20} className="text-dourado" />,
      description: 'Temos orgulho de dominar técnicas contemporâneas que combinam estética refinada e alta precisão técnica, preservando sempre a sua saúde biológica.'
    },
    {
      title: 'Experiência exclusiva',
      icon: <CheckSquare size={20} className="text-dourado" />,
      description: 'Do café espresso gourmet ao espumante, poltronas massageadoras de lavatório e rituais sensoriais, cada segundo foi pensado para o seu deleite.'
    }
  ];

  return (
    <section id="experiencia" className="py-24 md:py-32 bg-perola relative overflow-hidden">
      {/* Absolute decorative blurred circle to make it look ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dourado/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-24">
          <div className="lg:col-span-5">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-dourado font-semibold block mb-3">
              Nossa Experiência
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-grafite leading-tight">
            Nossa <span className="italic font-normal text-rose">essência</span> em cada detalhe.
          </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-12">
            <p className="font-sans text-sm md:text-base text-grafite/80 leading-relaxed font-light">
              No Studio Luah, acreditamos que a verdadeira beleza floresce quando técnica avançada, conforto supremo e hospitalidade impecável caminham em perfeita harmonia. Cada etapa foi desenhada para celebrar você.
            </p>
          </div>
        </div>

        {/* Experience Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                  Pillar 0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

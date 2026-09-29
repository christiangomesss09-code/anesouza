import { Sparkles, Eye, Compass } from 'lucide-react';

import specialtyLashesImg from '../assets/images/novas imagens/cilios-volume-russo.webp';
import specialtyBrowsImg from '../assets/images/novas imagens/sobrancelha-design.webp';

const WA_LINK = 'http://wa.me/+5551980889798/';

export default function Specialties() {
  const specialties = [
    {
      id: 'cilios',
      title: 'Lash Design',
      subtitle: 'Olhar Marcante & Natural',
      icon: <Eye className="text-dourado" size={18} />,
      description: 'Cílios cuidadosamente planejados para proporcionar mais definição, volume e destaque ao olhar.',
      image: specialtyLashesImg,
      cta: 'Quero meus cílios'
    },
    {
      id: 'sobrancelhas',
      title: 'Design de Sobrancelhas',
      subtitle: 'Harmonia & Expressão',
      icon: <Compass className="text-dourado" size={18} />,
      description: 'Formato, simetria e acabamento pensados de acordo com as proporções do seu rosto.',
      image: specialtyBrowsImg,
      cta: 'Quero minhas sobrancelhas'
    }
  ];

  return (
    <section id="especialidades" className="py-24 md:py-32 bg-perola relative">
      {/* Visual background lines to match premium styling */}
      <div className="absolute inset-y-0 left-1/4 w-[1px] bg-cinza-medio/30 pointer-events-none" />
      <div className="absolute inset-y-0 right-1/4 w-[1px] bg-cinza-medio/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-dourado font-semibold block mb-3">
            Nossos Serviços
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-grafite leading-tight">
            Realce o que você já tem de <span className="italic font-normal text-rose">mais bonito</span>.
          </h2>
          <div className="w-16 h-[1px] bg-dourado mx-auto mt-6" />
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-12 md:gap-y-16 max-w-5xl mx-auto">
          {specialties.map((item, index) => (
            <div 
              key={item.id} 
              className="flex flex-col group"
            >
              {/* Image with luxury hover effect */}
              <div className="overflow-hidden bg-perola aspect-[4/3] relative border border-cinza-medio/40 shadow-sm mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-grafite/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating category badge */}
                <div className="absolute top-4 right-4 bg-perola/90 backdrop-blur-md px-3 py-1.5 flex items-center gap-1.5 border border-cinza-medio/50">
                  <Sparkles size={16} className="text-dourado" />
                  <span className="font-sans text-[9px] uppercase tracking-widest text-grafite font-bold">
                    {item.subtitle}
                  </span>
                </div>
              </div>

              {/* Text info */}
              <div className="space-y-3">
                <div className="flex items-baseline justify-between border-b border-cinza-medio/50 pb-2">
                  <h3 className="font-serif text-2xl tracking-wide text-grafite font-light">
                    {item.title}
                  </h3>
                  <span className="font-sans text-[10px] tracking-widest text-dourado uppercase font-bold">
                    0{index + 1}
                  </span>
                </div>
                
                <p className="font-sans text-xs md:text-sm text-grafite/80 leading-relaxed font-light">
                  {item.description}
                </p>

                <div className="pt-2">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-[10px] uppercase tracking-widest text-grafite font-semibold border-b border-grafite pb-1 hover:text-dourado hover:border-dourado transition-all duration-300 flex items-center gap-1 group/btn"
                  >
                    {item.cta}
                    <span className="inline-block transform transition-transform duration-300 group-hover/btn:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA button */}
        <div className="text-center mt-16 md:mt-24">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="font-sans text-xs uppercase tracking-widest border border-grafite text-grafite hover:bg-grafite hover:text-perola px-8 py-4 transition-all duration-500 font-semibold rounded-none inline-flex items-center gap-2 group"
          >
            Agendar meu horário
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}

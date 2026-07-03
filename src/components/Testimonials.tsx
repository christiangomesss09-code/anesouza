import { Star, MessageCircle, Instagram } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-perola relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-dourado font-semibold block mb-3">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-grafite leading-tight">
            A experiência de quem <span className="italic font-normal text-rose">escolheu</span> o Studio Luah.
          </h2>
          <p className="font-sans text-xs md:text-sm text-grafite/70 leading-relaxed font-light mt-4">
            Deixe-se encantar pelo olhar e carinho de nossas clientes mais exigentes sobre nossos rituais e ambiente.
          </p>
          <div className="w-16 h-[1px] bg-dourado mx-auto mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {TESTIMONIALS.map((t) => {
            const isGoogle = t.source === 'google';

            return (
              <div
                key={t.id}
                className="bg-dourado/5 border border-cinza-medio/60 p-8 md:p-10 flex flex-col justify-between relative hover:border-dourado transition-all duration-500 hover:shadow-sm"
              >
                {/* Visual quote accent mark */}
                <span className="absolute top-4 right-8 font-serif text-7xl text-dourado/20 select-none pointer-events-none">
                  “
                </span>

                <div className="space-y-6 relative z-10">
                  {/* Rating / Source Indicator */}
                  <div className="flex items-center justify-between">
                    {isGoogle ? (
                      <div className="flex gap-0.5">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-dourado text-dourado" />
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-rose">
                        <Instagram size={14} />
                        <span className="font-sans text-[10px] font-bold tracking-widest uppercase">
                          Instagram
                        </span>
                      </div>
                    )}

                    <span className="font-sans text-[10px] uppercase tracking-wider text-grafite/50 font-medium">
                      {isGoogle ? 'Google Review' : 'Instagram Direct'}
                    </span>
                  </div>

                  {/* Testimonial body */}
                  <p className="font-serif text-base md:text-lg italic font-light text-grafite leading-relaxed">
                    "{t.text}"
                  </p>
                </div>

                {/* Author profile block */}
                <div className="mt-8 pt-6 border-t border-cinza-medio/50 flex items-center justify-between">
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-grafite">
                      {t.name}
                    </h4>
                    {t.handle ? (
                      <a 
                        href={`https://instagram.com/${t.handle.replace('@', '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="font-sans text-xs text-dourado font-medium hover:underline block"
                      >
                        {t.handle}
                      </a>
                    ) : (
                      <span className="font-sans text-xs text-grafite/50 block">
                        {t.date}
                      </span>
                    )}
                  </div>

                  <div className="w-8 h-8 rounded-full bg-perola flex items-center justify-center border border-cinza-medio">
                    {isGoogle ? (
                      <span className="font-sans text-xs font-black text-grafite/50">G</span>
                    ) : (
                      <MessageCircle size={14} className="text-grafite/50" />
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Highlight Google Rating summary widget */}
        <div className="mt-16 bg-dourado/5 border border-cinza-medio p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-perola flex items-center justify-center text-dourado border border-cinza-medio shadow-sm font-serif text-xl font-bold">
              G
            </div>
            <div>
              <h3 className="font-sans text-sm font-bold text-grafite">Excelente no Google Reviews</h3>
              <p className="text-xs text-grafite/70 font-light mt-0.5">Nota média baseada em avaliações de clientes.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-serif text-3xl font-light text-grafite">5.0</span>
            <div className="flex flex-col gap-0.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-dourado text-dourado" />
                ))}
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-dourado">Recomendado</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

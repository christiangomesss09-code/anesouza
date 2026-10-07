import { useState } from 'react';
import { X, Sparkles, Calendar } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

const WA_LINK = 'http://wa.me/+5519994645445/';

export default function ResultsGallery() {
  const [filter, setFilter] = useState<'todos' | 'cilios' | 'sobrancelhas'>('todos');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'cilios', label: 'Cílios' },
    { id: 'sobrancelhas', label: 'Sobrancelhas' }
  ] as const;

  const filteredItems = filter === 'todos'
    ? GALLERY_ITEMS.filter((item) => item.category === 'cilios' || item.category === 'sobrancelhas')
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="resultados" className="py-24 md:py-32 bg-perola">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-dourado font-semibold block mb-3">
            Resultados reais
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-grafite leading-tight">
            Quando você se olha no <span className="italic font-normal text-rose">espelho</span>.
          </h2>
          <p className="font-sans text-xs md:text-sm text-grafite/70 leading-relaxed font-light mt-4 max-w-lg mx-auto">
            O resultado precisa fazer sentido para você. A beleza está nos detalhes.
          </p>

          <div className="space-y-2 mt-6 max-w-md mx-auto pt-2">
            <p className="font-sans text-sm text-grafite font-light">Um olhar mais marcante.</p>
            <p className="font-sans text-sm text-grafite font-light">Uma sobrancelha mais harmoniosa.</p>
            <p className="font-sans text-sm text-grafite font-light">Cílios que valorizam seus olhos.</p>
          </div>

          <p className="font-sans text-sm md:text-base text-grafite leading-relaxed font-semibold mt-8 max-w-md mx-auto">
            Pequenas mudanças podem transformar a forma como você se sente.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`font-sans text-[10px] md:text-xs uppercase tracking-widest px-5 py-3 transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-grafite text-perola font-semibold'
                  : 'bg-perola border border-cinza-medio/50 text-grafite/80 hover:border-grafite/40 hover:text-grafite'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer flex flex-col bg-perola border border-cinza-medio overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[4/5] bg-perola overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-grafite/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 bg-perola/90 flex items-center justify-center border border-cinza-medio">
                    <span className="text-grafite font-serif text-lg font-light">+</span>
                  </div>
                </div>

                <span className="absolute bottom-4 left-4 bg-perola/90 px-2.5 py-1 text-[8px] font-bold tracking-widest text-dourado uppercase border border-cinza-medio/40">
                  {item.category}
                </span>
              </div>

              <div className="p-5 space-y-1 bg-perola">
                <h3 className="font-serif text-lg tracking-wide text-grafite font-medium group-hover:text-dourado transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-grafite/70 line-clamp-1 font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 md:mt-24">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="font-sans text-xs uppercase tracking-widest bg-transparent border border-grafite text-grafite hover:bg-grafite hover:text-perola px-8 py-4 transition-all duration-500 font-semibold rounded-none inline-flex items-center gap-2 group"
          >
            Quero este resultado
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-grafite/80"
              onClick={() => setSelectedItem(null)}
            />

            <div className="bg-perola w-full max-w-3xl rounded-none border border-cinza-medio shadow-2xl relative z-10 grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto">
              <div className="md:col-span-7 bg-perola aspect-[4/5] md:aspect-auto md:h-full min-h-[300px]">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-perola/90 px-2.5 py-1 text-[8px] font-bold tracking-widest text-dourado uppercase">
                  {selectedItem.category}
                </span>
              </div>

              <div className="md:col-span-5 p-8 flex flex-col justify-between bg-perola">
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-cinza-medio pb-4">
                    <span className="font-sans text-[10px] tracking-widest uppercase font-semibold text-dourado">
                      Portfólio Ane Souza
                    </span>
                    <button 
                      onClick={() => setSelectedItem(null)}
                      className="text-grafite/70 hover:text-dourado transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl tracking-wide text-grafite font-light leading-tight">
                      {selectedItem.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-grafite/80 leading-relaxed font-light">
                      {selectedItem.description}
                    </p>
                  </div>

                  <div className="p-4 bg-dourado/5 border border-dourado/20 flex gap-3 items-start">
                    <Sparkles size={16} className="text-dourado shrink-0 mt-0.5" />
                    <p className="font-sans text-[11px] text-grafite/80 leading-relaxed font-light">
                      Trabalho executado sob rigoroso padrão de biossegurança e utilizando produtos premium.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mt-8 pt-6 border-t border-cinza-medio/60">
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-widest bg-grafite text-perola hover:bg-dourado px-6 py-4 transition-colors font-medium rounded-none shadow-sm"
                    >
                      <Calendar size={14} />
                      Quero este resultado
                    </a>
                    
                    <button
                    onClick={() => setSelectedItem(null)}
                    className="w-full text-center font-sans text-[10px] uppercase tracking-widest text-grafite/70 hover:text-grafite transition-colors font-bold py-1"
                  >
                    Fechar Galeria
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

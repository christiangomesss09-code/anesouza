import { useState } from 'react';
import { Maximize2, X, ChevronRight, Calendar } from 'lucide-react';

// Import our custom generated space image
import spaceInteriorVideo from '../assets/images/788ac316-f5ef-4fce-bb73-76372141c8e0.mp4';

export default function SpaceGallery() {
  const spaceImages = [
    {
      id: 's-1',
      title: 'Espaço de Atendimento Individual',
      subtitle: 'Tranquilidade e privacidade',
      url: spaceInteriorVideo,
      description: 'Nosso canto de relaxamento com acabamento em gesso texturizado, espelhos minimalistas retroiluminados e detalhes florais botânicos.'
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activeImage = spaceImages[activeIdx];

  return (
    <section id="espaco" className="py-24 md:py-32 bg-perola relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-dourado font-semibold block mb-3">
            Nosso Espaço
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-grafite leading-tight">
            O seu novo <span className="italic font-normal text-rose">refúgio</span> de beleza.
          </h2>
          <p className="font-sans text-xs md:text-sm text-grafite/70 leading-relaxed font-light mt-4 max-w-xl">
            Cada canto do Studio Luah foi meticulosamente projetado por arquitetos focados em neuroarquitetura sensorial para proporcionar calmaria, conforto acústico e uma desconexão revigorante da rotina.
          </p>
        </div>

        {/* Interactive Gallery Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Large Image Viewer */}
          <div className="lg:col-span-8 group relative overflow-hidden bg-perola border border-cinza-medio/50 aspect-video">
            {activeImage.url.endsWith('.mp4') ? (
              <video
                src={activeImage.url}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              />
            ) : (
              <img
                src={activeImage.url}
                alt={activeImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              />
            )}
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-grafite/40 via-transparent to-transparent pointer-events-none" />

            {/* Floating Title info */}
            <div className="absolute bottom-6 left-6 right-6 text-perola md:bottom-8 md:left-8 flex justify-between items-end">
              <div>
                <span className="font-sans text-[9px] uppercase tracking-widest text-dourado font-bold block mb-1">
                  {activeImage.subtitle}
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-light tracking-wide">
                  {activeImage.title}
                </h3>
              </div>
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="bg-white/10 backdrop-blur-md p-3 hover:bg-perola hover:text-grafite text-perola border border-white/20 transition-all duration-300 pointer-events-auto rounded-none"
                aria-label="Zoom image"
              >
                <Maximize2 size={16} />
              </button>
            </div>
          </div>

          {/* Thumbnails list and text info */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Description of active spot */}
            <div className="bg-dourado/5 border border-cinza-medio p-6 md:p-8 space-y-3 h-full">
              <h4 className="font-serif text-lg text-grafite font-medium border-b border-cinza-medio/60 pb-2">
                Conheça os detalhes
              </h4>
              <p className="font-sans text-xs md:text-sm text-grafite/80 leading-relaxed font-light">
                {activeImage.description}
              </p>
            </div>

            {/* Quick action */}
            <div className="pt-2">
              <a
                href="http://wa.me/+5519994645445/"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-widest bg-grafite text-perola hover:bg-dourado px-6 py-4 transition-colors font-medium rounded-none shadow-sm"
              >
                <Calendar size={14} />
                Agendar Horário
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-grafite/95 flex flex-col justify-center items-center p-4 md:p-12">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-perola hover:text-dourado transition-colors p-2"
          >
            <X size={28} />
          </button>
          
          <div className="max-w-5xl max-h-[80vh] overflow-hidden relative border border-white/10">
            {activeImage.url.endsWith('.mp4') ? (
              <video
                src={activeImage.url}
                autoPlay
                loop
                muted
                playsInline
                className="object-contain max-h-[80vh] max-w-full"
              />
            ) : (
              <img
                src={activeImage.url}
                alt={activeImage.title}
                referrerPolicy="no-referrer"
                className="object-contain max-h-[80vh] max-w-full"
              />
            )}
          </div>

          <div className="text-center text-perola mt-6 max-w-md">
            <h4 className="font-serif text-xl font-light tracking-wider">{activeImage.title}</h4>
            <p className="text-xs text-perola/70 mt-2 font-light">{activeImage.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

import { Sparkles, Eye } from 'lucide-react';

const WA_LINK = 'http://wa.me/+5519994645445/';

const BASE_IMG = 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image';

const imgClassico = `${BASE_IMG}?prompt=${encodeURIComponent(
  'Editorial macro close-up of natural woman eye with classic 1D individual eyelash extension, single premium matte black silk lash applied one per natural eyelash, softly delineated open-eyed look, porcelain nude skin, warm champagne soft-box studio light, pearl ivory seamless background, subtle single-layer lash line with clean isolated tips, luxury minimalist beauty advertisement aesthetic, 100mm macro lens ultra-sharp focus, photorealistic'
)}&image_size=portrait_4_3`;

const imgBrasileiro = `${BASE_IMG}?prompt=${encodeURIComponent(
  'Premium close-up of elegant woman eye showcasing Brazilian volume Y-shape eyelash extensions, pre-made Y double-fiber lash structure clearly visible on lash line, balanced doubled density without heavy feel, soft cat-eye mapping slightly longer on outer corner, warm honey-golden studio rim lighting, beige nude seamless backdrop, dewy nude makeup, luxury lash boutique campaign aesthetic, 90mm portrait lens shallow depth of field, photorealistic'
)}&image_size=portrait_4_3`;

const imgEgipcio = `${BASE_IMG}?prompt=${encodeURIComponent(
  'Cinematic close-up of woman eye with Egyptian 3D volume handmade fan eyelash extensions, three ultra-fine PBT fiber fans perfectly fanned and isolated, intermediate density with soft textured depth, glossy black finish catching warm studio light, porcelain skin with soft brown eyeshadow transition, pearl champagne seamless studio, editorial high-end beauty photography, 100mm macro ultra-sharp lash tips focus, photorealistic'
)}&image_size=portrait_4_3`;

const imgGlamour = `${BASE_IMG}?prompt=${encodeURIComponent(
  'Dramatic editorial close-up of sophisticated woman eye with glamour 5D volume eyelash extensions, five ultra-light handmade fans creating lush defined silhouette, doll-eye mapping with maximum curl, striking yet refined look suitable for red carpet events, luxury rose-gold bokeh salon background, elegant winged liner and champagne highlight, high-end beauty advertisement aesthetic, 85mm portrait lens, photorealistic'
)}&image_size=portrait_4_3`;

const imgMega = `${BASE_IMG}?prompt=${encodeURIComponent(
  'Breathtaking editorial macro of woman eye with mega volume 8D handmade fan eyelash extensions, eight ultra-fine cashmere lashes per fan creating maximum density cloud-like statement lashes, full lush dark strip effect while maintaining soft fanned texture, bold dramatic glamorous look, deep warm studio lighting with rim light separation, seamless pearl dark ivory backdrop, premium luxury salon hero campaign, 105mm macro lens razor sharp focus on the dense lash fan tips, photorealistic'
)}&image_size=portrait_4_3`;

export default function Specialties() {
  const specialties = [
    {
      id: 'classico',
      title: 'Clássico Fio a Fio',
      subtitle: 'Natural & Elegante',
      volume: '1D',
      icon: <Eye className="text-dourado" size={16} />,
      description: 'Aplicação de um fio sintético de alta qualidade sobre cada cílio natural. Resultado elegante, delineado e discreto, ideal para quem busca naturalidade.',
      image: imgClassico,
      cta: 'Escolher Clássico',
      price: 'R$ 190',
      duration: '120 min'
    },
    {
      id: 'brasileiro',
      title: 'Volume Brasileiro',
      subtitle: 'Fio Y • Equilibrado',
      volume: '2D',
      icon: <Sparkles className="text-dourado" size={16} />,
      description: 'Técnica com fios em formato Y pré-montados, oferecendo o dobro de volume com o mesmo peso do fio a fio clássico. Leveza e definição equilibrada.',
      image: imgBrasileiro,
      cta: 'Escolher Brasileiro',
      price: 'R$ 220',
      duration: '130 min'
    },
    {
      id: 'glamour',
      title: 'Volume Glamour',
      subtitle: 'Fio 5D • Marcante',
      volume: '5D',
      icon: <Sparkles className="text-dourado" size={16} />,
      description: 'Leques com 5 fios ultra-leves para um visual marcante e sofisticado. Perfeito para ocasiões especiais ou para quem ama um olhar mais dramático.',
      image: imgGlamour,
      cta: 'Escolher Glamour',
      price: 'R$ 310',
      duration: '180 min'
    },
    {
      id: 'mega',
      title: 'Mega Volume',
      subtitle: '8D • Impactante',
      volume: '8D',
      icon: <Sparkles className="text-dourado" size={16} />,
      description: 'O ápice da técnica: leques com 8 fios ultra-finos para um volume impactante, glamouroso e de tirar o fôlego. Máxima densidade com conforto.',
      image: imgMega,
      cta: 'Escolher Mega Volume',
      price: 'R$ 380',
      duration: '210 min'
    }
  ];

  return (
    <section id="especialidades" className="py-24 md:py-32 bg-perola">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-dourado font-semibold block mb-3">
            Técnicas Exclusivas
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-grafite leading-tight">
            Escolha o volume ideal para o seu <span className="italic font-normal text-rose">olhar</span>.
          </h2>
          <p className="font-sans text-sm md:text-base text-grafite/70 leading-relaxed font-light max-w-xl mx-auto mt-6">
            Do clássico discreto ao mega volume impactante. Cada técnica é executada com precisão artesanal para entregar o resultado que você deseja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-10 md:gap-y-14">
          {specialties.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex flex-col group ${index === 4 ? 'md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none' : ''}`}
            >
              <div className="overflow-hidden bg-perola aspect-[4/5] border border-cinza-medio/40 shadow-sm mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
                
                <div className="absolute top-4 left-4 bg-grafite/85 px-3 py-1.5 flex items-center gap-1.5 border border-dourado/30">
                  <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-dourado font-bold">
                    {item.volume}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 bg-perola/95 px-3 py-1.5 border border-cinza-medio/50">
                  <span className="font-serif text-sm tracking-wide text-grafite font-semibold">
                    {item.price}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-baseline justify-between border-b border-cinza-medio/50 pb-2">
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <h3 className="font-serif text-xl md:text-2xl tracking-wide text-grafite font-light">
                      {item.title}
                    </h3>
                  </div>
                  <span className="font-sans text-[10px] tracking-widest text-dourado uppercase font-bold">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-widest text-grafite/50 font-semibold">
                  <Sparkles size={10} className="text-dourado" />
                  {item.subtitle}
                </div>
                
                <p className="font-sans text-xs md:text-sm text-grafite/80 leading-relaxed font-light">
                  {item.description}
                </p>

                <div className="flex items-center gap-4 pt-1">
                  <div className="flex items-center gap-1 text-[10px] font-sans text-grafite/60 uppercase tracking-wider font-semibold">
                    <ClockIcon />
                    {item.duration}
                  </div>
                </div>

                <div className="pt-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-[10px] uppercase tracking-widest text-grafite font-semibold border-b border-grafite pb-1 hover:text-dourado hover:border-dourado transition-all duration-300 inline-flex items-center gap-1 group/btn"
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

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dourado shrink-0">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

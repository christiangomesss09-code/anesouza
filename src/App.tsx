import { useState, useEffect } from 'react';
import { Calendar, Instagram, Phone, MapPin, Sparkles, ArrowDown, Eye, Compass } from 'lucide-react';

// Subcomponents
import Navbar from './components/Navbar';
import BookingModal from './components/BookingModal';
import Specialties from './components/Specialties';
import Experience from './components/Experience';
import ResultsGallery from './components/ResultsGallery';

// Images
import heroVideo from './assets/images/video/video-apresentacao-horizontal.mp4';
import logoImg from './assets/images/lash/logo nova.png';

const BASE_IMG = 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image';

const browsImg = `${BASE_IMG}?prompt=${encodeURIComponent(
  'Editorial close-up photography of elegant Brazilian woman face with perfectly sculpted customized eyebrow design, microblading-style natural hair strokes, soft henna gradient filling, precise golden-ratio facial symmetry, gentle warm rim lighting on pearl beige seamless studio background, glossy nude lip, subtle champagne gold jewelry detail, ultra-sharp focus on eyebrows, luxurious minimalist high-end beauty editorial aesthetic, 85mm portrait lens shallow depth of field, photorealistic'
)}&image_size=portrait_4_3`;

const lashesImg = `${BASE_IMG}?prompt=${encodeURIComponent(
  'Cinematic three-quarter close-up of sophisticated woman eye decorated with luxurious volume eyelash extensions, doll-eye mixed-length mapping with darker dense outer corner, perfectly isolated fanned lashes catching soft warm studio light, porcelain skin with nude eyeshadow, subtle champagne inner corner highlight, pearl ivory seamless studio backdrop, premium lash salon editorial aesthetic, 100mm macro portrait lens ultra-sharp focus on eyelashes, shallow depth of field, photorealistic'
)}&image_size=portrait_4_3`;

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingCategory, setBookingCategory] = useState<'cilios' | 'sobrancelhas' | 'todos'>('todos');
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('inicio');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        // If bottom of hero is out of view
        setScrolledPastHero(rect.bottom < 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (category: typeof bookingCategory = 'todos') => {
    setBookingCategory(category);
    setIsBookingOpen(true);
  };

  const WA_LINK = 'http://wa.me/+5519994645445/';

  return (
    <div className="min-h-screen bg-perola flex flex-col relative text-grafite antialiased selection:bg-dourado selection:text-perola">
      
      {/* Floating Header */}
      <Navbar onOpenBooking={() => handleOpenBooking('todos')} />

      {/* HERO SECTION */}
      <section 
        id="inicio" 
        className="min-h-[100vh] lg:min-h-screen flex items-center pt-36 pb-20 md:pt-44 md:pb-24 lg:pt-48 lg:pb-32 bg-perola"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-grafite leading-[1.1]">
                Seu olhar merece ser <span className="italic font-normal text-rose">único</span>.
              </h1>
            </div>

            <p className="font-sans text-sm md:text-base text-grafite/80 leading-relaxed font-light max-w-xl">
              Realce sua beleza natural com técnicas personalizadas de Lash Design e Design de Sobrancelhas. Cada detalhe é pensado para valorizar seus traços, respeitando a harmonia do seu rosto e o resultado que você deseja.
            </p>

            {/* Specialties bullet line */}
            <div className="py-2 border-y border-cinza-medio/40 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm text-grafite font-medium">
              <span className="flex items-center gap-1.5 font-serif tracking-wider"><span className="w-1.5 h-1.5 rounded-full bg-dourado" /> Atendimento personalizado</span>
              <span className="flex items-center gap-1.5 font-serif tracking-wider"><span className="w-1.5 h-1.5 rounded-full bg-dourado" /> Técnica</span>
              <span className="flex items-center gap-1.5 font-serif tracking-wider"><span className="w-1.5 h-1.5 rounded-full bg-dourado" /> Precisão</span>
              <span className="flex items-center gap-1.5 font-serif tracking-wider"><span className="w-1.5 h-1.5 rounded-full bg-dourado" /> Naturalidade</span>
            </div>

            {/* CTA Trigger Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="font-sans text-xs uppercase tracking-widest bg-grafite text-perola hover:bg-dourado px-8 py-4 border border-grafite hover:border-dourado transition-all duration-300 font-bold rounded-none shadow-md flex items-center justify-center gap-2 group"
              >
                <Calendar size={14} />
                Agendar meu horário
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              
              <a
                href="#especialidades"
                className="font-sans text-xs uppercase tracking-widest bg-transparent border border-cinza-medio text-grafite hover:text-grafite hover:border-grafite px-8 py-4 transition-all duration-300 font-semibold rounded-none flex items-center justify-center gap-2"
              >
                Conhecer Serviços
                <ArrowDown size={14} className="animate-bounce" />
              </a>
            </div>
          </div>

          {/* Hero Right Media */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="w-full max-w-lg aspect-[4/5] bg-perola border border-cinza-medio p-3 shadow-lg">
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-[1.5s] ease-out"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO 2 — CONEXÃO */}
      <section className="py-24 md:py-32 bg-perola border-y border-cinza-medio/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Title / Statement */}
            <div className="lg:col-span-5 space-y-4">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-dourado font-semibold block">
                Mais do que um procedimento
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-grafite leading-tight">
                Um cuidado com <span className="italic text-rose">você</span>.
              </h2>
            </div>

            {/* Paragraph Description */}
            <div className="lg:col-span-7 space-y-6 lg:pl-12">
              <p className="font-serif text-xl md:text-2xl text-grafite leading-relaxed font-light">
                Seu rosto tem características únicas. Por isso, não acreditamos em um formato padrão de beleza.
              </p>
              
              <p className="font-sans text-sm md:text-base text-grafite/80 leading-relaxed font-light">
                Na Ane Souza, cada atendimento é pensado individualmente para criar um resultado que combine com seu olhar, seu rosto e seu estilo.
              </p>

              <p className="font-sans text-sm md:text-base text-grafite leading-relaxed font-semibold">
                Porque realçar sua beleza não significa mudar quem você é.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SEÇÃO 3 — SERVIÇOS */}
      <Specialties />

      {/* SEÇÃO 4 — SOBRANCELHAS */}
      <section id="sobrancelhas" className="py-24 md:py-32 bg-perola border-y border-cinza-medio/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Imagem */}
            <div className="lg:col-span-6">
              <div className="aspect-[4/5] bg-perola border border-cinza-medio p-3 shadow-lg max-w-md mx-auto lg:mx-0">
                <img
                  src={browsImg}
                  alt="Design de Sobrancelhas"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Texto */}
            <div className="lg:col-span-6 space-y-6 lg:pl-8">
              <div className="space-y-4">
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-dourado font-semibold block">
                  Design de Sobrancelhas
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-grafite leading-tight">
                  Sobrancelhas que <span className="italic text-rose">valorizam</span> o seu rosto.
                </h2>
              </div>

              <p className="font-serif text-xl md:text-2xl text-grafite leading-relaxed font-light">
                O design de sobrancelhas vai muito além de remover fios.
              </p>
              
              <p className="font-sans text-sm md:text-base text-grafite/80 leading-relaxed font-light">
                É um trabalho de proporção, simetria e harmonia, respeitando o formato natural da sua sobrancelha para criar um resultado elegante e personalizado.
              </p>

              <p className="font-sans text-sm md:text-base text-grafite leading-relaxed font-semibold">
                Seu rosto não é igual ao de ninguém. Seu design também não precisa ser.
              </p>

              <div className="pt-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest bg-grafite text-perola hover:bg-dourado px-8 py-4 border border-grafite hover:border-dourado transition-all duration-300 font-bold rounded-none shadow-md group"
                >
                  <Compass size={14} />
                  Quero minhas sobrancelhas
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 5 — LASH DESIGN */}
      <section id="lash-design" className="py-24 md:py-32 bg-perola">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Texto */}
            <div className="lg:col-span-6 lg:order-1 space-y-6 lg:pr-8 order-2">
              <div className="space-y-4">
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-dourado font-semibold block">
                  Lash Design
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-grafite leading-tight">
                  Um olhar que <span className="italic text-rose">fala</span> por você.
                </h2>
              </div>

              <p className="font-serif text-xl md:text-2xl text-grafite leading-relaxed font-light">
                O Lash Design é pensado para destacar os olhos de forma personalizada.
              </p>
              
              <p className="font-sans text-sm md:text-base text-grafite/80 leading-relaxed font-light">
                Considerando o formato do seu olhar e o efeito que você deseja, cada fio é estrategicamente posicionado para entregar o resultado ideal.
              </p>

              <p className="font-sans text-sm text-grafite font-medium">Mais definição.</p>
              <p className="font-sans text-sm text-grafite font-medium">Mais presença.</p>
              <p className="font-sans text-sm text-grafite font-medium">Mais confiança.</p>

              <p className="font-sans text-sm md:text-base text-grafite leading-relaxed font-semibold pt-2">
                Sem perder a sua essência.
              </p>

              <div className="pt-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest bg-grafite text-perola hover:bg-dourado px-8 py-4 border border-grafite hover:border-dourado transition-all duration-300 font-bold rounded-none shadow-md group"
                >
                  <Eye size={14} />
                  Quero meus cílios
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Imagem */}
            <div className="lg:col-span-6 lg:order-2 order-1">
              <div className="aspect-[4/5] bg-perola border border-cinza-medio p-3 shadow-lg max-w-md mx-auto lg:ml-auto lg:mr-0">
                <img
                  src={lashesImg}
                  alt="Lash Design"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 6 — DIFERENCIAL */}
      <Experience />

      {/* SEÇÃO 7 — RESULTADO */}
      <ResultsGallery />

      {/* CTA FINAL */}
      <section className="py-24 md:py-32 bg-grafite text-perola text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-dourado font-semibold block">
            Pronta para valorizar o seu olhar?
          </span>
          
          <h2 className="font-serif text-4xl md:text-6xl font-light tracking-wide leading-tight">
            Agende seu horário com a <span className="italic font-normal text-rose">Ane Souza</span>.
          </h2>
          
          <p className="font-sans text-sm md:text-base text-perola/80 leading-relaxed max-w-xl mx-auto font-light">
            Descubra um design pensado especialmente para você.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto font-sans text-xs uppercase tracking-widest bg-dourado text-perola hover:bg-rose px-8 py-4 transition-all duration-300 font-bold rounded-none shadow-md flex items-center justify-center gap-2 group"
            >
              <Calendar size={14} />
              Agendar meu horário
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>

          <div className="pt-8 space-y-1">
            <p className="font-serif text-lg tracking-wide text-perola font-light">
              Ane Souza
            </p>
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-dourado font-semibold">
              Lash Designer &amp; Brow Designer
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-perola border-t border-cinza-medio/30 py-16 md:py-24 text-grafite">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-cinza-medio/30 pb-16">
            
            {/* Logo column */}
            <div className="md:col-span-6 space-y-4">
              <img 
                src={logoImg} 
                alt="Ane Souza Logo" 
                className="h-24 md:h-32 w-auto"
              />
              <p className="font-sans text-xs text-grafite/70 leading-relaxed font-light max-w-sm pt-2">
                Realce sua beleza natural com técnicas personalizadas de Lash Design e Design de Sobrancelhas. Valorizando seus traços com harmonia e naturalidade.
              </p>
              
              {/* Instagram link */}
              <div className="pt-2 space-y-3">
                <div className="space-y-1">
                  <p className="font-serif text-lg tracking-wide text-grafite font-light">
                    Ane Souza
                  </p>
                  <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-dourado font-semibold">
                    Lash Designer &amp; Brow Designer
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Column */}
            <div className="md:col-span-6 space-y-6">
              <div className="space-y-4">
                <h4 className="font-sans text-[10px] uppercase tracking-widest text-grafite/50 font-bold border-b border-cinza-medio/30 pb-2">
                  Contato &amp; Atendimento
                </h4>
                <div className="space-y-3 font-sans text-xs text-grafite/80 leading-relaxed font-light">
                  <div className="flex gap-2.5 items-start">
                    <MapPin size={16} className="text-dourado shrink-0 mt-0.5" />
                    <span>
                      Av. Baden Powell, 1402<br />
                      Jardim Nova Europa, Campinas - SP
                    </span>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <Phone size={16} className="text-dourado shrink-0 mt-0.5" />
                    <a href={WA_LINK} target="_blank" rel="noreferrer" className="hover:text-dourado font-medium">
                      +55 (19) 99464-5445
                    </a>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <Instagram size={16} className="text-dourado shrink-0 mt-0.5" />
                    <a
                      href="https://www.instagram.com/luahstudiodebeleza/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-dourado font-medium"
                    >
                      @anesouza.studio
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 pt-2">
                <h4 className="font-sans text-[10px] uppercase tracking-widest text-grafite/50 font-bold border-b border-cinza-medio/30 pb-2">
                  Horários
                </h4>
                <p className="text-grafite/60 leading-relaxed font-sans text-xs">
                  Terça a Sábado: 09:00 às 19:30<br />
                  Domingo e Segunda: Fechado
                </p>
              </div>

              {/* CTA Footer */}
              <div className="pt-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest bg-grafite text-perola hover:bg-dourado px-6 py-3 border border-grafite hover:border-dourado transition-all duration-300 font-bold rounded-none shadow-sm group"
                >
                  <Calendar size={12} />
                  Agendar horário
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

          </div>

          {/* Legal Bar */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-sans text-[10px] text-grafite/50 tracking-wider">
              COPYRIGHT © 2026 ANE SOUZA. TODOS OS DIREITOS RESERVADOS.
            </span>
            <div className="flex gap-6 font-sans text-[10px] tracking-wider text-grafite/50">
              <span className="hover:text-grafite cursor-pointer">Termos de Uso</span>
              <span className="hover:text-grafite cursor-pointer">Privacidade</span>
            </div>
          </div>

        </div>
      </footer>

      {/* MULTI-STEP BOOKING MODAL */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialCategory={bookingCategory}
      />

      {/* FLOATING WHATSAPP BUTTON */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center">
        <div className="absolute w-full h-full bg-[#25D366] rounded-full animate-ping opacity-20"></div>
        <a
          href="http://wa.me/+5519994645445/"
          target="_blank"
          rel="noreferrer"
          className="relative w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Agendar pelo WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.405-.883-.733-1.48-1.638-1.653-1.935-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>
      </div>

    </div>
  );
}

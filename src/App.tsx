import { useState, useEffect } from 'react';
import { Calendar, Instagram, Phone, MapPin, Sparkles, ArrowUpRight, ArrowDown } from 'lucide-react';

// Subcomponents
import Navbar from './components/Navbar';
import BookingModal from './components/BookingModal';
import Specialties from './components/Specialties';
import Experience from './components/Experience';
import SpaceGallery from './components/SpaceGallery';
import ResultsGallery from './components/ResultsGallery';
import Testimonials from './components/Testimonials';

// Images
import heroSalonImg from './assets/images/hero_salon_1783088623394.jpg';
import logoImg from './assets/images/LOGO TRANSP.png';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingCategory, setBookingCategory] = useState<'cabelos' | 'unhas' | 'cilios' | 'sobrancelhas' | 'todos'>('todos');
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

  return (
    <div className="min-h-screen bg-perola flex flex-col relative text-grafite antialiased selection:bg-dourado selection:text-perola">
      
      {/* Floating Header */}
      <Navbar onOpenBooking={() => handleOpenBooking('todos')} />

      {/* HERO SECTION */}
      <section 
        id="inicio" 
        className="relative min-h-[100vh] lg:min-h-screen flex items-center pt-36 pb-20 md:pt-44 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-perola"
      >
        {/* Subtle decorative grid background */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-grafite leading-[1.1]">
                A beleza de uma <span className="italic font-normal text-rose">experiência</span> exclusiva.
              </h1>
            </div>

            <p className="font-sans text-sm md:text-base text-grafite/80 leading-relaxed font-light max-w-xl">
              Não vendemos serviços de beleza. Entregamos uma experiência de exclusividade e cuidado. Um momento pensado para você, com conforto e sofisticação em cada detalhe.
            </p>

            {/* Specialties bullet line */}
            <div className="py-2 border-y border-cinza-medio/40 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm text-grafite font-medium">
              <span className="flex items-center gap-1.5 font-serif tracking-wider"><span className="w-1.5 h-1.5 rounded-full bg-dourado" /> Cabelos</span>
              <span className="flex items-center gap-1.5 font-serif tracking-wider"><span className="w-1.5 h-1.5 rounded-full bg-dourado" /> Unhas</span>
              <span className="flex items-center gap-1.5 font-serif tracking-wider"><span className="w-1.5 h-1.5 rounded-full bg-dourado" /> Cílios</span>
              <span className="flex items-center gap-1.5 font-serif tracking-wider"><span className="w-1.5 h-1.5 rounded-full bg-dourado" /> Sobrancelhas</span>
            </div>

            {/* CTA Trigger Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="http://wa.me/+5551980889798/"
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
                Conhecer Especialidades
                <ArrowDown size={14} className="animate-bounce" />
              </a>
            </div>
          </div>

          {/* Hero Right Media */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Elegant architectural arch or geometric thin frame wrapping the hero salon image */}
            <div className="w-full max-w-lg aspect-[4/5] relative bg-perola border border-cinza-medio p-3 shadow-lg">
              <div className="absolute inset-0 border border-dourado/40 m-6 pointer-events-none z-10" />
              
              <img
                src={heroSalonImg}
                alt="Studio Luah Luxury Interior"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-[1.5s] ease-out"
              />
            </div>
          </div>

        </div>

        {/* Elegant scroll down indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 pointer-events-none">
          <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-cinza-medio font-medium">Scroll down</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-cinza-medio to-transparent animate-pulse" />
        </div>
      </section>

      {/* QUIEM SOMOS / INTRODUCTION */}
      <section className="py-24 md:py-32 bg-perola relative border-y border-cinza-medio/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Title / Statement */}
            <div className="lg:col-span-5 space-y-4">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-dourado font-semibold block">
                Essência da Marca
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-grafite leading-tight">
                Um estúdio batizado com <span className="italic text-rose">afeto</span>.
              </h2>
              <div className="w-12 h-[1px] bg-dourado mt-6" />
            </div>

            {/* Paragraph Description */}
            <div className="lg:col-span-7 space-y-6 lg:pl-12">
              <p className="font-serif text-xl md:text-2xl text-grafite leading-relaxed font-light">
                O nome nasce de Luara, filha da Fran. Cada detalhe da experiência carrega o cuidado de quem faz por amor.
              </p>
              
              <div className="w-full h-[1px] bg-cinza-medio/30" />
              
              <p className="font-sans text-sm md:text-base text-grafite/80 leading-relaxed font-light">
                Para mulheres que valorizam qualidade acima de preço. Que buscam uma experiência completa de atendimento, frequentam ambientes premium e investem em autocuidado.
              </p>

              <p className="font-sans text-sm md:text-base text-grafite leading-relaxed font-semibold">
                Sempre estúdio, nunca salão — falamos de momento e exclusividade.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SPECIALTIES (CABELOS • UNHAS • CÍLIOS • SOBRANCELHAS) */}
      <Specialties />

      {/* EXPERIÊNCIA PILLARS */}
      <Experience />

      {/* NOSSO ESPAÇO PHYSICAL INTERIOR GALLERY */}
      <SpaceGallery />

      {/* PORTFOLIO RESULTS GALLERY */}
      <ResultsGallery />

      {/* CLIENT TESTIMONIALS */}
      <Testimonials />

      {/* FINAL CALL TO ACTION (CTA) */}
      <section className="py-24 md:py-32 bg-grafite text-perola relative overflow-hidden text-center">
        {/* Ambient background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-dourado/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-dourado font-semibold block">
            Seu Momento Luah
          </span>
          
          <h2 className="font-serif text-4xl md:text-6xl font-light tracking-wide leading-tight">
            A <span className="italic font-normal text-rose">exclusividade</span> que você merece.
          </h2>
          
          <p className="font-sans text-sm md:text-base text-perola/80 leading-relaxed max-w-xl mx-auto font-light">
            Agende seu horário e descubra uma nova forma de viver o autocuidado. Sinta a recepção e o acolhimento do Studio Luah.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="http://wa.me/+5551980889798/"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto font-sans text-xs uppercase tracking-widest bg-dourado text-perola hover:bg-rose px-8 py-4 transition-all duration-300 font-bold rounded-none shadow-md flex items-center justify-center gap-2 group"
            >
              <Calendar size={14} />
              Agendar pelo WhatsApp
            </a>
            
            <a
              href="http://wa.me/+5551980889798/"
              className="w-full sm:w-auto font-sans text-xs uppercase tracking-widest bg-transparent border border-perola/20 text-perola hover:text-dourado hover:border-dourado px-8 py-4 transition-all duration-300 font-semibold rounded-none flex items-center justify-center gap-2"
            >
              <Phone size={14} />
              Ligar no Estúdio
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-perola border-t border-cinza-medio/30 py-16 md:py-24 text-grafite relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-cinza-medio/30 pb-16">
            
            {/* Logo column */}
            <div className="md:col-span-5 space-y-4">
              <img 
                src={logoImg} 
                alt="Studio Luah Logo" 
                className="h-24 md:h-32 w-auto"
              />
              <p className="font-sans text-xs text-grafite/70 leading-relaxed font-light max-w-sm pt-2">
                Uma experiência de exclusividade e cuidado. Um ambiente preparado para valorizar quem você é.
              </p>
              
              {/* Instagram link */}
              <div className="pt-2">
                <a
                  href="https://www.instagram.com/luahstudiodebeleza/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-dourado hover:text-rose transition-colors font-bold group"
                >
                  <Instagram size={14} />
                  @luahstudiodebeleza
                  <ArrowUpRight size={12} className="transform transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Address Column */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="font-sans text-[10px] uppercase tracking-widest text-grafite/50 font-bold border-b border-cinza-medio/30 pb-2">
                Endereço & Acesso
              </h4>
              <div className="space-y-3 font-sans text-xs text-grafite/80 leading-relaxed font-light">
                <div className="flex gap-2.5 items-start">
                  <MapPin size={16} className="text-dourado shrink-0 mt-0.5" />
                  <span>
                    Av. Plínio Brasil Milano, 280<br />
                    Higienópolis, Porto Alegre - RS<br />
                    CEP: 90520-000
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Column */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="font-sans text-[10px] uppercase tracking-widest text-grafite/50 font-bold border-b border-cinza-medio/30 pb-2">
                Contatos & Horários
              </h4>
              <div className="space-y-3 font-sans text-xs text-grafite/80 leading-relaxed font-light">
                <div className="flex gap-2.5 items-start">
                  <Phone size={16} className="text-dourado shrink-0 mt-0.5" />
                  <a href="http://wa.me/+5551980889798/" className="hover:text-dourado font-medium">
                    +55 (51) 98088-9798
                  </a>
                </div>
                
                <p className="text-grafite/60 pt-1 leading-relaxed">
                  Terça a Sábado: 09:00 às 19:30<br />
                  Domingo e Segunda: Fechado
                </p>
              </div>
            </div>

          </div>

          {/* Legal Bar */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-sans text-[10px] text-grafite/50 tracking-wider">
              COPYRIGHT © 2026 STUDIO LUAH. TODOS OS DIREITOS RESERVADOS.
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
          href="http://wa.me/+5551980889798/"
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

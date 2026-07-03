import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import logoImg from '../assets/images/LOGO TRANSP.png';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Nossa Experiência', href: '#experiencia' },
    { name: 'Espaço', href: '#espaco' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-perola/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 xl:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex flex-col items-start select-none group">
          <img 
            src={logoImg} 
            alt="Studio Luah Logo" 
            className="h-24 md:h-32 w-auto transition-opacity duration-300 hover:opacity-80"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center lg:gap-4 xl:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-[10px] xl:text-xs uppercase tracking-wider xl:tracking-widest text-grafite/80 hover:text-dourado transition-colors duration-300 font-medium relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-dourado transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a 
            href="http://wa.me/+5551980889798/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-sans text-[9px] xl:text-[10px] uppercase tracking-wider xl:tracking-widest bg-grafite text-perola hover:bg-dourado hover:text-perola px-3 xl:px-4 py-2 xl:py-2.5 border border-grafite hover:border-dourado transition-all duration-300 font-medium rounded-none shadow-sm"
          >
            <Calendar size={12} />
            Agendar Horário
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-1 text-grafite hover:text-dourado transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-perola z-40 flex flex-col justify-between p-8 border-t border-cinza-medio">
          <nav className="flex flex-col gap-6 mt-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="font-serif text-2xl tracking-widest text-grafite hover:text-dourado transition-colors duration-300 py-1"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-6 mb-12">
            <a
              href="http://wa.me/+5551980889798/"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-widest bg-grafite text-perola py-4 font-semibold hover:bg-dourado transition-colors"
            >
              <Calendar size={16} />
              Agendar Horário
            </a>
            <div className="text-center text-xs text-grafite/50 tracking-wider">
              Av. Plínio Brasil Milano, 280 • Porto Alegre, RS
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

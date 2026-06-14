import React, { useEffect, useState } from 'react';
import logoImg from '@assets/image_1781470521480.png';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0d0d0d]/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
          <div className="relative w-10 h-10 flex items-center justify-center">
            <img
              src={logoImg}
              alt="Blessing Digital Logo"
              className="w-10 h-10 object-contain"
              style={{ filter: 'invert(1) brightness(1.1)' }}
            />
          </div>
          <span className="font-serif font-semibold text-xl tracking-wide hidden sm:block">Blessing Digital</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['work', 'services', 'about'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm font-medium text-gray-300 hover:text-white uppercase tracking-widest relative group overflow-hidden"
              data-testid={`nav-link-${item}`}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8B1A1A] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo('contact')}
          className="bg-[#8B1A1A] hover:bg-[#a01c1c] text-white px-6 py-2.5 rounded-sm text-sm font-medium uppercase tracking-wider transition-colors duration-300 shadow-[0_0_15px_rgba(139,26,26,0.3)] hover:shadow-[0_0_25px_rgba(139,26,26,0.5)]"
          data-testid="nav-cta"
        >
          Get In Touch
        </button>
      </div>
    </nav>
  );
}

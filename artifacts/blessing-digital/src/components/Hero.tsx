import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const ghostBRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      [title1Ref.current, title2Ref.current],
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power4.out", delay: 0.2 }
    )
    .fromTo(
      subtextRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(
      ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(
      ghostBRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 0.05, duration: 2, ease: "power2.out" },
      "-=1"
    );

    const handleMouseMove = (e: MouseEvent) => {
      if (!ghostBRef.current || !heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPos = (clientX / innerWidth - 0.5) * 40;
      const yPos = (clientY / innerHeight - 0.5) * 40;

      gsap.to(ghostBRef.current, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      <div 
        ref={ghostBRef}
        className="absolute -right-20 top-1/2 -translate-y-1/2 text-[40vw] font-serif font-bold text-white leading-none pointer-events-none select-none opacity-5 z-0"
        style={{ fontFamily: 'Cormorant Garamond' }}
      >
        B
      </div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="w-full max-w-4xl ml-[5%]">
          <h1 ref={title1Ref} className="text-5xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tight text-white leading-[0.9]">
            We Build Websites
          </h1>
          <h1 ref={title2Ref} className="text-5xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tight text-white leading-[0.9] mt-2 md:mt-4">
            Worth <span className="relative inline-block">Remembering<span className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[4px] md:h-[8px] bg-[#8B1A1A]"></span></span>
          </h1>
          
          <p ref={subtextRef} className="mt-8 md:mt-12 text-lg md:text-xl font-mono text-gray-400 tracking-wider">
            Modern Websites for Growing Businesses
          </p>

          <div ref={ctaRef} className="mt-12 flex flex-wrap gap-6">
            <button 
              onClick={() => scrollTo('work')}
              className="bg-[#8B1A1A] hover:bg-[#a01c1c] text-white px-8 py-4 rounded-sm text-sm font-medium uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 shadow-[0_0_20px_rgba(139,26,26,0.3)] hover:shadow-[0_0_30px_rgba(139,26,26,0.5)]"
              data-testid="hero-btn-work"
            >
              View Our Work
            </button>
            <button 
              onClick={() => scrollTo('contact')}
              className="bg-transparent border border-white/20 hover:border-white/50 text-white px-8 py-4 rounded-sm text-sm font-medium uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 hover:bg-white/5"
              data-testid="hero-btn-contact"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-12 flex flex-col items-center gap-4 animate-bounce">
        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest origin-bottom -rotate-90 translate-y-8">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#8B1A1A] to-transparent"></div>
      </div>
    </section>
  );
}

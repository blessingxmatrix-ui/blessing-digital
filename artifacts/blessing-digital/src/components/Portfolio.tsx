import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current, 
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        
        <div ref={headerRef} className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight inline-block relative">
            Selected Work
            <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-[#8B1A1A]"></span>
          </h2>
        </div>

        {/* Featured Project */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-32">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#8B1A1A]/20 text-[#8B1A1A] px-3 py-1 rounded-sm text-xs font-mono border border-[#8B1A1A]/30">FEATURED</span>
              <span className="text-sm font-mono text-gray-400">Live Website</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Elite Barbers</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed font-sans">
              Web Design & Development · Booking Integration · Mobile Optimized
            </p>
            <p className="text-gray-300 mb-10 leading-relaxed max-w-md">
              A premium dark-mode booking experience designed to convert. We built a custom interface that matches the high-end service of the shop, integrating seamless appointment scheduling.
            </p>
            <button className="bg-transparent border border-[#8B1A1A] text-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white px-8 py-3 rounded-sm text-sm font-medium uppercase tracking-widest transition-all duration-300" data-testid="btn-view-elite-barbers">
              View Live Site
            </button>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/5 bg-[#111] aspect-video flex items-center justify-center p-1">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8B1A1A]/10 to-transparent z-10 pointer-events-none rounded-xl"></div>
              <img src="/images/elite-barbers.png" alt="Elite Barbers Website" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>

        {/* Concept Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          
          <ConceptCard 
            title="Elite Restaurant"
            tags="Web Design · Fine Dining"
            image="/images/elite-restaurant.png"
            offset={0}
          />
          
          <ConceptCard 
            title="Maison Elite"
            tags="Real Estate · Luxury"
            image="/images/maison-elite.png"
            offset={40}
          />
          
          <ConceptCard 
            title="Elite Retail"
            tags="E-commerce · Premium"
            image="/images/elite-retail.png"
            offset={0}
          />

        </div>
      </div>
    </section>
  );
}

function ConceptCard({ title, tags, image, offset }: { title: string, tags: string, image: string, offset: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative group overflow-hidden rounded-lg cursor-pointer md:mt-[${offset}px]`}
      style={{ marginTop: offset > 0 ? `${offset}px` : 0 }}
      data-testid={`concept-card-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="aspect-[3/4] overflow-hidden bg-[#111]">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-40" />
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-[#8B1A1A] font-mono text-xs mb-2 tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{tags}</span>
        <h4 className="text-2xl font-serif font-bold text-white mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">{title}</h4>
        
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
          <button className="text-sm font-medium uppercase tracking-widest border-b border-[#8B1A1A] pb-1 hover:text-[#8B1A1A] transition-colors">
            View Concept
          </button>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#8B1A1A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
    </motion.div>
  );
}

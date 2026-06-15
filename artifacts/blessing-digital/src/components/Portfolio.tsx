import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

import erHero from '@assets/image_1781521837887.png';
import erMenu1 from '@assets/image_1781521970346.png';
import erMenu2 from '@assets/image_1781522027931.png';
import erMenu3 from '@assets/image_1781522059140.png';
import erAddons from '@assets/image_1781522107826.png';
import erAbout from '@assets/image_1781522144449.png';
import erGallery from '@assets/image_1781522180670.png';
import erReviews from '@assets/image_1781522223511.png';
import erHours from '@assets/image_1781522251180.png';
import erContact from '@assets/image_1781522293153.png';
import erFooter from '@assets/image_1781522352800.png';

gsap.registerPlugin(ScrollTrigger);

const eliteRestaurantScreenshots = [
  erHero, erMenu1, erMenu2, erMenu3, erAddons,
  erAbout, erGallery, erReviews, erHours, erContact, erFooter,
];

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
            start: 'top 80%',
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

        {/* Featured Project — Elite Barbers */}
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
            <a
              href="https://blessingxmatrix-ui.github.io/Example/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border border-[#8B1A1A] text-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white px-8 py-3 rounded-sm text-sm font-medium uppercase tracking-widest transition-all duration-300"
              data-testid="btn-view-elite-barbers"
            >
              View Live Site →
            </a>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/5 bg-[#111] aspect-video">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8B1A1A]/10 to-transparent z-10 pointer-events-none rounded-xl"></div>
              <div className="w-full h-full flex items-center justify-center text-gray-600 font-mono text-sm">
                <span>— Elite Barbers screenshots coming soon —</span>
              </div>
            </div>
          </div>
        </div>

        {/* Concept Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

          {/* Elite Restaurant — real screenshots carousel */}
          <EliteRestaurantCard />

          <ConceptCard
            title="Maison Elite"
            tags="Real Estate · Luxury"
            offset={40}
          />

          <ConceptCard
            title="Elite Retail"
            tags="E-commerce · Premium"
            offset={0}
          />

        </div>
      </div>
    </section>
  );
}

function EliteRestaurantCard() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [thumbStart, setThumbStart] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const VISIBLE_THUMBS = 5;

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(prev => {
        const next = (prev + 1) % eliteRestaurantScreenshots.length;
        setThumbStart(start => {
          if (next >= start + VISIBLE_THUMBS) return start + 1;
          if (next < start) return next;
          return start;
        });
        return next;
      });
    }, 2500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (i: number) => {
    setCurrent(i);
    setThumbStart(start => {
      if (i >= start + VISIBLE_THUMBS) return Math.max(0, i - VISIBLE_THUMBS + 1);
      if (i < start) return i;
      return start;
    });
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(prev => {
        const next = (prev + 1) % eliteRestaurantScreenshots.length;
        setThumbStart(s => {
          if (next >= s + VISIBLE_THUMBS) return s + 1;
          if (next < s) return next;
          return s;
        });
        return next;
      });
    }, 2500);
  };

  const visibleThumbs = eliteRestaurantScreenshots.slice(thumbStart, thumbStart + VISIBLE_THUMBS);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative group overflow-hidden rounded-lg cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-testid="concept-card-elite-restaurant"
    >
      {/* Main image with crossfade */}
      <div className="aspect-[3/4] overflow-hidden bg-[#111] relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={eliteRestaurantScreenshots[current]}
            alt={`Elite Restaurant screenshot ${current + 1}`}
            className="absolute inset-0 w-full h-full object-cover object-top"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 0.4 : 0.85 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>

        {/* Thumbnail strip — always visible at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex gap-1 p-2 bg-gradient-to-t from-black/80 to-transparent">
          {visibleThumbs.map((src, i) => {
            const globalIdx = thumbStart + i;
            return (
              <button
                key={globalIdx}
                onClick={() => goTo(globalIdx)}
                className={`flex-1 aspect-video overflow-hidden rounded border-[1.5px] transition-all duration-200 ${globalIdx === current ? 'border-[#8B1A1A] scale-105' : 'border-white/20 opacity-60 hover:opacity-100'}`}
                data-testid={`thumb-er-${globalIdx}`}
              >
                <img src={src} alt="" className="w-full h-full object-cover object-top" />
              </button>
            );
          })}
        </div>

        {/* Slide counter */}
        <div className="absolute top-3 right-3 z-20 bg-black/60 text-white font-mono text-[10px] px-2 py-1 rounded-sm">
          {current + 1}/{eliteRestaurantScreenshots.length}
        </div>
      </div>

      {/* Hover overlay */}
      <div className={`absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-[#8B1A1A] font-mono text-xs mb-2 tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">Web Design · Food & Beverage</span>
        <h4 className="text-2xl font-serif font-bold text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">Elite Restaurant</h4>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150 max-w-xs">Premium burger restaurant website with full menu, ordering system, gallery, and contact sections.</p>
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
          <span className="text-sm font-medium uppercase tracking-widest border-b border-[#8B1A1A] pb-1 text-white">
            Concept Project
          </span>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#8B1A1A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
    </motion.div>
  );
}

function ConceptCard({ title, tags, offset }: { title: string; tags: string; offset: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative group overflow-hidden rounded-lg cursor-pointer"
      style={{ marginTop: offset > 0 ? `${offset}px` : 0 }}
      data-testid={`concept-card-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="aspect-[3/4] overflow-hidden bg-[#1a2035] flex items-center justify-center">
        <div className="text-center px-6">
          <div className="w-16 h-16 border border-[#8B1A1A]/40 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-[#8B1A1A] text-2xl font-serif font-bold">{title[0]}</span>
          </div>
          <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Concept Project</p>
          <p className="text-gray-400 text-sm mt-2">{tags}</p>
        </div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-gradient-to-br from-[#8B1A1A]/20 to-[#1e3a8a]/20"></div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-[#8B1A1A] font-mono text-xs mb-2 tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{tags}</span>
        <h4 className="text-2xl font-serif font-bold text-white mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">{title}</h4>
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
          <button className="text-sm font-medium uppercase tracking-widest border-b border-[#8B1A1A] pb-1 hover:text-[#8B1A1A] transition-colors">
            Coming Soon
          </button>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#8B1A1A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
    </motion.div>
  );
}

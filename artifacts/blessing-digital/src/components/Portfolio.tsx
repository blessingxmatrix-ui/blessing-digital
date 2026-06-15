import React, { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Asset imports ─────────────────────────────────────────── */

import barberCover from '@assets/elite_barbers_cover.png';

// Elite Restaurant
import erCover  from '@assets/image_1781522817861.png';
import erHero   from '@assets/image_1781521837887.png';
import erMenu1  from '@assets/image_1781521970346.png';
import erMenu2  from '@assets/image_1781522027931.png';
import erMenu3  from '@assets/image_1781522059140.png';
import erAddons from '@assets/image_1781522107826.png';
import erAbout  from '@assets/image_1781522144449.png';
import erGallery  from '@assets/image_1781522180670.png';
import erReviews  from '@assets/image_1781522223511.png';
import erHours    from '@assets/image_1781522251180.png';
import erContact  from '@assets/image_1781522293153.png';
import erFooter   from '@assets/image_1781522352800.png';

// Elite Retail
import retailCover   from '@assets/image_1781541409091.png';
import retailHero    from '@assets/image_1781540654794.png';
import retailVault   from '@assets/image_1781540696226.png';
import retail3d      from '@assets/image_1781540794721.png';
import retailAI      from '@assets/image_1781540825221.png';
import retailExhibit from '@assets/image_1781540851769.png';

gsap.registerPlugin(ScrollTrigger);

/* ─── Slide data ────────────────────────────────────────────── */

const eliteRestaurantSlides = [
  { src: erHero,    label: 'Hero' },
  { src: erMenu1,   label: 'Menu Overview' },
  { src: erMenu2,   label: 'Menu Cards' },
  { src: erMenu3,   label: 'More Items' },
  { src: erAddons,  label: 'Add-Ons' },
  { src: erAbout,   label: 'About' },
  { src: erGallery, label: 'Gallery' },
  { src: erReviews, label: 'Reviews' },
  { src: erHours,   label: 'Hours' },
  { src: erContact, label: 'Contact' },
  { src: erFooter,  label: 'Footer' },
];

const eliteRetailSlides = [
  { src: retailHero,    label: 'Kicks With No Limits' },
  { src: retailVault,   label: 'Vault Pass & Deal Simulator' },
  { src: retail3d,      label: '3D Colorway Customizer' },
  { src: retailAI,     label: 'AI Style Matchmaker' },
  { src: retailExhibit, label: 'The Infinity Exhibit' },
];

/* ─── Page ──────────────────────────────────────────────────── */

type LightboxState = { slides: { src: string; label: string }[]; title: string; index: number } | null;

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: headerRef.current, start: 'top 80%' } }
      );
    }
  }, []);

  const openLightbox = (slides: typeof eliteRestaurantSlides, title: string, index = 0) => {
    setLightbox({ slides, title, index });
  };

  return (
    <section id="work" ref={sectionRef} className="py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">

        <div ref={headerRef} className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight inline-block relative">
            Selected Work
            <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-[#8B1A1A]"></span>
          </h2>
        </div>

        {/* Featured — Elite Barbers */}
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
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/5 bg-[#1e2d52] aspect-video flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8B1A1A]/10 to-transparent z-10 pointer-events-none rounded-xl"></div>
              <img src={barberCover} alt="Elite Barbers" className="h-full w-full object-contain object-center" />
            </div>
          </div>
        </div>

        {/* Concept grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

          <ProjectCard
            cover={erCover}
            title="Elite Restaurant"
            tags="Web Design · Food & Beverage"
            description="Premium burger restaurant with full menu, ordering system, gallery & contact."
            slideCount={eliteRestaurantSlides.length}
            offset={0}
            onOpen={() => openLightbox(eliteRestaurantSlides, 'Elite Restaurant')}
            testId="concept-card-elite-restaurant"
          />

          {/* Maison Elite — coming soon */}
          <ConceptCard title="Maison Elite" tags="Real Estate · Luxury" offset={40} />

          <ProjectCard
            cover={retailCover}
            title="Elite Retail"
            tags="E-commerce · Streetwear"
            description="High-concept sneaker e-commerce with a 3D customizer, AI matchmaker and vault pass system."
            slideCount={eliteRetailSlides.length}
            offset={0}
            onOpen={() => openLightbox(eliteRetailSlides, 'Elite Retail')}
            testId="concept-card-elite-retail"
          />

        </div>
      </div>

      {/* Shared lightbox portal */}
      {lightbox && createPortal(
        <ProjectLightbox
          slides={lightbox.slides}
          title={lightbox.title}
          initialIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />,
        document.body
      )}
    </section>
  );
}

/* ─── Shared project card ───────────────────────────────────── */

function ProjectCard({
  cover, title, tags, description, slideCount, offset, onOpen, testId,
}: {
  cover: string; title: string; tags: string; description: string;
  slideCount: number; offset: number; onOpen: () => void; testId: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative group overflow-hidden rounded-lg cursor-pointer"
      style={{ marginTop: offset > 0 ? `${offset}px` : 0 }}
      onClick={onOpen}
      data-testid={testId}
    >
      <div className="aspect-[3/4] overflow-hidden bg-[#111] relative">
        <img
          src={cover}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-85 group-hover:opacity-50"
        />

        {/* Gallery pill */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
          <svg className="w-4 h-4 text-[#8B1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          <span className="text-white text-xs font-mono tracking-widest uppercase">View Gallery</span>
          <span className="text-gray-400 text-xs font-mono">{slideCount} screens</span>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <span className="text-[#8B1A1A] font-mono text-xs mb-2 tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{tags}</span>
        <h4 className="text-2xl font-serif font-bold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">{title}</h4>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-175 max-w-xs">{description}</p>
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200 flex items-center gap-2">
          <span className="text-sm font-medium uppercase tracking-widest border-b border-[#8B1A1A] pb-1 text-white">Open Gallery</span>
          <svg className="w-4 h-4 text-[#8B1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#8B1A1A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
    </motion.div>
  );
}

/* ─── Shared lightbox ───────────────────────────────────────── */

function ProjectLightbox({
  slides, title, initialIndex, onClose,
}: {
  slides: { src: string; label: string }[];
  title: string;
  initialIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(initialIndex);
  const [direction, setDirection] = useState(0);

  const go = useCallback((delta: number) => {
    setDirection(delta);
    setCurrent(prev => (prev + delta + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [go, onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const variants = {
    enter:  (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative w-full max-w-4xl bg-[#111] rounded-xl overflow-hidden shadow-2xl border border-white/10"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#0d0d0d]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8B1A1A]"></span>
            <span className="text-white font-serif font-semibold">{title}</span>
            <span className="text-gray-500 font-mono text-xs">— {slides[current].label}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-400 font-mono text-xs">{current + 1} / {slides.length}</span>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors text-xl leading-none" aria-label="Close">✕</button>
          </div>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden bg-[#0a0a0a]" style={{ height: 'clamp(300px, 55vh, 600px)' }}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              src={slides[current].src}
              alt={slides[current].label}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </AnimatePresence>

          <button
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-[#8B1A1A] border border-white/20 hover:border-[#8B1A1A] flex items-center justify-center transition-all duration-200"
            aria-label="Previous"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-[#8B1A1A] border border-white/20 hover:border-[#8B1A1A] flex items-center justify-center transition-all duration-200"
            aria-label="Next"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 px-4 py-3 overflow-x-auto bg-[#0d0d0d] border-t border-white/10">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`flex-shrink-0 w-16 h-10 rounded overflow-hidden border-2 transition-all duration-200 ${
                i === current ? 'border-[#8B1A1A] scale-105' : 'border-transparent opacity-50 hover:opacity-80'
              }`}
            >
              <img src={slide.src} alt={slide.label} className="w-full h-full object-cover object-top" />
            </button>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-1.5 pb-3 bg-[#0d0d0d]">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-5 h-1.5 bg-[#8B1A1A]' : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Placeholder card (Maison Elite) ───────────────────────── */

function ConceptCard({ title, tags, offset }: { title: string; tags: string; offset: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative group overflow-hidden rounded-lg cursor-default"
      style={{ marginTop: offset > 0 ? `${offset}px` : 0 }}
      data-testid={`concept-card-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="aspect-[3/4] overflow-hidden bg-[#1a2035] flex items-center justify-center relative">
        <div className="text-center px-6 relative z-10">
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
          <span className="text-sm font-medium uppercase tracking-widest border-b border-[#8B1A1A] pb-1 text-gray-400">Coming Soon</span>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#8B1A1A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
    </motion.div>
  );
}

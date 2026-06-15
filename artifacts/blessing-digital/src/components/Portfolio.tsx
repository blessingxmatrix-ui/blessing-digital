import React, { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

import erCover from '@assets/image_1781522817861.png';
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

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1,
          scrollTrigger: { trigger: headerRef.current, start: 'top 80%' }
        }
      );
    }
  }, []);

  const openLightbox = (index = 0) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
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

          <EliteRestaurantCard onOpen={openLightbox} />

          <ConceptCard title="Maison Elite"   tags="Real Estate · Luxury"   offset={40} />
          <ConceptCard title="Elite Retail"   tags="E-commerce · Premium"   offset={0}  />

        </div>
      </div>

      {/* Lightbox portal */}
      {lightboxOpen && createPortal(
        <EliteRestaurantLightbox
          slides={eliteRestaurantSlides}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />,
        document.body
      )}
    </section>
  );
}

/* ─── Elite Restaurant Card ─────────────────────────────────── */

function EliteRestaurantCard({ onOpen }: { onOpen: (index: number) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative group overflow-hidden rounded-lg cursor-pointer"
      onClick={() => onOpen(0)}
      data-testid="concept-card-elite-restaurant"
    >
      {/* Cover image */}
      <div className="aspect-[3/4] overflow-hidden bg-[#111] relative">
        <img
          src={erCover}
          alt="Elite Restaurant — cover"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-85 group-hover:opacity-50"
        />

        {/* "View Gallery" pill — always shown at bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
          <svg className="w-4 h-4 text-[#8B1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          <span className="text-white text-xs font-mono tracking-widest uppercase">View Gallery</span>
          <span className="text-gray-400 text-xs font-mono">{eliteRestaurantSlides.length} screens</span>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <span className="text-[#8B1A1A] font-mono text-xs mb-2 tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">Web Design · Food & Beverage</span>
        <h4 className="text-2xl font-serif font-bold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">Elite Restaurant</h4>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-175 max-w-xs">
          Premium burger restaurant with full menu, ordering system, gallery &amp; contact.
        </p>
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200 flex items-center gap-2">
          <span className="text-sm font-medium uppercase tracking-widest border-b border-[#8B1A1A] pb-1 text-white">
            Open Gallery
          </span>
          <svg className="w-4 h-4 text-[#8B1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#8B1A1A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
    </motion.div>
  );
}

/* ─── Lightbox ────────────────────────────────────────────────── */

function EliteRestaurantLightbox({
  slides,
  initialIndex,
  onClose,
}: {
  slides: { src: string; label: string }[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(initialIndex);
  const [direction, setDirection] = useState(0);

  const go = useCallback((delta: number) => {
    setDirection(delta);
    setCurrent(prev => (prev + delta + slides.length) % slides.length);
  }, [slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [go, onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
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
      {/* Modal box — stop propagation so clicks inside don't close */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative w-full max-w-4xl bg-[#111] rounded-xl overflow-hidden shadow-2xl border border-white/10"
        onClick={e => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#0d0d0d]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8B1A1A]"></span>
            <span className="text-white font-serif font-semibold">Elite Restaurant</span>
            <span className="text-gray-500 font-mono text-xs">— {slides[current].label}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-400 font-mono text-xs">{current + 1} / {slides.length}</span>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors text-xl leading-none"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Image area */}
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

          {/* Left arrow */}
          <button
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-[#8B1A1A] border border-white/20 hover:border-[#8B1A1A] flex items-center justify-center transition-all duration-200 group/btn"
            aria-label="Previous"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right arrow */}
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

        {/* Thumbnail strip */}
        <div className="flex gap-2 px-4 py-3 overflow-x-auto scrollbar-hide bg-[#0d0d0d] border-t border-white/10">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`flex-shrink-0 w-16 h-10 rounded overflow-hidden border-2 transition-all duration-200 ${
                i === current ? 'border-[#8B1A1A] scale-105' : 'border-transparent opacity-50 hover:opacity-80'
              }`}
              aria-label={slide.label}
            >
              <img src={slide.src} alt={slide.label} className="w-full h-full object-cover object-top" />
            </button>
          ))}
        </div>

        {/* Dot indicators */}
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

/* ─── Generic Concept Card (placeholder) ─────────────────────── */

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
          <button className="text-sm font-medium uppercase tracking-widest border-b border-[#8B1A1A] pb-1 hover:text-[#8B1A1A] transition-colors">
            Coming Soon
          </button>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#8B1A1A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
    </motion.div>
  );
}

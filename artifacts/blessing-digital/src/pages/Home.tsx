import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen text-white relative">
      <CustomCursor />
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <Marquee />
      <Portfolio />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

import React, { useEffect, useRef } from 'react';
import { MonitorSmartphone, Smartphone, CalendarDays, Share2, MapPin, Wrench } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: MonitorSmartphone,
    title: "Website Design & Development",
    desc: "Custom websites built from scratch, designed to convert and impress. Every element crafted with purpose and precision.",
    colSpan: "lg:col-span-8",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    desc: "Flawless experiences across every screen size. Your site performs beautifully whether on desktop, tablet, or phone.",
    colSpan: "lg:col-span-4",
  },
  {
    icon: CalendarDays,
    title: "Booking System Integration",
    desc: "Seamless appointment booking built directly into your website. Let customers book 24/7 without friction.",
    colSpan: "lg:col-span-4",
  },
  {
    icon: Share2,
    title: "Social Media Integration",
    desc: "Connect your social presence directly to your website. Instagram feeds, social sharing, and profile links all beautifully woven in.",
    colSpan: "lg:col-span-4",
  },
  {
    icon: MapPin,
    title: "Google Maps Integration",
    desc: "Make it effortless for customers to find you. Interactive maps with directions embedded directly into your site.",
    colSpan: "lg:col-span-4",
  },
  {
    icon: Wrench,
    title: "Website Maintenance & Updates",
    desc: "Your site stays fresh, fast, and secure. Regular updates, content changes, and performance monitoring included.",
    colSpan: "lg:col-span-12",
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(card,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-[#0d0d0d] relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="mb-24 ml-[5%]">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-4">
            What We Build
          </h2>
          <div className="w-24 h-1 bg-[#8B1A1A]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {services.map((s, i) => (
            <div 
              key={i}
              ref={el => cardsRef.current[i] = el}
              className={`${s.colSpan} group relative bg-[#111] p-8 md:p-10 rounded-sm border-t-2 border-transparent hover:border-[#8B1A1A] transition-all duration-300 hover:-translate-y-2`}
              data-testid={`service-card-${i}`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#8B1A1A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-sm"></div>
              
              <s.icon className="w-10 h-10 text-[#8B1A1A] mb-8 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold uppercase tracking-wide text-white mb-4">{s.title}</h3>
              <p className="text-gray-400 font-sans leading-relaxed text-sm md:text-base">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

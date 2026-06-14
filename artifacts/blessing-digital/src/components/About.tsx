import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(textRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1, x: 0, duration: 1,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 75%",
          }
        }
      );
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          <div className="w-full lg:w-5/12 pt-8 ml-[2%]">
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white leading-[0.9]">
              Built for the
            </h2>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-[#8B1A1A] leading-[0.9] mt-2">
              Future of Business
            </h2>
          </div>

          <div className="hidden lg:block w-[1px] bg-gradient-to-b from-[#8B1A1A] via-[#8B1A1A]/20 to-transparent min-h-[300px]"></div>

          <div ref={textRef} className="w-full lg:w-6/12 font-sans text-gray-300 text-lg leading-relaxed space-y-6">
            <p>
              Blessing Digital exists to give growing businesses the digital presence they deserve — not just a website, but an experience that commands attention and drives results.
            </p>
            <p>
              We believe every business, no matter its size, deserves world-class web design. In a world where your website is your first impression, mediocrity is not an option.
            </p>
            <p>
              Our approach is simple: understand your vision, translate it into a digital experience that stands apart, and build it to the highest standard. No templates. No shortcuts. Only crafted, intentional design.
            </p>
            <p className="text-white font-medium">
              The future belongs to businesses that show up online with confidence. We're here to make sure that's you.
            </p>
          </div>

        </div>

        <div className="mt-32 pt-16 border-t border-white/5 flex flex-wrap justify-center md:justify-between items-center gap-8 px-4">
          <Stat text="10+ Projects Delivered" />
          <Separator />
          <Stat text="100% Client Satisfaction" />
          <Separator />
          <Stat text="Mobile-First Always" />
          <Separator />
          <Stat text="Built to Convert" />
        </div>

      </div>
    </section>
  );
}

function Stat({ text }: { text: string }) {
  return <span className="font-mono text-sm md:text-base text-gray-400 uppercase tracking-widest">{text}</span>;
}

function Separator() {
  return <span className="hidden md:inline-block w-2 h-2 rounded-full bg-[#8B1A1A]"></span>;
}

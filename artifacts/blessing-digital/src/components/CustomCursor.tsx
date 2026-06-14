import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable custom cursor on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0,
      });

      gsap.to(followerRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.15,
      });
    };

    const onMouseDown = () => {
      gsap.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
      gsap.to(followerRef.current, { scale: 1.5, opacity: 0.2, duration: 0.2 });
    };

    const onMouseUp = () => {
      gsap.to(cursorRef.current, { scale: 1, duration: 0.1 });
      gsap.to(followerRef.current, { scale: 1, opacity: 0.5, duration: 0.2 });
    };

    const addHoverEffect = () => {
      const interactables = document.querySelectorAll('a, button, input, textarea, select');
      interactables.forEach(el => {
        el.addEventListener('mouseenter', () => {
          gsap.to(followerRef.current, { scale: 2, borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)', duration: 0.3 });
          gsap.to(cursorRef.current, { opacity: 0, duration: 0.1 });
        });
        el.addEventListener('mouseleave', () => {
          gsap.to(followerRef.current, { scale: 1, borderColor: '#8B1A1A', backgroundColor: 'transparent', duration: 0.3 });
          gsap.to(cursorRef.current, { opacity: 1, duration: 0.1 });
        });
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    
    // Slight delay to allow DOM to render
    setTimeout(addHoverEffect, 500);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-[#8B1A1A] rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-[#8B1A1A] rounded-full pointer-events-none z-[99] transform -translate-x-1/2 -translate-y-1/2 hidden md:block opacity-50"
      />
    </>
  );
}

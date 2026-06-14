import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-40 z-10 border-t border-[#8B1A1A]/20">
      <div className="absolute inset-0 bg-[#0a0f2e]/40 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-white mb-4">
          Ready to Build Something
        </h2>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-white mb-12">
          <span className="text-transparent" style={{ WebkitTextStroke: '1px #8B1A1A' }}>Extraordinary?</span>
        </h2>
        
        <p className="text-xl text-gray-400 font-mono mb-16 max-w-2xl mx-auto">
          Let's create a digital experience that sets your business apart.
        </p>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-[#8B1A1A]"></div>
          
          <a 
            href="mailto:officialblessingdigital@gmail.com"
            className="block text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white hover:text-[#8B1A1A] transition-colors duration-300 mb-12 break-all"
            data-testid="contact-email-link"
          >
            officialblessingdigital@gmail.com
          </a>

          <a 
            href="mailto:officialblessingdigital@gmail.com"
            className="inline-block bg-[#8B1A1A] hover:bg-[#a01c1c] text-white px-10 py-5 rounded-sm text-sm font-medium uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 shadow-[0_0_20px_rgba(139,26,26,0.3)] hover:shadow-[0_0_30px_rgba(139,26,26,0.5)]"
            data-testid="contact-email-btn"
          >
            Send Us an Email
          </a>
        </div>

      </div>
    </section>
  );
}

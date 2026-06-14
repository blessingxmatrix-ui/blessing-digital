import React from 'react';

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050505] border-t-2 border-[#8B1A1A] py-12 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 absolute top-0 left-0">
                <defs>
                  <linearGradient id="crownGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d4af37" />
                    <stop offset="100%" stopColor="#8B1A1A" />
                  </linearGradient>
                </defs>
                <path d="M2 10L6 4L12 8L18 4L22 10L19 18H5L2 10Z" fill="url(#crownGradFooter)" opacity="0.8" />
              </svg>
              <span className="font-serif font-bold text-lg relative z-10 text-white leading-none tracking-tighter" style={{ marginTop: '2px' }}>B</span>
            </div>
          </div>

          <div className="flex gap-6">
            {['work', 'services', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-xs font-mono text-gray-500 hover:text-[#8B1A1A] uppercase tracking-widest transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs text-gray-600 font-mono mb-2">Modern Websites for Growing Businesses</p>
            <p className="text-xs text-gray-600 font-mono">© {new Date().getFullYear()} Blessing Digital. All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}

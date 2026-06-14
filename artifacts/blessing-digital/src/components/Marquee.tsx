import React from 'react';

export default function Marquee() {
  const items = [
    "WEB DESIGN",
    "MOBILE OPTIMIZATION",
    "BOOKING SYSTEMS",
    "SOCIAL INTEGRATION",
    "BRAND IDENTITY",
    "DIGITAL PRESENCE"
  ];

  return (
    <div className="w-full overflow-hidden bg-[#0d0d0d] border-y border-[#8B1A1A]/30 py-4 relative z-10">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, j) => (
              <React.Fragment key={`${i}-${j}`}>
                <span className="text-sm md:text-base font-mono text-gray-400 tracking-widest px-8">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B1A1A]"></span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: 200%;
        }
      `}</style>
    </div>
  );
}

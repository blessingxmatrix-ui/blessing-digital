import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GMAIL_LINK = 'mailto:blessingdigital@gmail.com?subject=Website%20Enquiry&body=Hi%20Blessing%20Digital%2C%0A%0AI%27d%20like%20to%20discuss%20a%20website%20project.';

export default function FloatingContact() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {/* Full button */}
      <AnimatePresence>
        {visible && (
          <motion.div
            key="float-btn"
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 120, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="fixed bottom-8 right-0 z-[8000] flex items-center"
          >
            {/* Close tab */}
            <button
              onClick={() => setVisible(false)}
              className="w-6 h-10 flex items-center justify-center bg-[#1a1a1a] border border-white/10 border-r-0 rounded-l-md text-gray-500 hover:text-white hover:bg-[#8B1A1A] transition-all duration-200 flex-shrink-0"
              aria-label="Hide contact button"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Gmail button */}
            <a
              href={GMAIL_LINK}
              className="flex items-center gap-2.5 bg-[#111] border border-white/10 border-l-0 rounded-r-md px-4 py-2.5 group hover:bg-[#8B1A1A] hover:border-[#8B1A1A] transition-all duration-300"
              aria-label="Send us an email"
            >
              {/* Gmail icon */}
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M2 6.5C2 5.67 2.67 5 3.5 5h17c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-17C2.67 19 2 18.33 2 17.5v-11z" stroke="currentColor" strokeWidth="1.5" className="text-gray-400 group-hover:text-white transition-colors"/>
                <path d="M2 7l10 6.5L22 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-[#8B1A1A] group-hover:text-white/80 transition-colors"/>
              </svg>
              <span className="text-xs font-mono tracking-widest uppercase text-gray-300 group-hover:text-white transition-colors whitespace-nowrap">
                Get in Touch
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pull-back tab when hidden */}
      <AnimatePresence>
        {!visible && (
          <motion.button
            key="pull-tab"
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 60, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            onClick={() => setVisible(true)}
            className="fixed bottom-8 right-0 z-[8000] w-7 h-14 flex flex-col items-center justify-center gap-1 bg-[#8B1A1A] rounded-l-md shadow-lg hover:w-9 transition-all duration-200"
            aria-label="Show contact button"
          >
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            <svg className="w-3 h-3 text-white/80" viewBox="0 0 24 24" fill="none">
              <path d="M2 7l10 6.5L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

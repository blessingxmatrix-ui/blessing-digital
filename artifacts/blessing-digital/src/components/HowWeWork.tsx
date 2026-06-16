import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: "Let's Talk",
    description:
      "We start with a conversation about your business, goals, and what you want your website to achieve. This helps us understand exactly what you need and allows us to provide a project quote based on your requirements.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    badge: 'Discovery',
  },
  {
    number: '02',
    title: 'Design & Build',
    description:
      'Once the project scope is agreed upon, a 50% deposit is required before work begins. We then design and develop your website while keeping your goals, branding, and customer experience in mind.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    badge: 'Development',
  },
  {
    number: '03',
    title: 'Launch & Deliver',
    description:
      'After the website is completed and approved, the remaining balance is paid. The website is then launched and delivered, ready to help your business build credibility and attract customers online.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    badge: 'Launch',
  },
];

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="process" ref={sectionRef} className="py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mb-20"
        >
          <p className="text-[#8B1A1A] font-mono text-xs tracking-[0.3em] uppercase mb-4">Our Process</p>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight inline-block relative mb-6">
            How We Work
            <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-[#8B1A1A]"></span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mt-6 leading-relaxed">
            A simple and transparent process designed to turn your ideas into a professional website.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-[3.75rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B1A1A]/40 to-transparent z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-8 text-center"
        >
          {[
            { value: '100%', label: 'Transparent Pricing' },
            { value: '50%', label: 'Deposit to Start' },
            { value: '0', label: 'Hidden Fees' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-4">
              <div>
                <p className="text-3xl font-bold font-serif text-white">{item.value}</p>
                <p className="text-gray-400 text-sm font-mono tracking-widest uppercase mt-1">{item.label}</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10 last:hidden" />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: 'easeOut', delay: index * 0.18 }}
      className="group relative"
    >
      {/* Card */}
      <div className="relative h-full rounded-xl border border-white/8 bg-white/[0.03] backdrop-blur-sm p-8 overflow-hidden
        transition-all duration-500 hover:border-[#8B1A1A]/50 hover:bg-white/[0.06] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(139,26,26,0.15)]">

        {/* Glow on hover */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(139,26,26,0.12) 0%, transparent 70%)' }} />

        {/* Step number watermark */}
        <span className="absolute top-4 right-6 text-7xl font-bold font-serif text-white/[0.04] group-hover:text-white/[0.07] transition-colors duration-500 select-none leading-none">
          {step.number}
        </span>

        {/* Icon ring */}
        <div className="relative w-14 h-14 rounded-full border border-[#8B1A1A]/40 bg-[#8B1A1A]/10 flex items-center justify-center mb-7
          group-hover:border-[#8B1A1A]/80 group-hover:bg-[#8B1A1A]/20 transition-all duration-500">
          <div className="text-[#8B1A1A]">{step.icon}</div>
          {/* Pulse ring on hover */}
          <div className="absolute inset-0 rounded-full border border-[#8B1A1A]/0 group-hover:border-[#8B1A1A]/30 scale-100 group-hover:scale-150 opacity-100 group-hover:opacity-0 transition-all duration-700" />
        </div>

        {/* Badge */}
        <span className="inline-block bg-[#8B1A1A] text-white px-3 py-1 rounded-sm text-[11px] font-mono tracking-[0.2em] uppercase mb-4 shadow-[0_0_12px_rgba(139,26,26,0.4)]">
          {step.badge}
        </span>

        {/* Step label */}
        <p className="text-gray-400 font-mono text-xs tracking-widest uppercase mb-2">Step {step.number}</p>

        {/* Title */}
        <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-[#f0ece4] transition-colors duration-300">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed text-[0.95rem] group-hover:text-gray-300 transition-colors duration-300">
          {step.description}
        </p>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#8B1A1A] to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out rounded-b-xl" />
      </div>

      {/* Connector arrow (between cards, desktop only) */}
      {index < 2 && (
        <div className="hidden lg:flex absolute top-[3.4rem] -right-7 z-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -6 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.18 + 0.5 }}
            className="flex items-center gap-1 text-[#8B1A1A]/60"
          >
            <div className="w-8 h-px bg-[#8B1A1A]/50" />
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

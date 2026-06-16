import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EMAIL = 'officialblessingdigital@gmail.com';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New website enquiry from ${form.name}`,
          _captcha: 'false',
          _template: 'table',
        }),
      });
      const data = await res.json();
      if (data.success === 'true' || data.success === true) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-40 z-10 border-t border-[#8B1A1A]/20">
      <div className="absolute inset-0 bg-[#0a0f2e]/40 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-white mb-4">
            Ready to Build Something
          </h2>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-white mb-12">
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #8B1A1A' }}>Extraordinary?</span>
          </h2>
          <p className="text-xl text-gray-400 font-mono mb-4 max-w-2xl mx-auto">
            Let's create a digital experience that sets your business apart.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="text-[#8B1A1A] hover:text-white font-mono text-sm tracking-widest transition-colors duration-300"
            data-testid="contact-email-link"
          >
            {EMAIL}
          </a>
        </div>

        {/* Two-column layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — contact options */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#8B1A1A] font-mono text-xs tracking-[0.3em] uppercase mb-4">Get in touch</p>
            <h3 className="text-3xl font-serif font-bold text-white mb-6">Let's start a conversation</h3>
            <p className="text-gray-400 leading-relaxed mb-10">
              Fill in the form and we'll get back to you within 24 hours. Alternatively, reach out directly via email or WhatsApp.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <a
                href={`mailto:${EMAIL}?subject=Website%20Enquiry`}
                className="flex items-center gap-4 group"
                data-testid="contact-email-btn"
              >
                <div className="w-12 h-12 rounded-full border border-[#8B1A1A]/40 bg-[#8B1A1A]/10 flex items-center justify-center group-hover:bg-[#8B1A1A] group-hover:border-[#8B1A1A] transition-all duration-300 flex-shrink-0">
                  <svg className="w-5 h-5 text-[#8B1A1A] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium group-hover:text-[#8B1A1A] transition-colors">Email us directly</p>
                  <p className="text-gray-500 text-sm font-mono">{EMAIL}</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/?text=Hi%20Blessing%20Digital%2C%20I%27d%20like%20to%20discuss%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full border border-[#8B1A1A]/40 bg-[#8B1A1A]/10 flex items-center justify-center group-hover:bg-[#8B1A1A] group-hover:border-[#8B1A1A] transition-all duration-300 flex-shrink-0">
                  <svg className="w-5 h-5 text-[#8B1A1A] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium group-hover:text-[#8B1A1A] transition-colors">Message on WhatsApp</p>
                  <p className="text-gray-500 text-sm font-mono">Quick response guaranteed</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-xl border border-[#8B1A1A]/40 bg-[#8B1A1A]/10 p-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#8B1A1A] flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-white mb-3">Message Sent!</h4>
                  <p className="text-gray-400 mb-6">We'll be in touch within 24 hours.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-sm font-mono text-[#8B1A1A] border-b border-[#8B1A1A] pb-0.5 hover:text-white hover:border-white transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="rounded-xl border border-white/8 bg-white/[0.03] backdrop-blur-sm p-8 space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-400 font-mono text-xs tracking-widest uppercase mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full bg-white/[0.05] border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#8B1A1A]/60 focus:bg-white/[0.08] transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 font-mono text-xs tracking-widest uppercase mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-white/[0.05] border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#8B1A1A]/60 focus:bg-white/[0.08] transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 font-mono text-xs tracking-widest uppercase mb-2">Message</label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project, your business, and what you're looking to achieve..."
                      className="w-full bg-white/[0.05] border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#8B1A1A]/60 focus:bg-white/[0.08] transition-all duration-200 resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 font-mono text-xs">Something went wrong — please try emailing us directly.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-[#8B1A1A] hover:bg-[#a01c1c] disabled:bg-[#8B1A1A]/50 text-white py-4 rounded-sm text-sm font-medium uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(139,26,26,0.3)] hover:shadow-[0_0_30px_rgba(139,26,26,0.5)] flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Sending…
                      </>
                    ) : (
                      'Send Message →'
                    )}
                  </button>

                  <p className="text-gray-600 font-mono text-[10px] text-center tracking-widest uppercase">
                    Sent directly to our inbox · We respond within 24 hours
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

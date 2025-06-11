import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'What makes Novaloid different from other studios?',
    a: 'We combine cutting-edge animation, elite UI/UX, and a passion for futuristic design. Every project is a showcase of our obsession with detail and innovation.'
  },
  {
    q: 'Do you work with startups or only big brands?',
    a: 'We love working with both! Whether you’re a bold startup or an established brand, we tailor our process to fit your vision and scale.'
  },
  {
    q: 'How long does a typical project take?',
    a: 'Most projects take 2–6 weeks, depending on complexity. We move fast, but never at the expense of quality or creativity.'
  },
  {
    q: 'Can you handle both web and mobile app design?',
    a: 'Absolutely. Our team is skilled in both web and mobile, ensuring a seamless, animated experience across all platforms.'
  },
  {
    q: 'What is your process like?',
    a: 'We start with discovery and strategy, move to design and animation, then develop and launch. You’re involved at every step.'
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="py-24 bg-black z-10 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-neon-green via-electric-blue to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.q}
              className="bg-white/5 border border-white/10 rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left text-lg font-semibold text-neon-green focus:outline-none focus:ring-2 focus:ring-electric-blue transition-colors duration-200"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                <span>{faq.q}</span>
                <motion.span
                  animate={{ rotate: open === idx ? 45 : 0 }}
                  className="ml-4 text-electric-blue text-2xl font-bold"
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === idx && (
                  <motion.div
                    id={`faq-panel-${idx}`}
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-5 text-white/80 text-base"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

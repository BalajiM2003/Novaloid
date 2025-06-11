import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Mobile App Development',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-neon-green">
        <rect x="5" y="2" width="14" height="20" rx="4" strokeWidth="2" />
        <circle cx="12" cy="18" r="1" />
      </svg>
    ),
    desc: 'Stunning, high-performance apps for iOS & Android.'
  },
  {
    title: 'Website Design',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-electric-blue">
        <rect x="3" y="5" width="18" height="14" rx="3" strokeWidth="2" />
        <path d="M3 9h18" strokeWidth="2" />
      </svg>
    ),
    desc: 'Modern, animated, and responsive web experiences.'
  },
  {
    title: 'UI/UX Consulting',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-neon-green">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path d="M8 12h8" strokeWidth="2" />
        <path d="M12 8v8" strokeWidth="2" />
      </svg>
    ),
    desc: 'Expert guidance for elite digital products.'
  },
  {
    title: 'Brand Identity',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-electric-blue">
        <rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" strokeWidth="2" />
      </svg>
    ),
    desc: 'Distinctive, memorable, and modern branding.'
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.8 } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 bg-black z-10">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-neon-green via-electric-blue to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="group bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center shadow-xl hover:shadow-neon-green/30 hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden"
              initial="offscreen"
              whileInView="onscreen"
              variants={cardVariants}
              viewport={{ once: false }}
              whileHover={{ y: -8, boxShadow: '0 8px 32px #39FF14' }}
            >
              <div className="mb-4 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-neon-green group-hover:text-electric-blue transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/70 text-base mb-2">{service.desc}</p>
              {/* Animated accent line */}
              <motion.div
                className="h-1 w-8 rounded-full bg-gradient-to-r from-neon-green to-electric-blue mt-4"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1.2 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

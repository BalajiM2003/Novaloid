import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Delivered', value: 48, color: 'from-neon-green to-electric-blue' },
  { label: 'Avg. Client Rating', value: '4.9/5', color: 'from-electric-blue to-neon-green' },
  { label: 'Years Experience', value: 7, color: 'from-neon-green to-white' },
  { label: 'Design Awards', value: 5, color: 'from-electric-blue to-white' },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: idx => ({ opacity: 1, y: 0, transition: { delay: idx * 0.15, type: 'spring', bounce: 0.3, duration: 0.8 } }),
};

const WhyChooseUsSection = () => {
  return (
    <section id="whyus" className="relative py-24 bg-black z-10 overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-neon-green opacity-10 blur-3xl z-0"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-electric-blue opacity-10 blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1], rotate: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative max-w-6xl mx-auto px-4 z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-neon-green via-electric-blue to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          Why Choose Novaloid?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className={`rounded-3xl p-8 flex flex-col items-center text-center shadow-xl bg-gradient-to-br ${stat.color} opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer border border-white/10`}
              initial="offscreen"
              whileInView="onscreen"
              custom={idx}
              variants={cardVariants}
              viewport={{ once: false }}
            >
              <motion.div
                className="text-5xl md:text-6xl font-extrabold mb-2 text-dark-bg drop-shadow-lg"
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: idx * 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-lg font-semibold text-white/90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mx-auto max-w-3xl text-center text-xl md:text-2xl text-white/80 font-medium"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <span className="text-neon-green font-bold">Novaloid</span> is where futuristic design meets flawless code. We obsess over every pixel, every animation, and every user journey—so your brand stands out, every time.
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

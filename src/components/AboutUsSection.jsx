import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#39FF14"><path d="M12 2v20M2 12h20" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: 'Innovation',
    desc: 'We push boundaries with futuristic design and technology.'
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#00BFFF"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path d="M8 12l2 2 4-4" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: 'Quality',
    desc: 'Every pixel, every animation, every line of code is crafted to perfection.'
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#39FF14"><rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="2"/><path d="M8 12h8" strokeWidth="2"/></svg>
    ),
    title: 'Partnership',
    desc: 'We collaborate closely with clients to bring visions to life.'
  },
];

const AboutUsSection = () => {
  return (
    <section id="about" className="relative py-24 bg-black z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-neon-green via-electric-blue to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          About Novaloid
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl text-center text-white/80 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          Novaloid is a next-generation frontend studio specializing in animated, visually elite mobile apps and websites. Our mission is to empower ambitious brands with digital experiences that are as bold and unique as they are.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {values.map((val, idx) => (
            <motion.div
              key={val.title}
              className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-neon-green/30 hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              viewport={{ once: false }}
            >
              <div className="mb-4">{val.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-neon-green">{val.title}</h3>
              <p className="text-white/70 text-base">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

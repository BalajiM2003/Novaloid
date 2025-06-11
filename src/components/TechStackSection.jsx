import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  {
    name: 'React',
    color: 'text-electric-blue',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="20" cy="20" rx="18" ry="7" stroke="#00BFFF" strokeWidth="2"/><ellipse cx="20" cy="20" rx="7" ry="18" stroke="#00BFFF" strokeWidth="2"/><ellipse cx="20" cy="20" rx="13" ry="5" transform="rotate(60 20 20)" stroke="#00BFFF" strokeWidth="2"/><ellipse cx="20" cy="20" rx="13" ry="5" transform="rotate(-60 20 20)" stroke="#00BFFF" strokeWidth="2"/><circle cx="20" cy="20" r="3" fill="#00BFFF"/></svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    color: 'text-neon-green',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 25c0-5 5-10 10-10s10 5 10 10-5 5-10 5-10 0-10-5z" fill="#39FF14"/><path d="M10 15c0-5 5-10 10-10s10 5 10 10-5 5-10 5-10 0-10-5z" fill="#39FF14" opacity=".5"/></svg>
    ),
  },
  {
    name: 'Figma',
    color: 'text-electric-blue',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="10" r="6" fill="#00BFFF"/><circle cx="20" cy="20" r="6" fill="#39FF14"/><circle cx="20" cy="30" r="6" fill="#fff"/><circle cx="30" cy="20" r="6" fill="#00BFFF"/><circle cx="10" cy="20" r="6" fill="#39FF14"/></svg>
    ),
  },
  {
    name: 'Framer Motion',
    color: 'text-neon-green',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="24" height="24" rx="6" fill="#39FF14"/><path d="M16 16h8v8h-8z" fill="#0f0f0f"/></svg>
    ),
  },
  {
    name: 'Poppins',
    color: 'text-electric-blue',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="16" stroke="#00BFFF" strokeWidth="3"/><text x="50%" y="55%" textAnchor="middle" fill="#00BFFF" fontSize="18" fontFamily="Poppins" dy=".3em">P</text></svg>
    ),
  },
  {
    name: 'Sora',
    color: 'text-neon-green',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="16" stroke="#39FF14" strokeWidth="3"/><text x="50%" y="55%" textAnchor="middle" fill="#39FF14" fontSize="18" fontFamily="Sora" dy=".3em">S</text></svg>
    ),
  },
];

const iconVariants = {
  initial: { scale: 0, opacity: 0, y: 40 },
  animate: idx => ({ scale: 1, opacity: 1, y: 0, transition: { delay: idx * 0.12, type: 'spring', stiffness: 200 } }),
  hover: { scale: 1.15, filter: 'drop-shadow(0 0 12px #39FF14)' },
};

const TechStackSection = () => {
  return (
    <section id="tech" className="relative py-24 bg-black z-10">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-neon-green via-electric-blue to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          Tech Stack
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {techs.map((tech, idx) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center group cursor-pointer"
              custom={idx}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              variants={iconVariants}
              viewport={{ once: false }}
            >
              <div className="mb-3">
                {tech.icon}
              </div>
              <span className={`text-sm font-semibold ${tech.color} opacity-80 group-hover:opacity-100 transition-opacity duration-200`}>{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

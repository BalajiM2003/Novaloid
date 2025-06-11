import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Neon Dashboard',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    tags: ['Web', 'UI', 'Animation'],
  },
  {
    title: 'Electric App',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    tags: ['Mobile', 'UX', 'Branding'],
  },
  {
    title: 'Futuristic Landing',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    tags: ['Web', 'Landing', 'Motion'],
  },
  {
    title: 'Glassy Portfolio',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    tags: ['UI', 'Portfolio', 'Glassmorphism'],
  },
  {
    title: 'Animated Shop',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
    tags: ['Ecommerce', 'Web', 'Animation'],
  },
  {
    title: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    tags: ['Branding', 'Logo', 'Design'],
  },
];

const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));

const PortfolioSection = () => {
  const [activeTag, setActiveTag] = useState('All');

  const filtered = activeTag === 'All' ? projects : projects.filter(p => p.tags.includes(activeTag));

  return (
    <section id="portfolio" className="relative py-24 bg-black z-10">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-neon-green via-electric-blue to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          Our Projects
        </motion.h2>
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <button
            className={`px-4 py-2 rounded-full font-semibold border-2 border-neon-green text-neon-green bg-transparent hover:bg-neon-green hover:text-dark-bg transition-colors duration-200 ${activeTag === 'All' ? 'bg-neon-green text-dark-bg' : ''}`}
            onClick={() => setActiveTag('All')}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-full font-semibold border-2 border-electric-blue text-electric-blue bg-transparent hover:bg-electric-blue hover:text-dark-bg transition-colors duration-200 ${activeTag === tag ? 'bg-electric-blue text-dark-bg' : ''}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.title}
              className="relative rounded-3xl overflow-hidden shadow-xl group bg-white/5 border border-white/10 hover:scale-[1.03] hover:shadow-neon-green/30 transition-all duration-300"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: false }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-neon-green mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-electric-blue/20 text-electric-blue">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

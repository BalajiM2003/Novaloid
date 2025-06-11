import React from 'react';
import { motion } from 'framer-motion';

const OurStorySection = () => (
  <section id="our-story" className="py-24 bg-black z-10 overflow-hidden">
    <div className="max-w-4xl mx-auto px-4">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-neon-green via-electric-blue to-white bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        Our Story: The Novaloid Journey
      </motion.h2>
      <motion.div
        className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <p className="text-xl md:text-2xl text-white/80 mb-4">
          Novaloid was born from a passion for pushing the boundaries of digital design. Our founders, once freelancers obsessed with animation and UI, joined forces to create a studio where creativity and technology meet.
        </p>
        <p className="text-lg text-white/70 mb-2">
          From late-night hackathons to award-winning launches, our journey has always been about more than code. It’s about crafting experiences that inspire, delight, and elevate brands to new heights.
        </p>
        <p className="text-lg text-white/70">
          Today, Novaloid is a collective of visionaries, designers, and engineers—united by a single goal: to make the web a more beautiful, animated, and meaningful place.
        </p>
      </motion.div>
    </div>
  </section>
);

export default OurStorySection;

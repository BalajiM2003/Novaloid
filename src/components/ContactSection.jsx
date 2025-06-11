import React from 'react';
import { motion } from 'framer-motion';

const inputVariants = {
  focus: { boxShadow: '0 0 0 2px #39FF14, 0 0 16px #00BFFF' },
  rest: { boxShadow: '0 0 0 0px #39FF14' },
};

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 bg-black z-10 overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric-blue opacity-10 blur-3xl rounded-full z-0"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative max-w-xl mx-auto px-4 z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-neon-green via-electric-blue to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          Let’s Create Something Elite
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 mb-8 justify-center items-center">
          <motion.div
            className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl min-w-[220px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: false }}
          >
            <span className="mb-2">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#39FF14"><path d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2v-4.5l-7 3.5-7-3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <div className="text-white/80 font-semibold">hello@novaloid.com</div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl min-w-[220px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <span className="mb-2">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#00BFFF"><path d="M17 10.5V6a2 2 0 00-2-2H9a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2v-4.5l-5 2.5-5-2.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <div className="text-white/80 font-semibold">+1 (555) 123-4567</div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl min-w-[220px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <span className="mb-2">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#39FF14"><path d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243A8 8 0 1116.657 7.343z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <div className="text-white/80 font-semibold">123 Neon Ave, Futurist City</div>
          </motion.div>
        </div>
        <motion.form
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false }}
          onSubmit={e => e.preventDefault()}
        >
          <motion.input
            type="text"
            placeholder="Your Name"
            className="w-full px-5 py-4 rounded-xl bg-black/80 text-white placeholder-white/60 border border-white/10 focus:outline-none text-lg font-medium transition-all duration-300"
            variants={inputVariants}
            whileFocus="focus"
            initial="rest"
            animate="rest"
            required
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            className="w-full px-5 py-4 rounded-xl bg-black/80 text-white placeholder-white/60 border border-white/10 focus:outline-none text-lg font-medium transition-all duration-300"
            variants={inputVariants}
            whileFocus="focus"
            initial="rest"
            animate="rest"
            required
          />
          <motion.textarea
            placeholder="Tell us about your project..."
            rows={4}
            className="w-full px-5 py-4 rounded-xl bg-black/80 text-white placeholder-white/60 border border-white/10 focus:outline-none text-lg font-medium transition-all duration-300 resize-none"
            variants={inputVariants}
            whileFocus="focus"
            initial="rest"
            animate="rest"
            required
          />
          <motion.button
            type="submit"
            className="mt-2 px-8 py-4 rounded-full font-bold text-lg bg-neon-green text-dark-bg shadow-lg hover:bg-electric-blue hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 0 16px #00BFFF' }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;

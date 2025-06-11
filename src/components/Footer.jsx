import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const socials = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M22 4.01c-.77.35-1.6.59-2.47.7A4.13 4.13 0 0021.4 2.3a8.19 8.19 0 01-2.6 1A4.11 4.11 0 0012 7.03c0 .32.04.64.1.94C8.28 7.8 5.1 6.13 2.98 3.7c-.36.62-.56 1.34-.56 2.1 0 1.45.74 2.73 1.87 3.48-.69-.02-1.34-.21-1.9-.53v.05c0 2.03 1.45 3.72 3.37 4.1-.35.1-.72.16-1.1.16-.27 0-.53-.03-.78-.07.53 1.66 2.07 2.87 3.89 2.9A8.25 8.25 0 012 19.54c-.65 0-1.28-.04-1.9-.11A11.67 11.67 0 006.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0022 4.01z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com/',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path d="M2 14s3-2 10-2 10 2 10 2" strokeWidth="2"/><path d="M12 2c2.5 3.5 4 7.5 4 10 0 2.5-1.5 6.5-4 10" strokeWidth="2"/></svg>
    ),
  },
  {
    name: 'GitHub',
    url: 'https://github.com/',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.7.12 2.5.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
];

const Footer = () => {
  // Scroll to top handler
  const controls = useAnimation();
  const handleScrollTop = () => {
    controls.start({ y: [0, -20, 0] });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-bg border-t border-white/10 py-10 z-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <motion.span
            className="text-2xl font-extrabold bg-gradient-to-r from-neon-green via-electric-blue to-white bg-clip-text text-transparent select-none"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            Novaloid
          </motion.span>
        </div>
        <div className="flex gap-5">
          {socials.map(social => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-neon-green transition-colors duration-200"
              whileHover={{ scale: 1.2, color: '#39FF14', filter: 'drop-shadow(0 0 8px #39FF14)' }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        <motion.button
          className="fixed bottom-8 right-8 z-50 bg-neon-green text-dark-bg p-3 rounded-full shadow-lg hover:bg-electric-blue hover:text-white transition-colors duration-300"
          onClick={handleScrollTop}
          animate={controls}
          whileHover={{ scale: 1.15, boxShadow: '0 0 16px #00BFFF' }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 19V5M5 12l7-7 7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </motion.button>
      </div>
      <div className="mt-8 text-center text-white/40 text-sm">
        &copy; {new Date().getFullYear()} Novaloid. Crafted with <span className="text-neon-green">♥</span> for elite brands.
      </div>
    </footer>
  );
};

export default Footer;

 import { motion, useScroll, useTransform } from 'framer-motion';

const heroBgVariants = {
  animate: {
    background: [
      'linear-gradient(120deg, #0f0f0f 0%, #00BFFF 100%)',
      'linear-gradient(120deg, #0f0f0f 0%, #39FF14 100%)',
      'linear-gradient(120deg, #0f0f0f 0%, #00BFFF 100%)',
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, type: 'spring' } },
};

const buttonVariants = {
  rest: { scale: 1, boxShadow: '0 0 0px #39FF14' },
  hover: { scale: 1.08, boxShadow: '0 0 16px #39FF14', transition: { duration: 0.2 } },
};

const HeroSection = () => {
  // Parallax effect for floating shape
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 400], [0, 80]);

  return (
    <motion.section
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4"
      initial="hidden"
      animate="animate"
      variants={heroBgVariants}
      style={{ background: 'linear-gradient(120deg, #0f0f0f 0%, #00BFFF 100%)' }}
    >
      {/* Animated floating shapes */}
      {/* Parallax neon shape */}
      <motion.div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-neon-green opacity-20 blur-3xl z-0"
        style={{ y: parallaxY }}
      />
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 rounded-full bg-neon-green opacity-30 blur-2xl"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-electric-blue opacity-20 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -30, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Main Content */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-center bg-gradient-to-r from-neon-green via-electric-blue to-white bg-clip-text text-transparent drop-shadow-lg"
        variants={textVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: false }}
      >
        Elevate Your Brand<br />with <span className="text-neon-green">Novaloid</span>
      </motion.h1>
      <motion.p
        className="mt-8 text-xl md:text-2xl text-center max-w-2xl text-white/80"
        variants={textVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: false }}
        transition={{ delay: 0.3 }}
      >
        We craft futuristic, animated, and visually elite mobile apps & websites for ambitious businesses.
      </motion.p>
      <div className="mt-12 flex gap-6 flex-wrap justify-center">
        <motion.a
          href="#portfolio"
          className="px-8 py-4 rounded-full font-bold text-lg bg-neon-green text-dark-bg shadow-lg hover:bg-electric-blue hover:text-white transition-colors duration-300 elite-neon-border"
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="hover"
        >
          View Portfolio
        </motion.a>
        <motion.a
          href="#contact"
          className="px-8 py-4 rounded-full font-bold text-lg border-2 border-neon-green text-neon-green bg-transparent hover:bg-neon-green hover:text-dark-bg transition-colors duration-300"
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="hover"
        >
          Contact Us
        </motion.a>
      </div>
    </motion.section>
  );
};

export default HeroSection;

export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export const staggerContainer = {
  animate: { 
    transition: { 
      staggerChildren: 0.1 
    } 
  }
};

export const letterReveal = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};
/// 
// Add these to your existing motion.ts exports:
export const heroTitleReveal = {
  initial: { 
    opacity: 0, 
    y: 80,
    scale: 0.95 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1 
  },
  transition: { 
    duration: 1.2, 
    ease: [0.22, 1, 0.36, 1],
    delay: 0.3 
  }
};

export const heroStagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};
import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const slideInUp: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const hoverGlow = {
  whileHover: {
    boxShadow: "0 0 30px rgba(255, 179, 0, 0.5)",
    y: -5,
    transition: { duration: 0.3 },
  },
};

export const buttonPulse = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

export const cardHover = {
  whileHover: {
    y: -10,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    transition: { duration: 0.3 },
  },
};

export const typewriterText = {
  initial: { width: 0 },
  animate: {
    width: "100%",
    transition: {
      duration: 3,
      ease: "easeInOut",
    },
  },
};

// Storyline Animation Variants
export const storylineReveal: Variants = {
  initial: { 
    opacity: 0, 
    y: 100,
    scale: 0.9
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 1.2, 
      ease: "easeOut",
      staggerChildren: 0.3
    } 
  },
};

export const storylineSlideIn: Variants = {
  initial: { 
    opacity: 0, 
    x: -100 
  },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  },
};

export const storylineSlideInRight: Variants = {
  initial: { 
    opacity: 0, 
    x: 100 
  },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  },
};

export const storylineCountUp: Variants = {
  initial: { 
    opacity: 0, 
    scale: 0.5 
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: "backOut" 
    } 
  },
};

export const storylineParallax = {
  initial: { y: 0 },
  animate: (custom: number) => ({
    y: custom,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  })
};

export const storylineContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    },
  },
};

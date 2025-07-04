import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function StorylineScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'accueil',
        'storyline-problem', 
        'storyline-solution',
        'storyline-transformation',
        'apropos',
        'services',
        'contact'
      ];

      let current = 0;
      sections.forEach((sectionId, index) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = index;
          }
        }
      });
      
      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionColors = [
    '#FFB300', // Hero - Solar Yellow
    '#EF4444', // Problem - Red
    '#FBBF24', // Solution - Yellow
    '#10B981', // Transformation - Green
    '#4CAF50', // About - Green
    '#40C4FF', // Services - Blue
    '#10B981', // Contact - Green
  ];

  return (
    <>
      {/* Main Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500 transform-gpu z-50"
        style={{ scaleX, originX: 0 }}
      />

      {/* Section Dots Indicator */}
      <motion.div 
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
      >
        {sectionColors.map((color, index) => (
          <motion.div
            key={index}
            className="w-3 h-3 rounded-full border-2 border-white/30 cursor-pointer"
            style={{ 
              backgroundColor: currentSection === index ? color : 'transparent'
            }}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: currentSection === index ? 1.2 : 1,
              boxShadow: currentSection === index 
                ? `0 0 15px ${color}` 
                : '0 0 0px transparent'
            }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              const sections = [
                'accueil',
                'storyline-problem',
                'storyline-solution', 
                'storyline-transformation',
                'apropos',
                'services',
                'contact'
              ];
              const element = document.getElementById(sections[index]);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />
        ))}
      </motion.div>

      {/* Storyline Progress Indicator */}
      <motion.div
        className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5 }}
      >
        <div className="glass-effect rounded-full p-4 border border-white/20">
          <div className="w-16 h-16 relative">
            {/* Circular Progress */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 64 64">
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="2"
              />
              <motion.circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                style={{
                  pathLength: scrollYProgress
                }}
                initial={{ pathLength: 0 }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFB300" />
                  <stop offset="50%" stopColor="#4CAF50" />
                  <stop offset="100%" stopColor="#40C4FF" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-green-500"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity 
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
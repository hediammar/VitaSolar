import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Zap, AlertTriangle, DollarSign } from "lucide-react";
import { storylineReveal, storylineSlideIn, storylineCountUp, storylineContainer } from "@/lib/animations";

export default function StorylineProblem() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const problems = [
    {
      icon: <TrendingUp className="w-12 h-12 text-red-400" />,
      title: "Factures qui explosent",
      description: "+25% d'augmentation des tarifs électriques chaque année",
      stat: "450 DT",
      statLabel: "Facture mensuelle moyenne",
    },
    {
      icon: <Zap className="w-12 h-12 text-orange-400" />,
      title: "Dépendance énergétique",
      description: "85% de l'électricité tunisienne vient des énergies fossiles",
      stat: "85%",
      statLabel: "Énergie fossile",
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-yellow-400" />,
      title: "Impact climatique",
      description: "Émissions de CO2 qui ne cessent d'augmenter",
      stat: "2.8T",
      statLabel: "CO2 par foyer/an",
    },
  ];

  return (
    <section 
      id="storyline-problem" 
      className="scroll-snap-section min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
      ref={ref}
    >
      {/* Dark overlay background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-gray-900 to-orange-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={storylineReveal}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-6 text-red-400"
            variants={storylineSlideIn}
          >
            Le Problème
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={storylineSlideIn}
          >
            Chaque mois, votre facture d'électricité augmente. Pendant ce temps, 
            le climat se dégrade et votre dépendance énergétique s'aggrave.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={storylineContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-2xl p-8 text-center border-2 border-red-500/30 hover:border-red-400/50 transition-all duration-500"
              variants={storylineReveal}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)" 
              }}
            >
              <div className="mb-6">
                {problem.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-400">{problem.title}</h3>
              <p className="text-gray-300 mb-6">{problem.description}</p>
              
              <motion.div
                className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-4 border border-red-500/30"
                variants={storylineCountUp}
              >
                <div className="text-3xl font-bold text-red-400 font-orbitron">
                  {problem.stat}
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  {problem.statLabel}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          variants={storylineReveal}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <motion.div 
            className="inline-flex items-center space-x-4 glass-effect px-8 py-4 rounded-full border-2 border-red-500/30"
            animate={{ 
              scale: [1, 1.05, 1],
              borderColor: ["rgba(239, 68, 68, 0.3)", "rgba(239, 68, 68, 0.6)", "rgba(239, 68, 68, 0.3)"]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity 
            }}
          >
            <DollarSign className="w-6 h-6 text-red-400" />
            <span className="text-lg font-semibold text-red-400">
              Il est temps de prendre le contrôle
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sun, Shield, Zap, TrendingUp, CheckCircle } from "lucide-react";
import { storylineReveal, storylineSlideIn, storylineSlideInRight, storylineCountUp, storylineContainer } from "@/lib/animations";

export default function StorylineSolution() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const solutions = [
    {
      icon: <Sun className="w-12 h-12 text-yellow-400" />,
      title: "Énergie Solaire",
      description: "Exploitez le soleil tunisien 300+ jours par an",
      benefit: "Gratuit & Inépuisable",
    },
    {
      icon: <Shield className="w-12 h-12 text-green-400" />,
      title: "Technologie Premium",
      description: "Panneaux haute performance avec garantie 25 ans",
      benefit: "Fiabilité Garantie",
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-400" />,
      title: "Installation Experte",
      description: "Équipe certifiée et processus clé en main",
      benefit: "Service Complet",
    },
  ];

  const benefits = [
    { label: "Réduction facture", value: "90%", color: "text-green-400" },
    { label: "Retour investissement", value: "5-7 ans", color: "text-yellow-400" },
    { label: "CO2 économisé", value: "2.5T/an", color: "text-blue-400" },
  ];

  return (
    <section 
      id="storyline-solution" 
      className="scroll-snap-section min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
      ref={ref}
    >
      {/* Bright overlay background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-gray-900 to-green-900/20"></div>
      
      {/* Animated sun rays */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-32 bg-gradient-to-b from-yellow-400/60 to-transparent origin-bottom"
            style={{
              left: "50%",
              top: "20%",
              transform: `rotate(${i * 30}deg)`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scaleY: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
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
            className="text-5xl md:text-7xl font-bold mb-6 text-yellow-400"
            variants={storylineSlideIn}
          >
            La Solution
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={storylineSlideIn}
          >
            Vita Solar transforme votre toit en centrale électrique personnelle. 
            Prenez enfin le contrôle de votre énergie.
          </motion.p>
        </motion.div>

        {/* Main solution showcase */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
          variants={storylineContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-2xl p-8 text-center border-2 border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-500"
              variants={storylineReveal}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px rgba(251, 191, 36, 0.3)" 
              }}
            >
              <div className="mb-6">
                {solution.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">{solution.title}</h3>
              <p className="text-gray-300 mb-6">{solution.description}</p>
              
              <motion.div
                className="bg-gradient-to-r from-yellow-500/20 to-green-500/20 rounded-xl p-4 border border-yellow-500/30"
                variants={storylineCountUp}
              >
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-green-400 font-semibold">
                    {solution.benefit}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits showcase */}
        <motion.div
          className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto border-2 border-green-500/30"
          variants={storylineReveal}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <motion.h3 
            className="text-3xl font-bold text-center mb-8 text-green-400"
            variants={storylineSlideIn}
          >
            Résultats Concrets
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={storylineCountUp}
                custom={index * 0.2}
              >
                <motion.div 
                  className={`text-4xl font-bold font-orbitron mb-2 ${benefit.color}`}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ 
                    delay: index * 0.3, 
                    duration: 0.8, 
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {benefit.value}
                </motion.div>
                <div className="text-gray-300 font-semibold">
                  {benefit.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          variants={storylineReveal}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <motion.div 
            className="inline-flex items-center space-x-4 glass-effect px-8 py-4 rounded-full border-2 border-yellow-500/30"
            animate={{ 
              scale: [1, 1.05, 1],
              borderColor: ["rgba(251, 191, 36, 0.3)", "rgba(251, 191, 36, 0.6)", "rgba(251, 191, 36, 0.3)"]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity 
            }}
          >
            <Sun className="w-6 h-6 text-yellow-400" />
            <span className="text-lg font-semibold text-yellow-400">
              Votre solution est là
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
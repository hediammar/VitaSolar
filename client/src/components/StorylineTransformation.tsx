import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { 
  Banknote, 
  Leaf, 
  Home, 
  TrendingUp, 
  Battery, 
  Zap,
  Calculator,
  Globe
} from "lucide-react";
import { storylineReveal, storylineSlideIn, storylineSlideInRight, storylineCountUp, storylineContainer } from "@/lib/animations";

export default function StorylineTransformation() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [animatedValues, setAnimatedValues] = useState({
    savings: 0,
    co2: 0,
    energy: 0,
    years: 0,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimatedValues({
          savings: 85,
          co2: 2.5,
          energy: 95,
          years: 25,
        });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  const transformations = [
    {
      icon: <Banknote className="w-16 h-16 text-green-400" />,
      title: "Économies Massives",
      description: "Réduisez vos factures de 70% à 90%",
      detail: "Économisez jusqu'à 4000 DT par an",
      gradient: "from-green-400 to-blue-400",
    },
    {
      icon: <Leaf className="w-16 h-16 text-green-500" />,
      title: "Impact Écologique",
      description: "Devenez éco-responsable",
      detail: "Évitez 2.5 tonnes de CO2 par an",
      gradient: "from-green-500 to-yellow-400",
    },
    {
      icon: <Home className="w-16 h-16 text-blue-400" />,
      title: "Autonomie Énergétique",
      description: "Contrôlez votre consommation",
      detail: "Jusqu'à 95% d'autonomie",
      gradient: "from-blue-400 to-purple-400",
    },
  ];

  const beforeAfter = [
    {
      before: {
        icon: <TrendingUp className="w-8 h-8 text-red-400" />,
        title: "Avant",
        value: "450 DT/mois",
        description: "Facture électrique",
        bgColor: "bg-red-500/20",
        borderColor: "border-red-500/30",
      },
      after: {
        icon: <Battery className="w-8 h-8 text-green-400" />,
        title: "Après",
        value: "50 DT/mois",
        description: "Facture résiduelle",
        bgColor: "bg-green-500/20",
        borderColor: "border-green-500/30",
      },
    },
    {
      before: {
        icon: <Globe className="w-8 h-8 text-orange-400" />,
        title: "Avant",
        value: "2.8T CO2/an",
        description: "Empreinte carbone",
        bgColor: "bg-orange-500/20",
        borderColor: "border-orange-500/30",
      },
      after: {
        icon: <Leaf className="w-8 h-8 text-green-400" />,
        title: "Après",
        value: "0.3T CO2/an",
        description: "Empreinte carbone",
        bgColor: "bg-green-500/20",
        borderColor: "border-green-500/30",
      },
    },
  ];

  return (
    <section 
      id="storyline-transformation" 
      className="scroll-snap-section min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
      ref={ref}
    >
      {/* Success overlay background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-gray-900 to-blue-900/20"></div>
      
      {/* Animated success elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.9, 0.3],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
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
            className="text-5xl md:text-7xl font-bold mb-6 text-green-400"
            variants={storylineSlideIn}
          >
            Votre Transformation
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={storylineSlideIn}
          >
            Imaginez votre vie avec l'énergie solaire. Économies, tranquillité d'esprit 
            et contribution à un avenir durable.
          </motion.p>
        </motion.div>

        {/* Main transformations */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
          variants={storylineContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          {transformations.map((transformation, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-2xl p-8 text-center border-2 border-green-500/30 hover:border-green-400/50 transition-all duration-500"
              variants={storylineReveal}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" 
              }}
            >
              <div className="mb-6">
                {transformation.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">{transformation.title}</h3>
              <p className="text-gray-300 mb-6">{transformation.description}</p>
              
              <motion.div
                className={`bg-black ${transformation.gradient} bg-opacity-20 rounded-xl p-4 border border-green-500/30`}
                variants={storylineCountUp}
              >
                <div className="text-lg font-bold text-green-400">
                  {transformation.detail}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Before/After comparison */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          variants={storylineReveal}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-green-400">
            Avant vs Après
          </h3>
          
          <div className="space-y-8">
            {beforeAfter.map((comparison, index) => (
              <motion.div
                key={index}
                className="grid md:grid-cols-2 gap-6"
                variants={storylineContainer}
              >
                <motion.div
                  className={`glass-effect rounded-xl p-6 ${comparison.before.bgColor} border-2 ${comparison.before.borderColor}`}
                  variants={storylineSlideIn}
                >
                  <div className="flex items-center mb-4">
                    {comparison.before.icon}
                    <span className="text-xl font-bold ml-3">{comparison.before.title}</span>
                  </div>
                  <div className="text-2xl font-bold font-orbitron mb-2">
                    {comparison.before.value}
                  </div>
                  <div className="text-gray-300">{comparison.before.description}</div>
                </motion.div>

                <motion.div
                  className={`glass-effect rounded-xl p-6 ${comparison.after.bgColor} border-2 ${comparison.after.borderColor}`}
                  variants={storylineSlideInRight}
                >
                  <div className="flex items-center mb-4">
                    {comparison.after.icon}
                    <span className="text-xl font-bold ml-3">{comparison.after.title}</span>
                  </div>
                  <div className="text-2xl font-bold font-orbitron mb-2">
                    {comparison.after.value}
                  </div>
                  <div className="text-gray-300">{comparison.after.description}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success metrics */}
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
            Votre Impact en Chiffres
          </motion.h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              className="text-center"
              variants={storylineCountUp}
            >
              <motion.div 
                className="text-4xl font-bold font-orbitron mb-2 text-green-400"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {animatedValues.savings}%
              </motion.div>
              <div className="text-gray-300 font-semibold">Économies</div>
            </motion.div>

            <motion.div
              className="text-center"
              variants={storylineCountUp}
            >
              <motion.div 
                className="text-4xl font-bold font-orbitron mb-2 text-blue-400"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {animatedValues.co2}T
              </motion.div>
              <div className="text-gray-300 font-semibold">CO2 évité/an</div>
            </motion.div>

            <motion.div
              className="text-center"
              variants={storylineCountUp}
            >
              <motion.div 
                className="text-4xl font-bold font-orbitron mb-2 text-yellow-400"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                {animatedValues.energy}%
              </motion.div>
              <div className="text-gray-300 font-semibold">Autonomie</div>
            </motion.div>

            <motion.div
              className="text-center"
              variants={storylineCountUp}
            >
              <motion.div 
                className="text-4xl font-bold font-orbitron mb-2 text-purple-400"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                {animatedValues.years}
              </motion.div>
              <div className="text-gray-300 font-semibold">Ans garantie</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Final call to action */}
        <motion.div
          className="text-center mt-16"
          variants={storylineReveal}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <motion.div 
            className="inline-flex items-center space-x-4 glass-effect px-8 py-4 rounded-full border-2 border-green-500/30 cursor-pointer"
            animate={{ 
              scale: [1, 1.05, 1],
              borderColor: ["rgba(34, 197, 94, 0.3)", "rgba(34, 197, 94, 0.6)", "rgba(34, 197, 94, 0.3)"]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity 
            }}
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <Calculator className="w-6 h-6 text-green-400" />
            <span className="text-lg font-semibold text-green-400">
              Commencez votre transformation
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
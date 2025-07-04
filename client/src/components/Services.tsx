import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  GraduationCap, 
  Star, 
  TrendingUp, 
  Settings, 
  Shield, 
  Brain 
} from "lucide-react";
import { fadeInUp, staggerContainer, hoverGlow } from "@/lib/animations";

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <GraduationCap className="w-6 h-6 text-yellow-400" />,
      title: "Expérience",
      description: "Expertise confirmée en installation photovoltaïque tunisienne",
    },
    {
      icon: <Star className="w-6 h-6 text-green-500" />,
      title: "Qualité Premium",
      description: "Équipements certifiés et installation selon les normes européennes",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      title: "Études personnalisées",
      description: "Analyse sur mesure pour optimiser votre production solaire",
    },
    {
      icon: <Settings className="w-6 h-6 text-yellow-400" />,
      title: "Processus fluide",
      description: "De l'étude à la mise en service, nous gérons tout",
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: "Garantie 25 ans",
      description: "Garantie constructeur et assurance décennale incluses",
    },
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: "Écosystème intelligent",
      description: "Monitoring en temps réel et optimisation automatique",
    },
  ];

  return (
    <section id="services" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pourquoi choisir <span className="text-yellow-400">Vita Solar</span> ?
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-xl p-6 hover-glow transition-all duration-300"
              variants={fadeInUp}
              whileHover={hoverGlow.whileHover}
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-bold ml-3">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Energy Independence Section */}
      <div className="py-20 relative overflow-hidden mt-20">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380"
            alt="Modern solar technology installation"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            animate={inView ? "animate" : "initial"}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Devenez acteur de votre propre <span className="text-yellow-400">transition énergétique</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Avec le soleil tunisien, produisez votre propre électricité et maîtrisez votre budget énergétique.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300">
                Simuler votre projet solaire
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

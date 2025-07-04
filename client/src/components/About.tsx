import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Handshake, Award, Leaf } from "lucide-react";
import { fadeInUp, staggerContainer, cardHover } from "@/lib/animations";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: <Handshake className="w-8 h-8 text-white" />,
      title: "Transparence",
      description: "Devis clair, processus transparent et communication constante tout au long de votre projet solaire.",
      gradient: "from-yellow-400 to-green-500",
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Expertise & Qualité",
      description: "Équipements premium, installation certifiée et garantie 25 ans pour une performance optimale.",
      gradient: "from-green-500 to-blue-500",
    },
    {
      icon: <Leaf className="w-8 h-8 text-white" />,
      title: "Écologie & Rentabilité",
      description: "Réduisez votre facture électrique jusqu'à 90% tout en contribuant à un avenir plus propre.",
      gradient: "from-blue-500 to-yellow-400",
    },
  ];

  return (
    <section id="apropos" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Votre partenaire en <span className="text-yellow-400">transition énergétique</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Vita Solar est une entreprise jeune et innovante spécialisée dans l'installation de panneaux photovoltaïques. Nous accompagnons nos clients dans toutes les étapes.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-2xl p-8 text-center hover-glow"
              variants={fadeInUp}
              whileHover={cardHover.whileHover}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, cardHover } from "@/lib/animations";

export default function Solutions() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const solutions = [
    {
      title: "🏠 Solaire Résidentiel",
      description: "Installation complète pour votre domicile. Réduisez votre facture électrique de 70% à 90%.",
      price: "À partir de 8 000 DT",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Professional solar installation team working on residential roof",
    },
    {
      title: "🔋 Stockage Batterie",
      description: "Systèmes de stockage intelligents pour une autonomie énergétique maximale.",
      price: "À partir de 12 000 DT",
      image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Premium solar energy equipment and battery storage systems",
    },
    {
      title: "🏢 Solutions B2B",
      description: "Installations industrielles et commerciales à grande échelle pour entreprises.",
      price: "Sur devis",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Modern Tunisian architecture integrated with solar panel installations",
    },
  ];

  return (
    <section id="solutions" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nos <span className="text-yellow-400">Solutions</span> Photovoltaïques
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des solutions adaptées à chaque besoin, pour particuliers et professionnels
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-2xl overflow-hidden hover-glow transition-all duration-300"
              variants={fadeInUp}
              whileHover={cardHover.whileHover}
            >
              <img
                src={solution.image}
                alt={solution.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 font-bold font-orbitron">
                    {solution.price}
                  </span>
                  <Button
                    variant="ghost"
                    className="text-blue-400 hover:text-white transition-colors"
                  >
                    En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CEO Message Section */}
      <div className="py-20 relative overflow-hidden mt-20">
        <div className="absolute inset-0 gradient-animate opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            animate={inView ? "animate" : "initial"}
          >
            <div className="glass-effect rounded-2xl p-12">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 text-gray-100">
                "Nous croyons à un avenir plus propre, alimenté par le soleil tunisien. Notre mission est de démocratiser l'énergie solaire pour chaque foyer et chaque entreprise."
              </blockquote>
              <cite className="text-yellow-400 font-semibold">
                — Équipe Vita Solar, Pionniers de l'énergie solaire en Tunisie
              </cite>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

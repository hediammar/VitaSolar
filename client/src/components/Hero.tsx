import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, slideInUp, typewriterText } from "@/lib/animations";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="hero-bg min-h-screen flex items-center justify-center relative"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <video
          src="https://res.cloudinary.com/dm1vut0ec/video/upload/v1751624249/7040278-uhd_4096_1974_30fps_of61k5.mp4"
          // alt="Futuristic solar panels on rooftops"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            
              
              <motion.span
                className="inline-block overflow-hidden"
                variants={typewriterText}
                initial="initial"
                animate="animate"
              >
                Alimentez votre avenir avec le soleil d’aujourd’hui.
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            variants={slideInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
              Solutions photovoltaïques sur mesure pour particuliers et entreprises en Tunisie
            </p>
          </motion.div>

          <motion.div
            variants={slideInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-green-500 text-gray-900 text-lg px-10 py-4 hover:shadow-2xl hover:shadow-yellow-400/50 animate-pulse"
              >
                Commencer votre projet
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Solar Element */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-16 h-16 glass-effect rounded-full flex items-center justify-center">
          <ChevronDown className="w-6 h-6 text-yellow-400" />
        </div>
      </motion.div>
    </section>
  );
}

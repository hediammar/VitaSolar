import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-dark" : "glass-effect"
        }`}
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-green-500 rounded-full flex items-center justify-center">
                <Sun className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">VitaSolar</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("storyline-problem")}
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Le Problème
              </button>
              <button
                onClick={() => scrollToSection("storyline-solution")}
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Notre Solution
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-yellow-400 to-green-500 text-gray-900 hover:shadow-lg hover:shadow-yellow-400/30"
                >
                  Devis Gratuit
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 glass-dark z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("storyline-problem")}
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Le Problème
            </button>
            <button
              onClick={() => scrollToSection("storyline-solution")}
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Notre Solution
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-yellow-400 to-green-500 text-gray-900"
            >
              Devis Gratuit
            </Button>
          </div>
        </motion.div>
      )}

      {/* Fixed CTA Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-yellow-400 to-green-500 text-gray-900 shadow-2xl hover:shadow-yellow-400/50 animate-pulse"
          >
            <Calculator className="w-4 h-4 mr-2" />
            Devis Gratuit
          </Button>
        </motion.div>
      </motion.div>
    </>
  );
}

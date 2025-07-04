import { motion } from "framer-motion";
import { Sun, Linkedin, MessageCircle, Facebook } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Accueil", section: "accueil" },
    { name: "À propos", section: "apropos" },
    { name: "Services", section: "services" },
    { name: "Contact", section: "contact" },
  ];

  const services = [
    "Installation résidentielle",
    "Solutions commerciales",
    "Maintenance",
    "Étude personnalisée",
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "#",
      gradient: "from-yellow-400 to-green-500",
      hoverColor: "hover:shadow-yellow-400/30",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      href: "#",
      gradient: "from-green-500 to-blue-500",
      hoverColor: "hover:shadow-green-500/30",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "#",
      gradient: "from-blue-500 to-yellow-400",
      hoverColor: "hover:shadow-blue-500/30",
    },
  ];

  return (
    <footer className="py-12 glass-dark neon-border border-t-2">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-green-500 rounded-full flex items-center justify-center">
                <Sun className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">Vita Solar</span>
            </div>
            <p className="text-gray-400 text-sm">
              Votre partenaire de confiance pour la transition énergétique en Tunisie.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gradient-to-br ${social.gradient} rounded-full flex items-center justify-center hover:shadow-lg ${social.hoverColor} transition-all duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Vita Solar photovoltaïque. Tous droits réservés. | Hammamet, Nabeul, Tunisie
          </p>
          <div className="mt-4 flex justify-center items-center space-x-4">
            <span className="text-sm text-gray-500">Propulsé par l'énergie solaire</span>
            <motion.div
              className="w-4 h-4 bg-yellow-400 rounded-full"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

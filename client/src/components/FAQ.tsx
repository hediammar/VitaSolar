import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function FAQ() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Comment fonctionne l'énergie solaire ?",
      answer: "Les panneaux photovoltaïques convertissent la lumière du soleil en électricité grâce à l'effet photovoltaïque. Cette électricité est ensuite convertie en courant alternatif par un onduleur pour alimenter votre domicile.",
    },
    {
      question: "L'énergie solaire est-elle rentable en Tunisie ?",
      answer: "Absolument ! Avec un ensoleillement exceptionnel de plus de 300 jours par an, la Tunisie offre des conditions idéales. Le retour sur investissement est généralement de 5-7 ans.",
    },
    {
      question: "Que faire si je n'ai pas de toit adapté ?",
      answer: "Nous proposons des solutions au sol, des carports solaires ou des installations sur ombrières. Nos experts étudient toutes les alternatives pour votre propriété.",
    },
    {
      question: "Quelle est la durée de vie d'une installation solaire ?",
      answer: "Les panneaux solaires ont une durée de vie de 25-30 ans avec une garantie de performance. Les onduleurs ont une durée de vie de 10-15 ans. L'installation nécessite très peu de maintenance.",
    },
  ];

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Questions <span className="text-yellow-400">Fréquentes</span>
          </h2>
          <p className="text-xl text-gray-300">
            Tout ce que vous devez savoir sur l'énergie solaire en Tunisie
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto space-y-4"
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-xl overflow-hidden"
              variants={fadeInUp}
            >
              <button
                className="w-full text-left p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-yellow-400" />
                </motion.div>
              </button>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: openItems.includes(index) ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

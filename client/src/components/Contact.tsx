import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema } from "@shared/schema";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import type { InsertContactSubmission } from "@shared/schema";

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Demande envoyée !",
        description: "Nous vous contacterons dans les plus brefs délais.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "Adresse",
      content: "Hammamet, Nabeul, Tunisie",
      gradient: "from-yellow-400 to-green-500",
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: "Téléphone",
      content: "+216 52 77 99 10",
      gradient: "from-green-500 to-blue-500",
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "Email",
      content: "contact@vitasolar.tn",
      gradient: "from-blue-500 to-yellow-400",
    },
  ];

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à passer au <span className="text-yellow-400">solaire</span> ?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contactez-nous pour un devis personnalisé et gratuit. Nos experts vous accompagnent dans votre projet.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          {/* Contact Form */}
          <motion.div
            className="relative glass-effect rounded-3xl p-8 border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl shadow-2xl"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10">
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500 bg-clip-text text-transparent">
                  Demander un devis gratuit
                </h3>
                <p className="text-gray-300 text-sm">Transformez votre énergie en 24h chrono</p>
              </motion.div>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <motion.div
                  className="space-y-4"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  <motion.div variants={fadeInUp}>
                    <div className="relative group">
                      <div className="relative">
                        <Input
                          placeholder=""
                          className="peer glass-effect border-white/20 text-white placeholder:text-gray-400 h-12 px-4 rounded-xl bg-white/5 backdrop-blur-sm focus:bg-white/10 focus:border-yellow-400/50 transition-all duration-300 hover:border-white/40"
                          {...form.register("name")}
                        />
                        <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm transition-all duration-300 pointer-events-none peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-yellow-400 peer-focus:bg-gray-900 peer-focus:px-2 peer-focus:rounded">
                          Nom complet
                        </label>
                      </div>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/0 to-green-500/0 group-hover:from-yellow-400/5 group-hover:to-green-500/5 transition-all duration-300 pointer-events-none"></div>
                    </div>
                    {form.formState.errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1"
                      >
                        {form.formState.errors.name.message}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <div className="relative group">
                      <div className="relative">
                        <Input
                          type="email"
                          placeholder=""
                          className="peer glass-effect border-white/20 text-white placeholder:text-gray-400 h-12 px-4 rounded-xl bg-white/5 backdrop-blur-sm focus:bg-white/10 focus:border-yellow-400/50 transition-all duration-300 hover:border-white/40"
                          {...form.register("email")}
                        />
                        <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm transition-all duration-300 pointer-events-none peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-yellow-400 peer-focus:bg-gray-900 peer-focus:px-2 peer-focus:rounded">
                          Email
                        </label>
                      </div>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/0 to-green-500/0 group-hover:from-yellow-400/5 group-hover:to-green-500/5 transition-all duration-300 pointer-events-none"></div>
                    </div>
                    {form.formState.errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1"
                      >
                        {form.formState.errors.email.message}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <div className="relative group">
                      <div className="relative">
                        <Input
                          type="tel"
                          placeholder=""
                          className="peer glass-effect border-white/20 text-white placeholder:text-gray-400 h-12 px-4 rounded-xl bg-white/5 backdrop-blur-sm focus:bg-white/10 focus:border-yellow-400/50 transition-all duration-300 hover:border-white/40"
                          {...form.register("phone")}
                        />
                        <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm transition-all duration-300 pointer-events-none peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-yellow-400 peer-focus:bg-gray-900 peer-focus:px-2 peer-focus:rounded">
                          Téléphone
                        </label>
                      </div>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/0 to-green-500/0 group-hover:from-yellow-400/5 group-hover:to-green-500/5 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <div className="relative group">
                      <Select
                        value={form.watch("projectType") ?? ""}
                        onValueChange={(value) => form.setValue("projectType", value)}
                      >
                        <SelectTrigger className="glass-effect border-white/20 text-white h-12 px-4 rounded-xl bg-white/5 backdrop-blur-sm focus:bg-white/10 focus:border-yellow-400/50 transition-all duration-300 hover:border-white/40">
                          <SelectValue placeholder="Type de projet" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900/95 backdrop-blur-xl border-white/20">
                          <SelectItem value="residential" className="text-white hover:bg-white/10">
                            🏠 Résidentiel
                          </SelectItem>
                          <SelectItem value="commercial" className="text-white hover:bg-white/10">
                            🏢 Commercial
                          </SelectItem>
                          <SelectItem value="industrial" className="text-white hover:bg-white/10">
                            🏭 Industriel
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/0 to-green-500/0 group-hover:from-yellow-400/5 group-hover:to-green-500/5 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <div className="relative group">
                      <Textarea
                        placeholder=""
                        rows={4}
                        className="glass-effect border-white/20 text-white placeholder:text-gray-400 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm focus:bg-white/10 focus:border-yellow-400/50 transition-all duration-300 hover:border-white/40 resize-none"
                        {...form.register("message")}
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/0 to-green-500/0 group-hover:from-yellow-400/5 group-hover:to-green-500/5 transition-all duration-300 pointer-events-none"></div>
                    </div>
                    {form.formState.errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1"
                      >
                        {form.formState.errors.message.message}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full h-14 bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500 text-gray-900 font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-yellow-400/40 transition-all duration-300 relative overflow-hidden group form-button-glow"
                        disabled={contactMutation.isPending}
                      >
                        <span className="relative z-10">
                          {contactMutation.isPending ? (
                            <div className="flex items-center justify-center">
                              <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin mr-2"></div>
                              Envoi en cours...
                            </div>
                          ) : (
                            "✨ Obtenir mon devis gratuit"
                          )}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-green-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </form>

              {/* Trust indicators */}
              <motion.div
                className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Réponse sous 24h
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  Devis 100% gratuit
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Sans engagement
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate={inView ? "animate" : "initial"}
          >
            <motion.div
              className="glass-effect rounded-2xl p-8"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold mb-6">Contactez-nous</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-full flex items-center justify-center mr-4`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-gray-300">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              className="glass-effect rounded-2xl p-4"
              variants={fadeInUp}
            >
              <div className="bg-gray-800 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <p className="text-gray-300">Carte interactive de Hammamet</p>
                  <p className="text-sm text-gray-400">Localisation exacte fournie lors du contact</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

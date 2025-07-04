import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StorylineProblem from "@/components/StorylineProblem";
import StorylineSolution from "@/components/StorylineSolution";
import StorylineTransformation from "@/components/StorylineTransformation";
import StorylineScrollIndicator from "@/components/StorylineScrollIndicator";
import About from "@/components/About";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  useEffect(() => {
    // Scroll Progress Indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    const handleScroll = () => {
      const scrollProgress = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollIndicator) {
        (scrollIndicator as HTMLElement).style.transform = `scaleX(${scrollProgress / 100})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white scroll-smooth">
      {/* Storyline Scroll Indicators */}
      <StorylineScrollIndicator />
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Header */}
      <Header />
      
      {/* Main Content with Storyline */}
      <main>
        {/* Opening Hero */}
        <Hero />
        
        {/* Scroll-Based Storyline Journey */}
        <StorylineProblem />
        <StorylineSolution />
        <StorylineTransformation />
        
        {/* Traditional Sections */}
        <About />
        
        <Solutions />
        <FAQ />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

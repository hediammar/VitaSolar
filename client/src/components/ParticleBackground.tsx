import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  color: string;
}

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createParticles = () => {
      const colors = [
        "rgba(255, 179, 0, 0.8)",
        "rgba(76, 175, 80, 0.6)",
        "rgba(64, 196, 255, 0.7)",
      ];

      const newParticles: Particle[] = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
          y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
          delay: Math.random() * 20,
          duration: Math.random() * 15 + 25,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      setParticles(newParticles);
    };

    createParticles();
    const interval = setInterval(createParticles, 45000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
            left: -10,
            top: `${particle.y}px`,
          }}
          animate={{
            x: [0, (typeof window !== 'undefined' ? window.innerWidth : 1920) + 100],
            y: [0, -100],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

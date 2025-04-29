
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FloatingBackground from './FloatingBackground';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16">
      <FloatingBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Enterprise-Grade Cloud & DevOps Solutions
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-4 text-msp-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Helping startups and small businesses deploy fast, secure, scalable IT solutions globally.
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-msp-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Rustyt specializes in cloud architecture, automation, security, and comprehensive IT management.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a 
              href="#contact" 
              className="btn-primary inline-flex items-center group"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;


import { motion } from 'framer-motion';
import { Globe } from './ui/globe';
import { COLORS } from '@/lib/color_variable';

const GlobeSection = () => {
  return (
    <section id="globe" className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="md:w-1/2">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Global IT Solutions
            </motion.h2>
            
            <motion.p 
              className="text-lg mb-4 text-msp-black/80 text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Our expertise spans across continents, providing reliable support and innovative solutions wherever your business takes you.
            </motion.p>
            
            <motion.p 
              className="text-lg mb-6 text-msp-black/80 text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              With strategic locations and remote capabilities, we ensure consistent service delivery around the clock.
            </motion.p>
          </div>
          
          <div className="md:w-1/2 h-[400px] md:h-[500px] relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-square">
                <Globe className="animate-fade-in" />
                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0),rgba(255,255,255,0.7))]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobeSection;

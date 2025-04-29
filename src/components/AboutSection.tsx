
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing bg-msp-ivory">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">About Rustyt</h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              Rustyt is a premier technology services company specializing in 
              scalable cloud architecture, secure networks, and DevOps automation. 
              Our team delivers enterprise-grade solutions that optimize performance, 
              enhance security, and streamline operations.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              With over 1,300 hours of service across 87 successful projects, 
              Rustyt has established a reputation for technical excellence and 
              reliability. Our company has helped clients in fintech, edtech, 
              media, e-commerce, and healthcare build scalable, secure IT environments.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-msp-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-msp-dark-brown mb-2">100%</div>
                <div className="text-lg font-medium">Client Satisfaction</div>
              </div>
              
              <div className="bg-msp-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-msp-dark-brown mb-2">1,300+</div>
                <div className="text-lg font-medium">Hours Completed</div>
              </div>
              
              <div className="bg-msp-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-msp-dark-brown mb-2">87</div>
                <div className="text-lg font-medium">Projects Delivered</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

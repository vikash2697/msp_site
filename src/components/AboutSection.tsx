
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
          <h2 className="section-title text-center">About Me</h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              I'm Vishal, a top-rated freelancer with 98% job success on Upwork, specializing in 
              scalable cloud architecture, secure networks, and DevOps automation. 
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              I've completed over 1,300 hours across 87 projects, helping clients 
              optimize infrastructure, improve security, and automate deployments.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-msp-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-msp-dark-brown mb-2">98%</div>
                <div className="text-lg font-medium">Job Success</div>
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

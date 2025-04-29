
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-msp-black text-white py-12">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">
              <span className="text-msp-ivory">R</span>ustyt
            </h3>
            <p className="mt-2 text-msp-ivory/80 max-w-sm">
              DevOps Experts & Solutions Architects providing reliable MSP services.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-msp-ivory transition-colors">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-white hover:text-msp-ivory transition-colors">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-white hover:text-msp-ivory transition-colors">
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-msp-ivory/60">
            &copy; {currentYear} Rustyt's MSP Services. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center space-x-6 text-sm text-msp-ivory/60">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

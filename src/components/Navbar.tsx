
import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useActiveSection } from '@/hooks/use-active-section';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px)');

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];
  
  const sectionIds = navLinks.map(link => link.id);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-msp-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl text-msp-black">
          <span className="text-msp-dark-brown">V</span>ishal
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-msp-black hover:text-msp-dark-brown transition-colors relative ${
                activeSection === link.id ? 'text-msp-dark-brown font-medium' : ''
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-msp-dark-brown" />
              )}
            </a>
          ))}
          <Button 
            asChild
            variant="default"
            className="bg-msp-dark-brown hover:opacity-90 transition-opacity text-white ml-2"
          >
            <a href="#contact" className="inline-flex items-center">
              <PhoneCall size={18} className="mr-2" />
              Schedule a Call
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button 
            asChild
            variant="default"
            className="bg-msp-dark-brown hover:opacity-90 transition-opacity text-white mr-4"
            size="sm"
          >
            <a href="#contact" className="inline-flex items-center">
              <PhoneCall size={16} className="mr-1" />
              Call
            </a>
          </Button>
          <button
            className="text-msp-black"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-msp-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-msp-black hover:text-msp-dark-brown transition-colors py-2 ${
                  activeSection === link.id ? 'text-msp-dark-brown font-medium' : ''
                }`}
                onClick={toggleMenu}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="ml-2 inline-block h-[6px] w-[6px] rounded-full bg-msp-dark-brown" />
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

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
              className="text-msp-black hover:text-msp-dark-brown transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-primary"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-msp-black"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-msp-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-msp-black hover:text-msp-dark-brown transition-colors py-2"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn-primary text-center"
              onClick={toggleMenu}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

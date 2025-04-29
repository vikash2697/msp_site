
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import GlobeSection from '@/components/GlobeSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Schema.org JSON-LD structured data
  const companySchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rustyt",
    "url": "https://rustyt.com",
    "description": "Solutions Architect & DevOps Experts specializing in cloud infrastructure, automation and security",
    "sameAs": [
      "https://github.com/rustyt", // Replace with actual links
      "https://linkedin.com/company/rustyt"
    ],
    "knowsAbout": ["Cloud Architecture", "DevOps", "IT Automation", "System Administration", "Infrastructure as Code"]
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rustyt's MSP Services",
    "description": "Reliable MSP services tailored for small businesses, startups, and tech teams",
    "url": "https://rustyt.com",
    "sameAs": [
      "https://github.com/rustyt", // Replace with actual links
      "https://linkedin.com/company/rustyt"
    ],
    "serviceType": ["Cloud Services", "DevOps", "Automation", "Security", "System Administration"],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "0", // Replace with actual coordinates if relevant
        "longitude": "0"
      },
      "geoRadius": "Worldwide"
    },
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "MSP IT Services",
        "description": "Professional cloud architecture, DevOps and IT automation services"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Rustyt - DevOps Experts & Cloud Architects | MSP Services</title>
        <meta name="description" content="Expert DevOps, Cloud Architecture, and IT Automation services by Rustyt. Reliable MSP solutions for small businesses, startups, and tech teams." />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify(companySchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <GlobeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;

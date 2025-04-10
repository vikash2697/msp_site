
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

type Testimonial = {
  quote: string;
  client: string;
  date: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "He's fast and understands and fixes every issue I have had so far.",
    client: "Client",
    date: "March 2025"
  },
  {
    quote: "Efficiently set up everything with no lag. Brilliant work.",
    client: "Client",
    date: "March 2025"
  },
  {
    quote: "Vishal is incredibly knowledgeable about cloud infrastructure and helped us optimize our AWS setup.",
    client: "Tech Startup",
    date: "February 2025"
  },
  {
    quote: "Our CI/CD pipeline has never been more efficient. Great communication throughout the process.",
    client: "Software Company",
    date: "January 2025"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-spacing">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md relative"
              >
                <Quote className="absolute top-4 right-4 text-msp-dark-brown/20 h-10 w-10" />
                <p className="text-lg mb-4 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-msp-dark-brown/20 flex items-center justify-center text-msp-dark-brown font-bold">
                    {testimonial.client.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <div className="font-medium">— {testimonial.client}</div>
                    <div className="text-sm text-msp-black/60">{testimonial.date}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    title: "Cloudflare Proxy to Google Cloud",
    description: "Setup reverse proxy using Cloudflare Workers to securely route traffic to GCS.",
    technologies: ["Cloudflare", "Google Cloud", "Terraform"]
  },
  {
    title: "Advanced Plex Media Server",
    description: "Plex setup with Docker, Sonarr, Radarr, and 4K streaming optimization.",
    technologies: ["Docker", "Plex", "Linux", "Nginx"]
  },
  {
    title: "DNS & Reverse Proxy Config",
    description: "Configured high-availability DNS + Cloudflare/IONOS reverse proxy system.",
    technologies: ["DNS", "Cloudflare", "IONOS", "Nginx"]
  },
  {
    title: "CI/CD Pipeline Setup",
    description: "Automated deployments using Docker + Git + Kubernetes.",
    technologies: ["Jenkins", "Docker", "Kubernetes", "Git"]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-spacing bg-msp-ivory">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Featured Projects</h2>
          
          <div className="mt-12">
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 sm:basis-full">
                    <div className="p-1">
                      <Card className="border border-msp-dark-brown/10 h-full">
                        <CardHeader>
                          <CardTitle className="text-xl text-msp-dark-brown">{project.title}</CardTitle>
                          <CardDescription className="text-base">{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span key={tech} className="bg-msp-dark-brown/10 text-msp-black px-3 py-1 rounded-full text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter>
                          <button className="flex w-full justify-center items-center py-2 text-msp-dark-brown hover:underline min-h-[44px]">
                            <span>View details</span>
                            <ExternalLink className="ml-1 h-4 w-4" />
                          </button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-4">
                <CarouselPrevious className="static transform-none mr-0" />
                <CarouselNext className="static transform-none ml-0" />
              </div>
            </Carousel>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

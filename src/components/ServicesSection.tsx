
import { motion } from 'framer-motion';
import { Cloud, GitBranch, Shield, Server, Database, Monitor, Network, Archive } from 'lucide-react';

type ServiceCategory = {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
};

const serviceCategories: ServiceCategory[] = [
  {
    title: "Cloud & Infrastructure",
    description: "Scalable and reliable cloud solutions for your business needs",
    icon: <Cloud className="w-10 h-10 text-msp-dark-brown" />,
    items: ["AWS", "Cloudflare", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"]
  },
  {
    title: "DevOps & Automation",
    description: "Streamline your development and operations workflows",
    icon: <GitBranch className="w-10 h-10 text-msp-dark-brown" />,
    items: ["CI/CD Pipelines", "Jenkins", "GitLab CI", "Prometheus", "Grafana", "Ansible"]
  },
  {
    title: "Security & Authentication",
    description: "Protect your systems with robust security measures",
    icon: <Shield className="w-10 h-10 text-msp-dark-brown" />,
    items: ["SSO", "SAML", "LDAP", "HTTPS", "Keycloak", "Bind", "DNSMasq"]
  },
  {
    title: "System Administration",
    description: "Efficient system management across multiple platforms",
    icon: <Server className="w-10 h-10 text-msp-dark-brown" />,
    items: ["Linux", "Windows", "macOS", "Proxmox", "NGINX", "Apache"]
  },
  {
    title: "Databases & Caching",
    description: "Optimize your data storage and retrieval systems",
    icon: <Database className="w-10 h-10 text-msp-dark-brown" />,
    items: ["MySQL", "PostgreSQL", "MariaDB", "DynamoDB", "Redis", "Memcached"]
  },
  {
    title: "End-User Computing",
    description: "Support and management for your end-user environments",
    icon: <Monitor className="w-10 h-10 text-msp-dark-brown" />,
    items: ["Remote IT Support", "VDI", "MDM", "Desktop Support", "Workspace Management"]
  },
  {
    title: "Networking",
    description: "Design and implement reliable network infrastructure",
    icon: <Network className="w-10 h-10 text-msp-dark-brown" />,
    items: ["VPNs", "Firewalls", "DNS", "DHCP", "Load Balancing", "SD-WAN"]
  },
  {
    title: "Backup & Recovery",
    description: "Secure your data with comprehensive backup solutions",
    icon: <Archive className="w-10 h-10 text-msp-dark-brown" />,
    items: ["Disaster Recovery", "High Availability", "Business Continuity", "Backup Solutions"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-spacing">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-msp-black/70 mb-4 text-base">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center text-base">
                      <span className="w-2 h-2 bg-msp-dark-brown rounded-full mr-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

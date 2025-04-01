import React from 'react';
import { Leaf, Scissors, Sprout, Grid, Droplets, Home } from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Service item component
function ServiceItem({ icon, title, description }: ServiceProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="p-6">
        <div className="w-16 h-16 mx-auto mb-4 text-primary flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-primary text-center mb-3">{title}</h3>
        <p className="text-text text-center">{description}</p>
      </div>
    </div>
  );
}

export default function Services() {
  // Services data
  const services = [
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Garden Design",
      description: "Professional garden design services to create beautiful, functional outdoor spaces tailored to your lifestyle and preferences."
    },
    {
      icon: <Scissors className="h-10 w-10" />,
      title: "Lawn Care",
      description: "Complete lawn maintenance services including mowing, fertilizing, aeration, and renovation to keep your grass healthy and vibrant."
    },
    {
      icon: <Sprout className="h-10 w-10" />,
      title: "Planting & Cultivation",
      description: "Expert plant selection, installation, and care for trees, shrubs, flowers, and other vegetation suitable for Brighton's climate."
    },
    {
      icon: <Grid className="h-10 w-10" />,
      title: "Patios & Hardscaping",
      description: "Design and installation of patios, walkways, retaining walls, and other hardscape elements using quality materials."
    },
    {
      icon: <Droplets className="h-10 w-10" />,
      title: "Irrigation Systems",
      description: "Installation and maintenance of efficient irrigation systems to ensure your landscape receives the right amount of water."
    },
    {
      icon: <Home className="h-10 w-10" />,
      title: "Hedge Trimming",
      description: "Professional hedge maintenance and sculpting to keep your garden boundaries neat, tidy, and healthy all year round."
    }
  ];

  return (
    <section id="services" className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            We offer a comprehensive range of landscaping services to transform your outdoor space into a place of beauty and functionality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

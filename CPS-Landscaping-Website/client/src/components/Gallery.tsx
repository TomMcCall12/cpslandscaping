import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

interface GalleryItemProps {
  image: string;
  title: string;
  location: string;
}

// Gallery item component
function GalleryItem({ image, title, location }: GalleryItemProps) {
  return (
    <div className="group relative h-64 rounded-lg overflow-hidden shadow-md">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-4 text-white">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  // Gallery items data
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Contemporary Garden Design",
      location: "Brighton, East Sussex"
    },
    {
      image: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Natural Stone Patio",
      location: "Hove, East Sussex"
    },
    {
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Garden Pathway & Lighting",
      location: "Brighton, East Sussex"
    },
    {
      image: "https://images.unsplash.com/photo-1620219365994-f451bdb45a35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Lawn Renovation",
      location: "Lewes, East Sussex"
    },
    {
      image: "https://images.unsplash.com/photo-1533392151650-269f96231f65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Vegetable Garden",
      location: "Rottingdean, East Sussex"
    },
    {
      image: "https://images.unsplash.com/photo-1528092744838-b91de0a10615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Premium Fencing Installation",
      location: "Brighton, East Sussex"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Our Work</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Browse through our portfolio of completed projects to see the quality and craftsmanship we bring to every job.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              image={item.image}
              title={item.title}
              location={item.location}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/contact">
            <Button 
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300 shadow-md"
            >
              Request Your Project
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

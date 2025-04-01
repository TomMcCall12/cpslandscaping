import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <h1 className="text-white font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
          Professional Landscaping in Brighton
        </h1>
        <div className="h-1 w-20 bg-secondary my-6"></div>
        <p className="text-white text-xl md:text-2xl max-w-2xl mb-8">
          Transforming outdoor spaces into beautiful, functional environments for over 15 years.
        </p>
        <Link href="/contact">
          <Button 
            className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300 shadow-lg"
          >
            Get a Free Quote
          </Button>
        </Link>
      </div>
    </section>
  );
}

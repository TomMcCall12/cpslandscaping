import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">About CPS Landscaping</h2>
          <div className="h-1 w-20 bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              CPS Landscaping is a family-owned business based in Brighton, dedicated to creating stunning outdoor spaces that exceed our clients' expectations. With over 15 years of experience, we've built a reputation for quality workmanship and exceptional customer service.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our team of skilled landscapers combines creativity with technical expertise to transform ordinary gardens into extraordinary outdoor sanctuaries. We take pride in our attention to detail and commitment to using sustainable practices and high-quality materials.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're looking for a complete garden redesign, regular maintenance, or installation of specific features like patios or fencing, we work closely with you to understand your vision and bring it to life.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1575404078738-d01611377f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Landscaping team at work" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

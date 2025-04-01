import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  // Form submit handler (will be non-functional for this static site)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Contact Us</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Get in touch with our team to discuss your landscaping needs and schedule a free consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="shadow-md">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-text font-semibold mb-2">Name</label>
                    <Input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" 
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-text font-semibold mb-2">Email</label>
                    <Input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" 
                      placeholder="Your email address"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-text font-semibold mb-2">Phone</label>
                    <Input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" 
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-text font-semibold mb-2">Message</label>
                    <Textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" 
                      placeholder="Tell us about your project"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 shadow-md"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="shadow-md mb-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-primary mt-1 mr-4">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p>123 Garden Lane, Brighton, East Sussex, BN1 1AA</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary mt-1 mr-4">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p>01273 123 456</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary mt-1 mr-4">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p>info@cpslandscaping.co.uk</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary mt-1 mr-4">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Hours</h4>
                      <p>Monday - Friday: 8am - 6pm<br />Saturday: 9am - 4pm<br />Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="rounded-lg overflow-hidden shadow-md h-80 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.6007579683514!2d-0.21836260000000002!3d50.8336866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48759a8fda0b8a4d%3A0x78656b9584fdd330!2sC%20P%20S%20Landscapes!5e1!3m2!1sen!2suk!4v1743508331731!5m2!1sen!2suk" 
                className="w-full h-full border-0" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="CPS Landscapes Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

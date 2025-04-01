import React from 'react';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral">
      <Header />
      <div className="pt-20"> {/* Add padding to prevent content from being hidden under the fixed header */}
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
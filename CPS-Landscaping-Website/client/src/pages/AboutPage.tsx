import React from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral">
      <Header />
      <div className="pt-20"> {/* Add padding to prevent content from being hidden under the fixed header */}
        <About />
      </div>
      <Footer />
    </div>
  );
}
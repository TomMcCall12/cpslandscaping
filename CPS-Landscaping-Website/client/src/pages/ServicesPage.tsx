import React from 'react';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-neutral">
      <Header />
      <div className="pt-20"> {/* Add padding to prevent content from being hidden under the fixed header */}
        <Services />
      </div>
      <Footer />
    </div>
  );
}
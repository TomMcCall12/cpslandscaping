import React from 'react';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-neutral">
      <Header />
      <div className="pt-20"> {/* Add padding to prevent content from being hidden under the fixed header */}
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}
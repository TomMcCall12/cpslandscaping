import React, { useState, useEffect } from 'react';
import { Menu, Leaf } from 'lucide-react';
import { Link, useLocation } from 'wouter';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu after navigation
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Determine if the current link is active
  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className={`fixed w-full bg-white/95 z-50 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <div className="flex items-center p-2 bg-gradient-to-r from-primary/90 to-green-600 rounded-lg shadow-sm mr-3">
                  <Leaf className="h-7 w-7 text-white" />
                </div>
                <div>
                  <span className="text-primary font-heading text-3xl font-bold tracking-wide bg-gradient-to-r from-primary to-green-700 bg-clip-text text-transparent">
                    CPS <span className="text-primary text-2xl">Landscaping</span>
                  </span>
                </div>
              </a>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-text focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <a className={`${isActive('/') ? 'text-primary font-medium' : 'text-text'} hover:text-primary transition-colors`}>Home</a>
            </Link>
            <Link href="/about">
              <a className={`${isActive('/about') ? 'text-primary font-medium' : 'text-text'} hover:text-primary transition-colors`}>About</a>
            </Link>
            <Link href="/services">
              <a className={`${isActive('/services') ? 'text-primary font-medium' : 'text-text'} hover:text-primary transition-colors`}>Services</a>
            </Link>
            <Link href="/gallery">
              <a className={`${isActive('/gallery') ? 'text-primary font-medium' : 'text-text'} hover:text-primary transition-colors`}>Gallery</a>
            </Link>
            <Link href="/contact">
              <a className={`${isActive('/contact') ? 'text-primary font-medium' : 'text-text'} hover:text-primary transition-colors`}>Contact</a>
            </Link>
          </nav>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white px-4 py-2 shadow-inner ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-3 pb-3">
          <Link href="/">
            <a 
              className={`text-left ${isActive('/') ? 'text-primary font-medium' : 'text-text'} hover:text-primary transition-colors`}
              onClick={closeMobileMenu}
            >
              Home
            </a>
          </Link>
          <Link href="/about">
            <a 
              className={`text-left ${isActive('/about') ? 'text-primary font-medium' : 'text-text'} hover:text-primary transition-colors`}
              onClick={closeMobileMenu}
            >
              About
            </a>
          </Link>
          <Link href="/services">
            <a 
              className={`text-left ${isActive('/services') ? 'text-primary font-medium' : 'text-text'} hover:text-primary transition-colors`}
              onClick={closeMobileMenu}
            >
              Services
            </a>
          </Link>
          <Link href="/gallery">
            <a 
              className={`text-left ${isActive('/gallery') ? 'text-primary font-medium' : 'text-text'} hover:text-primary transition-colors`}
              onClick={closeMobileMenu}
            >
              Gallery
            </a>
          </Link>
          <Link href="/contact">
            <a 
              className={`text-left ${isActive('/contact') ? 'text-primary font-medium' : 'text-text'} hover:text-primary transition-colors`}
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}

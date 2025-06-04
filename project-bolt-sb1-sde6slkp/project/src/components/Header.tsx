import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex flex-row items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img
            src="https://noukha.in/static/media/noukha-long-logo.487144d20514b2920304.png"
            alt="Noukha Logo"
            className="h-8 md:h-10"
          />
        </a>

        {/* Desktop Navigation + Register Button */}
        <div className="hidden md:flex items-center justify-end space-x-8 flex-shrink-0">
          <a href="#about" className="font-medium hover:text-[#179E42] transition-colors">
            About
          </a>
          <a href="#speaker" className="font-medium hover:text-[#179E42] transition-colors">
            Speaker
          </a>
          <a href="#gallery" className="font-medium hover:text-[#179E42] transition-colors">
            Gallery
          </a>

          <a
            href="#register"
            className="font-medium text-white bg-[#179E42] px-4 py-2 rounded-md hover:bg-[#0f7a31] transition-colors"
          >
            Register Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#about"
              className="font-medium py-2 hover:text-[#179E42] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#speaker"
              className="font-medium py-2 hover:text-[#179E42] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Speaker
            </a>
            <a
              href="#gallery"
              className="font-medium py-2 hover:text-[#179E42] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </a>
            <a
              href="#register"
              className="font-medium py-2 text-white bg-[#179E42] px-4 rounded-md hover:bg-[#0f7a31] transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

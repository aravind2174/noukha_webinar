import React, { useState, useEffect } from 'react';
import { Menu, X, BrainCircuit } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-secondary-900 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BrainCircuit className="h-8 w-8 text-primary-500" />
            <span className="text-xl font-bold text-white">TechAI Summit</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {['About', 'Speakers', 'Agenda', 'Register', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-primary-400 transition-colors font-medium"
              >
                {item}
              </a>
            ))}
            <a
              href="#register"
              className="ml-4 bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors font-medium"
            >
              Register Now
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 animate-fade-in">
            <nav className="flex flex-col space-y-4 pb-4 border-t border-white/10 pt-4">
              {['About', 'Speakers', 'Agenda', 'Register', 'FAQ'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-primary-400 transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
              <a
                href="#register"
                className="mt-2 bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors font-medium"
              >
                Register Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

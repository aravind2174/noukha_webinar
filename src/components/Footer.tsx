import React from 'react';
import { Mail, PhoneCall } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <img
              src="https://noukha.in/static/media/logo.78884cb809355cdfb5dc.png"
              alt="Noukha Logo"
              className="h-8 md:h-10"
            />
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <a href="#about" className="hover:text-[#179E42] transition-colors">About</a>
            <a href="#speaker" className="hover:text-[#179E42] transition-colors">Speaker</a>
            <a href="#gallery" className="hover:text-[#179E42] transition-colors">Gallery</a>
            <a href="#register" className="hover:text-[#179E42] transition-colors">Register</a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <a href="hello@noukha.in" className="flex items-center hover:text-[#179E42] transition-colors">
              <Mail className="h-5 w-5 mr-2" />
              <span>hello@noukha.in</span>
            </a>
            <a href="tel:+91 9025078520" className="flex items-center hover:text-[#179E42] transition-colors">
              <PhoneCall className="h-5 w-5 mr-2" />
              <span>+91 9025078520</span>
            </a>
          </div>
          
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} noukhatechnologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { ArrowRight, Cpu, Database, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 z-10">
            <div className="inline-block bg-black/10 px-4 py-1 rounded-full mb-4">
              <span className="text-sm font-medium text-[#179E42]">Live Webinar • June 15, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">AI & Startups:</span>
              <span className="text-[#179E42] block">
                Learn, Build, Stand Out
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Discover how students can leverage AI to build impressive projects, 
              launch startups, and distinguish themselves in the tech industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#register" 
                className="inline-flex items-center justify-center bg-[#179E42] text-white px-8 py-3 rounded-md font-medium hover:bg-[#0f7a31] transition-all transform hover:-translate-y-1 shadow-lg"
              >
                Register Now <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#about" 
                className="inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-all transform hover:-translate-y-1 shadow-lg"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 z-10 relative">
            <div className="relative w-full h-80 md:h-96 bg-gradient-to-br from-[#179E42]/20 to-[#179E42]/5 rounded-2xl flex items-center justify-center">
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-black rounded-lg flex items-center justify-center animate-float-slow">
                <Cpu className="text-white w-10 h-10" />
              </div>
              <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-[#179E42] rounded-lg flex items-center justify-center animate-float">
                <Database className="text-white w-8 h-8" />
              </div>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-black/80 rounded-full flex items-center justify-center animate-pulse">
                <Code className="text-white w-12 h-12" />
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <h3 className="font-bold text-xl mb-2">Why Attend?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#179E42]/20 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-[#179E42] text-sm">✓</span>
                    </div>
                    <span>Learn cutting-edge AI techniques</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#179E42]/20 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-[#179E42] text-sm">✓</span>
                    </div>
                    <span>Build impressive portfolio projects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#179E42]/20 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-[#179E42] text-sm">✓</span>
                    </div>
                    <span>Stand out in competitive markets</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Bar */}
      <div className="mt-16 bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-white">3+ Hours</p>
              <p className="text-[#179E42] mt-2">Of Actionable Content</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white">10+ Projects</p>
              <p className="text-[#179E42] mt-2">Showcased & Explained</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white">Live Q&A</p>
              <p className="text-[#179E42] mt-2">Interactive Session</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
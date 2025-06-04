import React from 'react';
import { BrainCircuit, Lightbulb, Rocket, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About The Webinar</h2>
          <p className="text-lg text-gray-700">
            Join us for an inspiring and educational webinar that bridges the gap between AI technology and entrepreneurial opportunity. 
            Perfect for students looking to elevate their skills and stand out in today's competitive tech landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-[#179E42]/10 rounded-lg flex items-center justify-center mb-6">
              <BrainCircuit className="w-8 h-8 text-[#179E42]" />
            </div>
            <h3 className="text-xl font-bold mb-3">AI Fundamentals</h3>
            <p className="text-gray-600">
              Learn core AI concepts, tools, and frameworks that are driving innovation in the startup ecosystem.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-[#179E42]/10 rounded-lg flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-[#179E42]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Project Ideas</h3>
            <p className="text-gray-600">
              Discover exciting AI project ideas that can help build your portfolio and attract attention from employers.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-[#179E42]/10 rounded-lg flex items-center justify-center mb-6">
              <Rocket className="w-8 h-8 text-[#179E42]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Startup Strategy</h3>
            <p className="text-gray-600">
              Learn how to transform your AI projects into viable startup ventures with practical business strategies.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-[#179E42]/10 rounded-lg flex items-center justify-center mb-6">
              <Trophy className="w-8 h-8 text-[#179E42]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Stand Out</h3>
            <p className="text-gray-600">
              Techniques to differentiate yourself in the job market and startup scene using your AI expertise.
            </p>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 bg-black rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What You'll Take Away</h2>
            <p className="text-gray-300 mb-6">
              This isn't just theory – you'll leave with actionable insights, project templates, and resources to start 
              building your own AI projects immediately after the webinar.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-300">
                <div className="h-6 w-6 rounded-full bg-[#179E42] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Access to starter code and project templates</span>
              </li>
              <li className="flex items-start text-gray-300">
                <div className="h-6 w-6 rounded-full bg-[#179E42] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Curated list of AI resources for continued learning</span>
              </li>
              <li className="flex items-start text-gray-300">
                <div className="h-6 w-6 rounded-full bg-[#179E42] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Framework for turning projects into startup ideas</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-gradient-to-br from-[#179E42] to-[#0d5e27] p-1 rounded-xl">
              <div className="bg-black p-6 rounded-lg text-center">
                <p className="text-[#179E42] font-medium mb-2">Date & Time</p>
                <p className="text-white text-2xl font-bold mb-4">June 15, 2025</p>
                <p className="text-[#179E42] font-medium mb-2">Duration</p>
                <p className="text-white text-2xl font-bold">3 Hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
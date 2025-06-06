import React from 'react';
import { Cpu, Tool, Lightbulb, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About The Webinar</h2>
          <p className="text-lg text-gray-700">
            Learn how to go from idea to execution — build real AI tools, explore startup-grade tech stacks, and showcase projects that grab the attention of recruiters, founders, and investors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-[#179E42]/10 rounded-lg flex items-center justify-center mb-6">
              <Cpu className="w-8 h-8 text-[#179E42]" />
            </div>
            <h3 className="text-xl font-bold mb-3">AI Project Lifecycle</h3>
            <p className="text-gray-600">
              From idea to deployment, learn the step-by-step process of building AI-powered apps and tools.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-[#179E42]/10 rounded-lg flex items-center justify-center mb-6">
              <Tool className="w-8 h-8 text-[#179E42]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Tools & Tech Stack</h3>
            <p className="text-gray-600">
              Discover beginner-friendly AI tools and how to use them effectively to kickstart your projects.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-[#179E42]/10 rounded-lg flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-[#179E42]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Project Ideas</h3>
            <p className="text-gray-600">
              Real-world mini project ideas perfect for portfolios, internships, and hackathons.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-[#179E42]/10 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-[#179E42]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Showcase & Stand Out</h3>
            <p className="text-gray-600">
              Learn how to document, demo, and showcase your work to recruiters, startups, and investors.
            </p>
          </div>
        </div>

        <div className="mt-16 md:mt-24 bg-black rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Live Demo</h2>
            <p className="text-gray-300">
              See how a simple AI project can be built and understand what makes it valuable in today’s job market.
            </p>
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

import React from 'react';
import { Cpu, Wrench, Lightbulb, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About The Webinar</h2>
          <p className="text-lg text-gray-700">
            Explore how AI is transforming the startup world and what students must know to thrive. This webinar blends innovation, real-world strategy, and career insight—perfect for anyone looking to make waves in tech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-[#179E42]/10 rounded-lg flex items-center justify-center mb-6">
              <Cpu className="w-8 h-8 text-[#179E42]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Understanding AI Lifecycle</h3>
            <p className="text-gray-600">
              Learn the step-by-step process to build AI-powered apps, from idea to deployment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-[#179E42]/10 rounded-lg flex items-center justify-center mb-6">
              <Wrench className="w-8 h-8 text-[#179E42]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Tools & Tech Stack</h3>
            <p className="text-gray-600">
              Discover beginner-friendly AI tools and learn to use them effectively.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-[#179E42]/10 rounded-lg flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-[#179E42]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Project Ideas That Work</h3>
            <p className="text-gray-600">
              Get real-world mini project ideas for portfolios, internships, and hackathons.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-[#179E42]/10 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-[#179E42]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Showcase & Stand Out</h3>
            <p className="text-gray-600">
              Learn how to document, demo, and showcase your AI projects to recruiters and startups.
            </p>
          </div>
        </div>

        <div className="mt-16 md:mt-24 bg-black rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What You'll Take Away</h2>
            <p className="text-gray-300 mb-6">
              This webinar isn’t just theory — you’ll gain practical insights, clear strategies, and confidence to start building 
              and showcasing AI projects right away.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-300">
                <div className="h-6 w-6 rounded-full bg-[#179E42] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Understand the full AI project lifecycle — from idea to deployment</span>
              </li>
              <li className="flex items-start text-gray-300">
                <div className="h-6 w-6 rounded-full bg-[#179E42] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Learn about essential AI tools and how to effectively use them</span>
              </li>
              <li className="flex items-start text-gray-300">
                <div className="h-6 w-6 rounded-full bg-[#179E42] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span> Discover how to present your projects to impress recruiters, founders, and investors</span>
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

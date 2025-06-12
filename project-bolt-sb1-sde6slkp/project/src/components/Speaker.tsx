import React from 'react';
import { Linkedin, Globe, Award, Rocket, Users } from 'lucide-react';

const Speaker = () => {
  return (
    <section id="speaker" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Your Speaker</h2>
          <p className="text-lg text-gray-700">
            Learn from an industry expert with extensive experience in AI and startup ecosystems
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-200 rounded-2xl overflow-hidden">
                <img 
                  src="https://media.licdn.com/dms/image/v2/C5603AQFgt_AwglQ4-g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1620322854177?e=1754524800&v=beta&t=Y19kZ4m9yTL1jMLhvwN0iJ2N5zgbAtziz3KHbaO7iiI" 
                  alt="Ramanathan Alagappan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#179E42]/10 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-black/10 rounded-2xl -z-10"></div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold">Ramanathan Alagappan</h3>
                  <p className="text-[#179E42] font-medium">Founder, Noukha Technologies</p>
                </div>
                <div className="flex space-x-3">
                  <a 
                    href="https://linkedin.com/in/ramanathan-alagappan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#179E42] hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="https://noukha.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#179E42] hover:text-white transition-colors"
                    aria-label="Website"
                  >
                    <Globe size={18} />
                  </a>
                </div>
              </div>
              
              <div className="mb-8">
                <p className="text-gray-700 mb-4">
                  Ramanathan Alagappan is a leading voice in digital innovation and entrepreneurship, known for transforming 
                  early ideas into scalable tech ventures. With 12+ years of experience and a background in engineering and strategy, 
                  he has guided numerous students and startups in building future-ready businesses.
                </p>
                <p className="text-gray-700">
                  As the founder of Noukha Technologies, Ramanathan blends product thinking with growth marketing, making him a go-to mentor 
                  for students eager to turn their AI-powered ideas into impactful startups.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Experience</p>
                  <p className="font-bold">12+ Years</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Startups Invested</p>
                  <p className="font-bold">2+</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Students Mentored</p>
                  <p className="font-bold">1000+</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href="#register" 
                  className="w-full sm:w-auto bg-[#179E42] text-white px-8 py-3 rounded-md font-medium hover:bg-[#0f7a31] transition-all text-center"
                >
                  Register Now
                </a>
                <a 
                  href="#gallery" 
                  className="w-full sm:w-auto bg-transparent text-gray-700 border border-gray-300 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-all text-center"
                >
                  View Previous Events
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="container mx-auto px-4 mt-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Speaker Highlights</h3>
          <p className="text-gray-700 text-lg">
            From mentoring students to building AI tools used by real-world businesses, here’s why he’s the real deal.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
            <Award className="mx-auto mb-4 text-[#179E42]" size={32} />
            <h4 className="font-bold text-xl mb-2">Built 25+ Products</h4>
            <p className="text-gray-600">Launched software across industries including healthcare, logistics, education, and F&B.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
            <Users className="mx-auto mb-4 text-[#179E42]" size={32} />
            <h4 className="font-bold text-xl mb-2">Mentored 1000+ Students</h4>
            <p className="text-gray-600">Conducted AI bootcamps, project reviews, and 1-on-1 mentoring across India.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
            <Rocket className="mx-auto mb-4 text-[#179E42]" size={32} />
            <h4 className="font-bold text-xl mb-2">Founder of Noukha</h4>
            <p className="text-gray-600">Driving AI-powered custom software for ambitious startups and traditional businesses alike.</p>
          </div>
        </div>
      </div>

      {/* Agenda Section */}
      <div className="container mx-auto px-4 mt-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Program Agenda (3 Hours)</h3>
          <p className="text-gray-700 text-lg">
            A tightly packed session designed to help students take their AI project from idea to impact.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h4 className="text-xl font-semibold mb-2 text-[#179E42]">Part 1: Idea to Prototype</h4>
            <p className="text-gray-700">Learn how to identify real-world AI use cases and build quick working prototypes with no fluff.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h4 className="text-xl font-semibold mb-2 text-[#179E42]">Part 2: Tools & Tech</h4>
            <p className="text-gray-700">Explore the beginner-friendly tech stacks used in startups to ship AI products fast.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h4 className="text-xl font-semibold mb-2 text-[#179E42]">Part 3: From Student to Startup</h4>
            <p className="text-gray-700">How to package your project, pitch it, and get attention from recruiters and founders.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaker;

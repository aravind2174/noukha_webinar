import React, { useState } from 'react';
import { Linkedin, Globe, TrendingUp, ChevronDown } from 'lucide-react';
import clsx from 'clsx';

const roadmap = [
  {
    title: 'Early Career',
    description: 'Started as a software engineer and worked across top-tier firms building scalable tech platforms.',
    logo: 'https://res.cloudinary.com/dhn6uszk0/image/upload/v1749726516/wipro-removebg-preview_dvnuhx.png'
  },
  {
    title: 'PayPal Experience',
    description: 'Served as a Senior Consultant at PayPal, contributing to global product optimization and systems architecture.',
    logo: 'https://res.cloudinary.com/dhn6uszk0/image/upload/v1749720803/paypla-removebg-preview_xdhoum.png'
  },
  {
    title: 'Startup Investments',
    description: 'Invested in 2+ early-stage startups in Tamil Nadu, focusing on tech-enabled growth and long-term scale.',
    logo: null,
    icon: <TrendingUp key="icon" size={48} color="#179E42" />
  },
  {
    title: 'Cookr CTO',
    description: 'Led product strategy and engineering as CTO at Cookr, building scalable food-tech systems from scratch.',
    logo: 'https://res.cloudinary.com/dhn6uszk0/image/upload/v1749720803/cookr-removebg-preview_vvvuis.png'
  },
  {
    title: 'Noukha Founder',
    description: 'Founded Noukha Technologies to help startups scale with custom software, AI, and full-stack innovation.',
    logo: 'https://res.cloudinary.com/dhn6uszk0/image/upload/v1749721036/noukha_logo_pzv1pn.png'
  }
];

const Speaker = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="speaker" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">

        {/* Speaker Info */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Your Speaker</h2>
          <p className="text-lg text-gray-700">
            Learn from an industry expert with extensive experience in AI and startup ecosystems.
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

              <p className="text-gray-700 mb-4">
                Ramanathan is a digital innovator with 12+ years of experience in product development, startup strategy, and AI implementation. He’s mentored 1000+ students and worked with leading firms and emerging startups alike.
              </p>

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

        {/* Replacing Achievements with Career Roadmap */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-10">Career Roadmap</h3>
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-2 bg-[#179E42]/30 rounded-full z-0"></div>
            <div className="space-y-16 relative z-10">
              {roadmap.map((item, index) => {
                const isLeft = index % 2 === 0;
                const isOpen = openIndex === index;
                return (
                  <div key={index} className={clsx('flex flex-col md:flex-row items-center md:items-start gap-4 relative', isLeft ? 'md:flex-row-reverse' : '')}>
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                      <div
                        className="cursor-pointer bg-white p-4 rounded-xl border shadow hover:shadow-lg transition"
                        onClick={() => toggleIndex(index)}
                      >
                        <div className="flex items-center gap-4">
                          {item.logo ? (
                            <img src={item.logo} alt={item.title} className="w-14 h-14 object-contain" />
                          ) : (
                            item.icon
                          )}
                          <h4 className="text-lg font-semibold">{item.title}</h4>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 hidden md:block">
                      <div className="w-5 h-5 bg-[#179E42] rounded-full absolute top-4 left-1/2 transform -translate-x-1/2 z-20"></div>
                    </div>
                    {isOpen && (
                      <div className="mt-4 w-full md:w-1/2 mx-auto text-gray-600 text-sm bg-gray-50 p-4 rounded-md shadow-inner transition-all duration-300 ease-in-out">
                        {item.description}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Agenda Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-10">Agenda</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Part 1: Learn the Foundation',
                points: [
                  'Understanding the AI Project Lifecycle',
                  'Tools & Tech Stack to Get Started',
                  'Interactive Q&A'
                ]
              },
              {
                title: 'Part 2: Get Inspired with Ideas',
                points: [
                  'Project Ideas That Actually Work',
                  'Project Ideas That Actually Work',
                ]
              },
              {
                title: 'Part 3: Watch and Learn',
                points: [
                  'Building an AI Project in Real-Time',
                  'How to Pitch What You Build',
                  'Final Q&A + Takeaway Resource Pack'
                ]
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
                <h4 className="text-[#179E42] font-semibold text-xl mb-3">{item.title}</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaker;

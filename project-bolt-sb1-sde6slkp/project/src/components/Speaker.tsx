import React, { useState } from 'react';
import { Linkedin, Globe, TrendingUp, ChevronDown, Briefcase, GraduationCap } from 'lucide-react';

const clsx = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(' ');

const roadmap = [
  {
    title: 'Early Career Foundation',
    company: 'Software Engineer',
    period: '2012-2015',
    description: 'Started as a software engineer, building foundational skills in scalable tech platforms and system architecture.',
    logo: 'https://res.cloudinary.com/dhn6uszk0/image/upload/v1749726516/wipro-removebg-preview_dvnuhx.png',
  },
  {
    title: 'Global Experience',
    company: 'PayPal',
    period: '2015-2018',
    description: 'Served as Senior Consultant at PayPal, contributing to global product optimization and payment systems architecture.',
    logo: 'https://res.cloudinary.com/dhn6uszk0/image/upload/v1749720803/paypla-removebg-preview_xdhoum.png',
  },
  {
    title: 'Startup Leadership',
    company: 'Cookr (CTO)',
    period: '2018-2021',
    description: 'Led product strategy and engineering as CTO at Cookr, building scalable food-tech systems from ground up.',
    logo: 'https://res.cloudinary.com/dhn6uszk0/image/upload/v1749720803/cookr-removebg-preview_vvvuis.png',
  },
  {
    title: 'Investment & Mentoring',
    company: 'Angel Investor',
    period: '2021-2023',
    description: 'Invested in 2+ early-stage startups in Tamil Nadu, focusing on tech-enabled growth and long-term scale.',
    logo: null,
    icon: <TrendingUp size={32} color="#179E42" />,
  },
  {
    title: 'Entrepreneurship',
    company: 'Noukha Technologies',
    period: '2024-Present',
    description: 'Founded Noukha Technologies to help startups scale with custom software, AI, and full-stack innovation.',
    logo: 'https://res.cloudinary.com/dhn6uszk0/image/upload/v1749721036/noukha_logo_pzv1pn.png',
  }
];

const Speaker = () => {
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

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
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
                Ramanathan Alagappan is a leading voice in digital innovation and entrepreneurship, known for transforming early ideas into scalable tech ventures. With 12+ years of experience and a background in engineering and strategy, he has guided numerous students and startups in building future-ready businesses. As the founder of Noukha Technologies, he blends product thinking with growth marketing—making him a go-to mentor for students eager to turn AI-powered ideas into impactful startups.
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

        {/* Career Roadmap Section (S shape, dotted line, logos only) */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Career Roadmap</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A decade-long journey from software engineer to successful entrepreneur and mentor
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto px-4">
            <svg className="absolute left-0 top-16 w-full h-[400px] z-0" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 100 50 H 550 V 200 H 1000"
                stroke="#179E42"
                strokeWidth="4"
                strokeDasharray="8 12"
              />
              <path
                d="M 1000 200 V 350 H 550 V 350 H 100"
                stroke="#179E42"
                strokeWidth="4"
                strokeDasharray="8 12"
              />
            </svg>

            <div className="relative z-10 grid grid-cols-5 gap-4 mt-4">
              {roadmap.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={clsx(
                    "w-16 h-16 rounded-full bg-white border-4 border-[#179E42] shadow-md flex items-center justify-center",
                    index % 2 === 0 ? "mb-8" : "mt-32"
                  )}>
                    {item.logo ? (
                      <img src={item.logo} alt={item.company} className="w-10 h-10 object-contain" />
                    ) : (
                      item.icon
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Agenda Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-10">Workshop Agenda</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Part 1: Learn the Foundation',
                icon: <GraduationCap className="w-8 h-8" />,
                points: [
                  'Understanding the AI Project Lifecycle',
                  'Tools & Tech Stack to Get Started',
                  'Interactive Q&A'
                ]
              },
              {
                title: 'Part 2: Get Inspired with Ideas',
                icon: <Briefcase className="w-8 h-8" />,
                points: [
                  'Project Ideas That Actually Work',
                  'Real-World Use Cases'
                ]
              },
              {
                title: 'Part 3: Watch and Learn',
                icon: <TrendingUp className="w-8 h-8" />,
                points: [
                  'Building an AI Project in Real-Time',
                  'How to Pitch What You Build',
                  'Final Q&A + Takeaway Resource Pack'
                ]
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition group">
                <div className="w-14 h-14 bg-[#179E42]/10 rounded-lg flex items-center justify-center mb-4 text-[#179E42] group-hover:bg-[#179E42] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
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

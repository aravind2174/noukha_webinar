import React, { useState, useEffect } from 'react';
import { Linkedin, Globe, TrendingUp, ChevronDown, Briefcase, GraduationCap, User, Award, Building, Rocket, Star } from 'lucide-react';

const roadmapData = [
  {
    year: '2012',
    title: 'Software Engineer',
    company: 'Tech Foundation',
    description: 'Started career as a software engineer, building foundational skills in scalable tech platforms.',
    icon: <User className="w-6 h-6" />,
    color: '#3B82F6',
    position: 'left'
  },
  {
    year: '2015',
    title: 'Senior Consultant',
    company: 'PayPal',
    description: 'Promoted to Senior Consultant at PayPal, contributing to global product optimization.',
    icon: <Award className="w-6 h-6" />,
    color: '#10B981',
    position: 'right'
  },
  {
    year: '2018',
    title: 'Chief Technology Officer',
    company: 'Cookr',
    description: 'Led product strategy and engineering as CTO, building scalable food-tech systems.',
    icon: <Building className="w-6 h-6" />,
    color: '#F59E0B',
    position: 'left'
  },
  {
    year: '2021',
    title: 'Angel Investor',
    company: 'Startup Ecosystem',
    description: 'Invested in 2+ early-stage startups, focusing on tech-enabled growth and mentoring.',
    icon: <TrendingUp className="w-6 h-6" />,
    color: '#EF4444',
    position: 'right'
  },
  {
    year: '2024',
    title: 'Founder & CEO',
    company: 'Noukha Technologies',
    description: 'Founded Noukha Technologies to help startups scale with custom software and AI innovation.',
    icon: <Rocket className="w-6 h-6" />,
    color: '#179E42',
    position: 'left'
  }
];

const Speaker = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.roadmap-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
                Ramanathan Alagappan is a leading voice in digital innovation and entrepreneurship, known for transforming early ideas into scalable tech ventures. With 12+ years of experience and a background in engineering and strategy, he has guided numerous students and startups in building future-ready businesses.
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

        {/* Enhanced Professional Roadmap */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Professional Roadmap</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A transformative journey from software engineer to successful entrepreneur, investor, and mentor - 
              spanning over a decade of innovation and leadership in the tech industry.
            </p>
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Enhanced S-Curve Background */}
            <div className="hidden lg:block absolute inset-0 z-0">
              <svg className="w-full h-full" viewBox="0 0 1400 1000" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="roadmapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#179E42" stopOpacity="0.8" />
                    <stop offset="25%" stopColor="#3B82F6" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.6" />
                    <stop offset="75%" stopColor="#EF4444" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#179E42" stopOpacity="0.8" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Main S-curve path */}
                <path
                  d="M 120 180 Q 280 80, 420 180 T 700 180 Q 860 280, 700 380 T 420 380 Q 280 480, 420 580 T 700 580 Q 860 680, 700 780"
                  fill="none"
                  stroke="url(#roadmapGradient)"
                  strokeWidth="6"
                  strokeDasharray="12 8"
                  filter="url(#glow)"
                  className="animate-pulse"
                />
                
                {/* Decorative dots along the path */}
                <circle cx="120" cy="180" r="8" fill="#3B82F6" opacity="0.7" className="animate-pulse" />
                <circle cx="420" cy="180" r="8" fill="#10B981" opacity="0.7" className="animate-pulse" style={{animationDelay: '0.5s'}} />
                <circle cx="700" cy="380" r="8" fill="#F59E0B" opacity="0.7" className="animate-pulse" style={{animationDelay: '1s'}} />
                <circle cx="420" cy="580" r="8" fill="#EF4444" opacity="0.7" className="animate-pulse" style={{animationDelay: '1.5s'}} />
                <circle cx="700" cy="780" r="8" fill="#179E42" opacity="0.7" className="animate-pulse" style={{animationDelay: '2s'}} />
              </svg>
            </div>

            {/* Roadmap Items */}
            <div className="relative z-10 space-y-20 lg:space-y-32">
              {roadmapData.map((item, index) => (
                <div
                  key={index}
                  data-index={index}
                  className={`roadmap-item flex flex-col lg:flex-row items-center gap-8 ${
                    item.position === 'right' ? 'lg:flex-row-reverse' : ''
                  } ${
                    visibleItems.includes(index) 
                      ? item.position === 'left' 
                        ? 'animate-slideInLeft' 
                        : 'animate-slideInRight'
                      : 'opacity-0'
                  }`}
                >
                  {/* Content Card */}
                  <div className="lg:w-2/5">
                    <div 
                      className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border-l-4 transform hover:-translate-y-3 hover:scale-105 animate-pulse-glow"
                      style={{ borderLeftColor: item.color }}
                    >
                      {/* Year Badge */}
                      <div 
                        className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.year}
                      </div>
                      
                      {/* Icon and Title */}
                      <div className="flex items-center mb-6">
                        <div 
                          className="w-16 h-16 rounded-xl flex items-center justify-center mr-4 text-white shadow-md"
                          style={{ backgroundColor: item.color }}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                          <p className="font-semibold" style={{ color: item.color }}>{item.company}</p>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed text-lg">{item.description}</p>
                      
                      {/* Decorative elements */}
                      <div className="absolute bottom-4 right-4 opacity-10">
                        <Star className="w-8 h-8" style={{ color: item.color }} />
                      </div>
                    </div>
                  </div>

                  {/* Central Timeline Connector */}
                  <div className="lg:w-1/5 flex justify-center">
                    <div className="relative">
                      {/* Main timeline dot */}
                      <div 
                        className="w-8 h-8 rounded-full border-4 border-white shadow-xl z-10 relative animate-pulse-glow"
                        style={{ backgroundColor: item.color }}
                      >
                        <div 
                          className="absolute inset-0 rounded-full animate-ping opacity-30"
                          style={{ backgroundColor: item.color }}
                        ></div>
                      </div>
                      
                      {/* Connecting line for mobile */}
                      {index < roadmapData.length - 1 && (
                        <div 
                          className="lg:hidden absolute top-8 left-1/2 transform -translate-x-1/2 w-1 h-20 opacity-50"
                          style={{ backgroundColor: item.color }}
                        ></div>
                      )}
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="lg:w-2/5 hidden lg:block"></div>
                </div>
              ))}
            </div>

            {/* Achievement Highlights */}
            <div className="mt-20 bg-gradient-to-r from-[#179E42]/10 via-white to-[#179E42]/10 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Key Achievements</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#179E42] mb-2">12+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#179E42] mb-2">1000+</div>
                    <div className="text-gray-600">Students Mentored</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#179E42] mb-2">2+</div>
                    <div className="text-gray-600">Startup Investments</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#179E42] mb-2">50+</div>
                    <div className="text-gray-600">Workshops Conducted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workshop Agenda */}
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
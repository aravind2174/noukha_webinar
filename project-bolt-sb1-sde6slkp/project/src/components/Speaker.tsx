import React, { useEffect, useState } from 'react';
import { Linkedin, Globe } from 'lucide-react';
import './scroll.css'; // 👈 we'll create this file next

const earlyCareerLogos = [
  'https://res.cloudinary.com/dhn6uszk0/image/upload/v1749726516/wipro-removebg-preview_dvnuhx.png',
  'https://res.cloudinary.com/dhn6uszk0/image/upload/v1749726516/thermo_fisher_mg5ltc.png',
  'https://res.cloudinary.com/dhn6uszk0/image/upload/v1749726516/logo_u_next-removebg-preview_y4oa3z.png'
];

const slides = [
  {
    title: 'Early Career',
    description: 'Started as a software engineer and worked across top-tier firms building scalable tech platforms.',
    isAnimated: true,
    logos: earlyCareerLogos
  },
  {
    title: 'PayPal Experience',
    description: 'Served as a Senior Consultant at PayPal, contributing to global product optimization and systems architecture.',
    logos: [
      'https://res.cloudinary.com/dhn6uszk0/image/upload/v1749720803/paypla-removebg-preview_xdhoum.png'
    ]
  },
  {
    title: 'Startup Investments',
    description: 'Invested in 2+ early-stage startups in Tamil Nadu, focusing on tech-enabled growth and long-term scale.',
    logos: [
      'https://res.cloudinary.com/dhn6uszk0/image/upload/v1749726516/growth_lucid_logo_green_hzwrre.png'
    ]
  },
  {
    title: 'Cookr CTO',
    description: 'Led product strategy and engineering as CTO at Cookr, building scalable food-tech systems from scratch.',
    logos: [
      'https://res.cloudinary.com/dhn6uszk0/image/upload/v1749720803/cookr-removebg-preview_vvvuis.png'
    ]
  },
  {
    title: 'Noukha Founder',
    description: 'Founded Noukha Technologies to help startups scale with custom software, AI, and full-stack innovation.',
    logos: [
      'https://res.cloudinary.com/dhn6uszk0/image/upload/v1749721036/noukha_logo_pzv1pn.png'
    ]
  }
];

const Speaker = () => {
  const [currentLogo, setCurrentLogo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % earlyCareerLogos.length);
    }, 1500);
    return () => clearInterval(interval);
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
                  <a href="https://linkedin.com/in/ramanathan-alagappan" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#179E42] hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a href="https://noukha.in/" target="_blank" rel="noopener noreferrer"
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
                <a href="#register" className="w-full sm:w-auto bg-[#179E42] text-white px-8 py-3 rounded-md font-medium hover:bg-[#0f7a31] transition-all text-center">
                  Register Now
                </a>
                <a href="#gallery" className="w-full sm:w-auto bg-transparent text-gray-700 border border-gray-300 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-all text-center">
                  View Previous Events
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-10">Achievements</h3>
          <div className="overflow-hidden w-full">
            <div className="flex gap-6 w-max scroll-slide">
              {Array.from({ length: 4 }).flatMap(() => slides).map((slide, index) => (
                <div key={index} className="min-w-[280px] max-w-[280px] bg-white p-6 rounded-xl shadow-md flex-shrink-0">
                  <div className="mb-4 flex justify-center">
                    {slide.isAnimated ? (
                      <img
                        src={slide.logos[currentLogo]}
                        alt="Animated Logo"
                        className="h-12 w-12 object-contain transition-opacity duration-700"
                      />
                    ) : (
                      <img
                        src={slide.logos[0]}
                        alt={slide.title}
                        className="h-12 w-12 object-contain"
                      />
                    )}
                  </div>
                  <h4 className="text-lg font-semibold text-center mb-2">{slide.title}</h4>
                  <p className="text-sm text-gray-600 text-center">{slide.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Agenda Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-10">Agenda</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Part 1: Kickstart with AI & Tools',
                points: [
                  'Understand the AI project lifecycle',
                  'Explore no-code/low-code tools',
                  'Project types that attract startups'
                ]
              },
              {
                title: 'Part 2: Live Build & Demo',
                points: [
                  'Build a real AI tool live',
                  'Hands-on with OpenAI, Supabase, n8n',
                  'Tips to scale & customize your project'
                ]
              },
              {
                title: 'Part 3: Stand Out & Showcase',
                points: [
                  'Portfolio best practices',
                  'How to get noticed by recruiters',
                  'Live Q&A and resource giveaway'
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

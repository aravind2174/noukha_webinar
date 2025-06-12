import React, { useState, useEffect } from 'react';
import { Linkedin, Globe } from 'lucide-react';

const Speaker = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Early Career',
      description: 'Started as a software engineer and worked across top-tier firms building scalable tech platforms.',
      logos: ['logo1.png', 'logo2.png', 'logo3.png'],
    },
    {
      title: 'PayPal Experience',
      description: 'Served as a Senior Consultant at PayPal, contributing to their global product optimization and systems architecture.',
      logos: ['paypal-logo.png'],
    },
    {
      title: 'Startup Investments',
      description: 'Invested in 2+ early-stage startups in Tamil Nadu, focusing on tech-driven growth and product-market fit.',
      logos: ['growth-lucid-logo.png'],
    },
    {
      title: 'Cookr CTO',
      description: 'Led product development and tech strategy as CTO of Cookr, a food-tech platform redefining home cooking.',
      logos: ['cookr-logo.png'],
    },
    {
      title: 'Noukha Founder',
      description: 'Founded Noukha Technologies — empowering startups with AI-driven solutions, custom software, and scalable SaaS.',
      logos: ['noukha-logo.png'],
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

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
          <div className="relative overflow-hidden w-full max-w-4xl mx-auto">
            <div className="transition-all duration-700" key={currentSlide}>
              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="mb-6 flex justify-center space-x-4 items-center">
                  {currentSlide === 0 ? (
                    <div className="flex items-center justify-center space-x-4">
                      {slides[0].logos.map((logo, i) => (
                        <img key={i} src={logo} alt="Company Logo" className="w-12 h-12 opacity-80 transition-opacity duration-700 animate-pulse" />
                      ))}
                    </div>
                  ) : (
                    <img src={slides[currentSlide].logos[0]} alt="Slide Logo" className="mx-auto h-14" />
                  )}
                </div>
                <h4 className="text-xl font-semibold mb-2">{slides[currentSlide].title}</h4>
                <p className="text-gray-600">{slides[currentSlide].description}</p>
              </div>
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
                  {item.points.map((point, idx) => <li key={idx}>{point}</li>)}
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

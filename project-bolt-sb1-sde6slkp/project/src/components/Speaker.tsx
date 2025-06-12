import React from 'react';
import { Linkedin, Globe } from 'lucide-react';

const Speaker = () => {
  return (
    <>
      {/* Speaker Section */}
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
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      Meet Mr. Ram{' '}
                      <a
                        href="https://linkedin.com/in/ramanathan-alagappan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#179E42]"
                      >
                        <Linkedin size={20} />
                      </a>
                    </h3>
                    <p className="text-[#179E42] font-medium">Founder, Noukha Technologies</p>
                  </div>
                  <div className="flex space-x-3">
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
                  Ramanathan Alagappan is a leading voice in digital innovation and entrepreneurship, known for transforming
                  early ideas into scalable tech ventures. With 12+ years of experience and a background in engineering and strategy,
                  he has guided numerous students and startups in building future-ready businesses.
                </p>
                <p className="text-gray-700">
                  As the founder of Noukha Technologies, Ramanathan blends product thinking with growth marketing, making him a go-to mentor
                  for students eager to turn their AI-powered ideas into impactful startups.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 mb-6">
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
      </section>

      {/* Achievements Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-10">Professional Achievements</h3>

          <div className="overflow-x-auto">
            <div className="flex space-x-6 animate-scroll">
              {[
                {
                  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png',
                  text: 'Started as a software engineer and accomplished key milestones across top tech orgs.'
                },
                {
                  logo: 'https://1000logos.net/wp-content/uploads/2021/04/PayPal-logo.png',
                  text: 'Worked as a Senior Consultant at PayPal.'
                },
                {
                  logo: 'https://cdn-icons-png.flaticon.com/512/565/565547.png',
                  text: 'Invested in 2+ startups in Tamil Nadu.'
                },
                {
                  logo: 'https://play-lh.googleusercontent.com/-NqM_YuXZVzg3IcZV2sbqS73n-lZtIkLjRaM1vYKUk2dGzH3j09xE3Ad8JkDj5v-j7A=w240-h480-rw',
                  text: 'Served as CTO at Cookr, a food-tech startup.'
                },
                {
                  logo: 'https://noukha.in/_next/image?url=%2Flogo.png&w=96&q=75',
                  text: 'Founder of Noukha Technologies, building AI-powered platforms.'
                }
              ].map((card, index) => (
                <div key={index} className="bg-white min-w-[280px] max-w-xs p-6 rounded-xl shadow-md flex-shrink-0">
                  <img src={card.logo} alt="Logo" className="w-16 h-16 mx-auto mb-4 object-contain" />
                  <p className="text-gray-700 text-center">{card.text}</p>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              display: flex;
              animation: scroll 30s linear infinite;
              width: max-content;
            }
          `}</style>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-10">Seminar Agenda – 3 Hours of Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-2">Part 1: Ideation & Planning</h4>
              <p className="text-gray-600">How to spot real-world AI problems, build project roadmaps, and form a team.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-2">Part 2: Building AI Projects</h4>
              <p className="text-gray-600">Step-by-step tech stack breakdown, tools to use, and hands-on walkthroughs.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-2">Part 3: Showcasing & Scaling</h4>
              <p className="text-gray-600">How to showcase your work, pitch to startups, and turn projects into products.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Speaker;

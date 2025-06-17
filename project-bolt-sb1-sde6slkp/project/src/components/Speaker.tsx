import React, { useState } from 'react';
import { Lightbulb, Rocket, Users, Trophy } from 'lucide-react';

const careerData = [
  {
    id: 1,
    year: '2014',
    title: 'Strategic Analyst',
    company: 'TechThink',
    description: 'Worked on tech-led transformation strategies for early-stage businesses.',
    icon: <Lightbulb className="w-6 h-6" />,
    position: { x: 10, y: 20 },
  },
  {
    id: 2,
    year: '2017',
    title: 'Startup Mentor',
    company: 'LaunchX',
    description: 'Guided student teams in building AI-powered MVPs for real-world problems.',
    icon: <Users className="w-6 h-6" />,
    position: { x: 30, y: 45 },
  },
  {
    id: 3,
    year: '2020',
    title: 'Founder',
    company: 'Noukha Technologies',
    description: 'Founded a product-first agency helping startups build scalable, growth-ready platforms.',
    icon: <Rocket className="w-6 h-6" />,
    position: { x: 65, y: 30 },
  },
  {
    id: 4,
    year: '2024',
    title: 'Ecosystem Enabler',
    company: 'AI Startup Network',
    description: 'Runs workshops and sessions for students/startups to accelerate GTM for AI-powered SaaS products.',
    icon: <Trophy className="w-6 h-6" />,
    position: { x: 90, y: 55 },
  },
];

const createSmoothCurvedPath = () => {
  if (careerData.length === 0) return '';
  let path = `M ${careerData[0].position.x} ${careerData[0].position.y}`;
  for (let i = 1; i < careerData.length; i++) {
    const prev = careerData[i - 1];
    const curr = careerData[i];
    const dx = curr.position.x - prev.position.x;
    const dy = curr.position.y - prev.position.y;
    const cp1x = prev.position.x + dx * 0.5;
    const cp1y = prev.position.y + dy * 0.2;
    const cp2x = curr.position.x - dx * 0.5;
    const cp2y = curr.position.y - dy * 0.2;
    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.position.x} ${curr.position.y}`;
  }
  return path;
};

const Speaker = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="relative z-10 px-6 md:px-10 py-16 text-gray-900">
      {/* SPEAKER INFO */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Meet Our Speaker</h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
          Ramanathan Alagappan is a leading voice in digital innovation and entrepreneurship, known for transforming early ideas into scalable tech ventures. With 12+ years of experience and a background in engineering and strategy, he has guided numerous students and startups in building future-ready businesses.
          <br className="hidden md:block" /><br />
          As the founder of Noukha Technologies, Ramanathan blends product thinking with growth marketing, making him a go-to mentor for students eager to turn their AI-powered ideas into impactful startups.
        </p>
      </div>

      {/* CAREER ROADMAP */}
      <div className="relative h-[500px] w-full mb-20">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d={createSmoothCurvedPath()}
            stroke="#e5e7eb"
            strokeWidth="0.6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {careerData.map((point) => (
          <div
            key={point.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group text-center"
            style={{ left: `${point.position.x}%`, top: `${point.position.y}%` }}
            onClick={() => setActiveId(activeId === point.id ? null : point.id)}
          >
            <div
              className={`w-16 h-16 rounded-full bg-white border-4 flex items-center justify-center shadow-md transition-all ${
                activeId === point.id ? 'border-green-500 scale-110' : 'border-gray-300'
              }`}
            >
              <div className={`transition-colors ${activeId === point.id ? 'text-green-600' : 'text-gray-700'}`}>
                {point.icon}
              </div>
            </div>
            <div className="mt-2 font-semibold text-sm">{point.year}</div>
            {activeId === point.id && (
              <div className="mt-4 w-72 mx-auto bg-white p-5 rounded-xl border shadow-lg text-left animate-in fade-in duration-200">
                <h3 className="text-lg font-bold">{point.title}</h3>
                <p className="text-green-600 font-medium mb-2">{point.company}</p>
                <p className="text-sm text-gray-700">{point.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* AGENDA SECTION */}
      <div className="bg-gray-50 rounded-3xl p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Webinar Agenda</h2>
        <ul className="space-y-6 max-w-3xl mx-auto text-gray-700 text-lg">
          <li>🚀 Introduction to the AI Project Lifecycle</li>
          <li>🛠️ Tools & Tech Stack for Building Real Projects</li>
          <li>💡 Mini AI Project Ideas with Real-World Relevance</li>
          <li>📣 How to Showcase Projects to Startups & Recruiters</li>
          <li>🧠 Live Demo: Build an AI Project from Scratch</li>
        </ul>
      </div>
    </section>
  );
};

export default Speaker;

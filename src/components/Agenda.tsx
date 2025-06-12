import React, { useState } from 'react';
import { Clock, ChevronDown, ChevronUp, Play } from 'lucide-react';

interface AgendaItem {
  id: number;
  time: string;
  title: string;
  description: string;
  highlights: string[];
}

const agendaItems: AgendaItem[] = [
  {
    id: 1,
    time: '1:00 PM - 2:00 PM',
    title: 'Part 1: Understanding AI Project Lifecycle',
    description: 'Deep dive into the complete journey of building AI projects from conception to deployment.',
    highlights: [
      'Ideation and problem identification in AI',
      'Data collection and preprocessing strategies',
      'Model selection and training approaches',
      'Testing and validation methodologies',
      'Deployment and monitoring best practices'
    ]
  },
  {
    id: 2,
    time: '2:00 PM - 3:00 PM',
    title: 'Part 2: Essential AI Tools & Tech Stack',
    description: 'Explore the most effective tools and technologies for building AI applications.',
    highlights: [
      'Beginner-friendly AI frameworks and libraries',
      'Cloud platforms for AI development',
      'Data visualization and analysis tools',
      'Version control for AI projects',
      'Collaboration tools for team projects'
    ]
  },
  {
    id: 3,
    time: '3:00 PM - 4:00 PM',
    title: 'Part 3: Showcasing & Career Strategy',
    description: 'Learn how to present your AI projects effectively and build a strong professional profile.',
    highlights: [
      'Creating compelling project portfolios',
      'Documentation and presentation techniques',
      'Building your personal brand in AI',
      'Networking strategies in the startup ecosystem',
      'Interview preparation and career guidance'
    ]
  }
];

const Agenda = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Webinar Agenda</h2>
          <p className="text-lg text-gray-700">
            A comprehensive 3-hour program designed to take you from AI basics to career-ready skills
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {agendaItems.map((item) => {
            const isExpanded = expandedItems.includes(item.id);
            return (
              <div 
                key={item.id}
                className={`mb-6 border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'shadow-lg' : 'shadow-md hover:shadow-lg'
                }`}
              >
                <div 
                  className={`flex justify-between items-center p-6 cursor-pointer ${
                    isExpanded ? 'bg-[#179E42]/5' : 'bg-white hover:bg-gray-50'
                  }`}
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="flex-1">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Clock className="h-4 w-4 mr-2 text-[#179E42]" />
                      <span className="font-medium">{item.time}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="ml-6">
                    {isExpanded ? (
                      <ChevronUp className="h-6 w-6 text-[#179E42]" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-gray-100 bg-white">
                    <div className="pt-6">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <Play className="h-4 w-4 mr-2 text-[#179E42]" />
                        Key Topics Covered:
                      </h4>
                      <ul className="space-y-3">
                        {item.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <div className="h-6 w-6 rounded-full bg-[#179E42]/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <span className="text-[#179E42] text-sm">✓</span>
                            </div>
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-black rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your AI Journey?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            This comprehensive 3-hour program will equip you with practical skills, industry insights, 
            and the confidence to build AI projects that stand out in the competitive startup landscape.
          </p>
          <a
            href="#register"
            className="inline-flex items-center justify-center bg-[#179E42] text-white px-8 py-3 rounded-md font-medium hover:bg-[#0f7a31] transition-all transform hover:-translate-y-1 shadow-lg"
          >
            Secure Your Spot Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
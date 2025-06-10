import React, { useState } from 'react';
import { Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface AgendaItem {
  id: number;
  time: string;
  title: string;
  speaker: string;
  description: string;
}

const agendaItems: AgendaItem[] = [
  {
    id: 1,
    time: '2:00 PM - 2:15 PM',
    title: 'Welcome & Introduction',
    speaker: 'Dr. Sarah Chen',
    description: 'Opening remarks and overview of the webinar agenda, introducing key themes and speakers.'
  },
  {
    id: 2,
    time: '2:15 PM - 2:45 PM',
    title: 'The Current State of AI: Breakthroughs and Challenges',
    speaker: 'Michael Rodriguez',
    description: 'An in-depth exploration of recent AI breakthroughs, current limitations, and the most exciting developments on the horizon.'
  },
  {
    id: 3,
    time: '2:45 PM - 3:15 PM',
    title: 'Ethical Considerations in AI Development',
    speaker: 'Aisha Johnson',
    description: 'Addressing critical ethical questions in AI development including bias, transparency, privacy concerns, and establishing responsible guidelines.'
  },
  {
    id: 4,
    time: '3:15 PM - 3:45 PM',
    title: 'Practical Applications: AI in Business Today',
    speaker: 'Panel Discussion',
    description: 'A collaborative discussion on how businesses are implementing AI solutions today, with real-world case studies and implementation strategies.'
  },
  {
    id: 5,
    time: '3:45 PM - 4:00 PM',
    title: 'Q&A Session & Closing Remarks',
    speaker: 'All Speakers',
    description: 'Interactive Q&A with the audience, addressing specific questions about AI technologies, applications, and future developments.'
  }
];

const AgendaSection: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  return (
    <section id="agenda" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Webinar Agenda</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive exploration of AI's current landscape and future possibilities
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {agendaItems.map((item) => {
            const isExpanded = expandedItems.includes(item.id);
            return (
              <div 
                key={item.id}
                className={`mb-4 border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'shadow-md' : 'shadow-sm hover:shadow-md'
                }`}
              >
                <div 
                  className={`flex justify-between items-center p-5 cursor-pointer ${
                    isExpanded ? 'bg-primary-50' : 'bg-white'
                  }`}
                  onClick={() => toggleItem(item.id)}
                >
                  <div>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Clock className="h-4 w-4 mr-2 text-primary-500" />
                      <span>{item.time}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-secondary-900">{item.title}</h3>
                    <p className="text-primary-600 mt-1">{item.speaker}</p>
                  </div>
                  <div>
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-primary-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="p-5 border-t border-gray-200 bg-white animate-fade-in">
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'Is this webinar suitable for beginners in AI?',
    answer: 'Yes, this webinar is designed to be accessible to attendees with varying levels of AI knowledge. While some technical concepts will be discussed, our speakers will provide clear explanations and practical examples that help beginners understand the core concepts.'
  },
  {
    id: 2,
    question: 'Will I receive a recording of the webinar?',
    answer: 'Yes, all registered participants will receive a recording of the webinar within 48 hours after the event. This allows you to review the content at your own pace and share relevant information with your team.'
  },
  {
    id: 3,
    question: 'What technology do I need to join the webinar?',
    answer: 'You will need a computer or mobile device with internet access. The webinar will be hosted on Zoom, which works on most modern browsers. For the best experience, we recommend downloading the Zoom application. Detailed instructions will be sent in your confirmation email.'
  },
  {
    id: 4,
    question: 'Will there be opportunities to ask questions?',
    answer: 'Absolutely! We have dedicated time for Q&A at the end of the webinar. You can submit questions throughout the presentation using the chat function, and our speakers will address as many as possible during the Q&A session.'
  },
  {
    id: 5,
    question: 'How can I prepare for this webinar?',
    answer: 'No specific preparation is required. However, to get the most out of the session, we recommend thinking about your specific AI challenges or interests beforehand. You might also want to prepare questions relevant to your industry or use case.'
  },
  {
    id: 6,
    question: 'Will the webinar content be available for later reference?',
    answer: 'Yes, in addition to the recording, registered participants will receive access to the presentation slides and supplementary resources mentioned during the webinar. These materials will be shared via email after the event.'
  }
];

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our AI webinar
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => {
            const isOpen = openItems.includes(faq.id);
            return (
              <div 
                key={faq.id}
                className="mb-4 border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div 
                  className={`flex justify-between items-center p-5 cursor-pointer ${
                    isOpen ? 'bg-primary-50' : 'bg-white'
                  }`}
                  onClick={() => toggleItem(faq.id)}
                >
                  <h3 className="text-lg font-semibold text-secondary-900">{faq.question}</h3>
                  <div>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-primary-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
                
                {isOpen && (
                  <div className="p-5 border-t border-gray-200 bg-white animate-fade-in">
                    <p className="text-gray-700">{faq.answer}</p>
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

export default FAQSection;
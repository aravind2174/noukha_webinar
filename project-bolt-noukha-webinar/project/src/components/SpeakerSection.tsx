import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const SpeakerSection: React.FC = () => {
  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Meet Your Expert Speaker</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn from an industry leader who is shaping the future of AI technology
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in">
            <div className="relative h-80 overflow-hidden bg-gray-100">
              <img 
                src="https://media.licdn.com/dms/image/v2/C5603AQFgt_AwglQ4-g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1620322854177?e=1754524800&v=beta&t=Y19kZ4m9yTL1jMLhvwN0iJ2N5zgbAtziz3KHbaO7iiI" 
                alt="Dr. Sarah Chen"
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-secondary-900 mb-2">Ramanathan Alagappan</h3>
              <div className="text-primary-500 font-medium mb-3">Founder of Noukha Technologies</div>
              <p className="text-gray-700 mb-6 text-lg">
                Ramanathan Alagappan, also known as Ram, is the founder of Noukha Technologies, a tech company started in 2024. Ram also loves to teach. He shares his knowledge with students and young professionals through events like TechFusionX, where he gives workshops and helps future engineers learn by doing.
Join this webinar to learn from Ram’s real experience and simple ideas that can help you use technology to grow your business.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 rounded-xl p-8">
            <h4 className="text-xl font-semibold text-secondary-900 mb-4">What You'll Learn</h4>
            <ul className="space-y-4">
              {[
                'Understanding the latest breakthroughs in AI technology',
                'Practical strategies for implementing AI in your business',
                'Future trends and opportunities in artificial intelligence',
                'Real-world case studies and success stories',
                'Best practices for responsible AI adoption'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-500 mr-3">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;

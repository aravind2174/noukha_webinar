import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Alex Thompson',
    position: 'CTO',
    company: 'InnovateTech',
    content: 'This webinar provided invaluable insights that transformed our approach to AI implementation. The practical strategies shared were immediately applicable to our business operations.',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'Sophia Lee',
    position: 'AI Research Lead',
    company: 'DataMatrix',
    content: 'The speakers delivered complex AI concepts in a clear, accessible way. I left with a deeper understanding of emerging technologies and concrete ideas for our development roadmap.',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    name: 'Marcus Johnson',
    position: 'Product Manager',
    company: 'FutureWorks',
    content: 'Attending this webinar was one of the best professional development decisions I made last year. The Q&A session addressed specific challenges we were facing in our AI integration.',
    rating: 4,
    imageUrl: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-secondary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Previous Attendees Say</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join hundreds of professionals who have already benefited from our expert-led webinars
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-800/50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm animate-fade-in"
            >
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <img 
                    src={testimonial.imageUrl} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary-500"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={16} 
                    className={`${
                      i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
                    } mr-1`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-300">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
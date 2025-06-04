import React, { useState } from 'react';
import { Send, Calendar, Clock, CheckCircle } from 'lucide-react';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    expectation: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would submit this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <section id="register" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch shadow-xl rounded-xl overflow-hidden">
            <div className="lg:w-1/2 bg-[#179E42] p-8 md:p-12 text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Register Now</h2>
              <p className="text-white/90 text-lg mb-8">
                Secure your spot for this exclusive webinar and take the first step toward leveraging AI for your future in tech and entrepreneurship.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Calendar className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl">June 15, 2025</h3>
                    <p className="text-white/80">Mark your calendar</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl">10:00 AM - 1:00 PM (EST)</h3>
                    <p className="text-white/80">3 hours of valuable content</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-4">What You'll Need</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>A computer with internet connection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Basic understanding of programming (optional)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Curiosity and enthusiasm for AI and startups</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:w-1/2 bg-white p-8 md:p-12">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#179E42] focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#179E42] focus:border-transparent"
                      placeholder="Your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="university" className="block text-gray-700 font-medium mb-2">University/Institution</label>
                    <input
                      type="text"
                      id="university"
                      name="university"
                      value={formData.university}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#179E42] focus:border-transparent"
                      placeholder="Your university or institution"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="expectation" className="block text-gray-700 font-medium mb-2">What do you hope to learn?</label>
                    <textarea
                      id="expectation"
                      name="expectation"
                      value={formData.expectation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#179E42] focus:border-transparent h-32 resize-none"
                      placeholder="I'm interested in learning about..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#179E42] text-white px-6 py-3 rounded-md font-medium hover:bg-[#0f7a31] transition-colors flex items-center justify-center"
                  >
                    Register for Webinar <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-20 h-20 bg-[#179E42]/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-12 h-12 text-[#179E42]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Registration Successful!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for registering for the AI & Startups webinar. We've sent a confirmation email to <span className="font-semibold">{formData.email}</span>.
                  </p>
                  <p className="text-gray-600">
                    You'll receive the webinar link and additional details closer to the event date.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
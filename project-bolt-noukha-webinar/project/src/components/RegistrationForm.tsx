import React, { useState } from 'react';
import { CheckCircle, Calendar, Clock, MapPin } from 'lucide-react';

interface RegistrationFormProps {
  webinarDate: Date;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ webinarDate }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const formattedDate = webinarDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  const formattedTime = '2:00 PM - 4:00 PM EST';

  return (
    <section id="register" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Reserve Your Spot
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join us for this exclusive webinar and be at the forefront of AI innovation. 
                Spaces are limited, so register today to secure your place.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-secondary-900">Webinar Details</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 mr-3 text-primary-500 mt-0.5" />
                    <div>
                      <span className="font-medium text-gray-700">Date:</span>
                      <p className="text-gray-600">{formattedDate}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 mr-3 text-primary-500 mt-0.5" />
                    <div>
                      <span className="font-medium text-gray-700">Time:</span>
                      <p className="text-gray-600">{formattedTime}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-primary-500 mt-0.5" />
                    <div>
                      <span className="font-medium text-gray-700">Location:</span>
                      <p className="text-gray-600">Online (Zoom link will be emailed after registration)</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-secondary-900">What You'll Get</h3>
                <ul className="space-y-3">
                  {[
                    'Live access to expert presentations and Q&A sessions',
                    'Exclusive webinar materials and resources',
                    'Recording of the webinar for future reference',
                    'Certificate of participation',
                    'Opportunity to network with industry professionals'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-6">Register Now</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                        Job Title
                      </label>
                      <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                      />
                    </div>
                    
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-md font-medium transition-colors duration-300"
                      >
                        Secure Your Spot
                      </button>
                    </div>
                    
                    <p className="text-xs text-gray-500 mt-4">
                      By registering, you agree to receive communications about this and future events. 
                      Your information will be handled in accordance with our privacy policy.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-12 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-500 mb-6">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-4">Registration Successful!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for registering for our webinar. A confirmation email has been sent to your inbox with all the details.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary-500 hover:text-primary-600 font-medium transition-colors"
                  >
                    Register another person
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
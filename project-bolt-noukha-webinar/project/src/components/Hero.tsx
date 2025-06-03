import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface HeroProps {
  webinarDate: Date;
}

const Hero: React.FC<HeroProps> = ({ webinarDate }) => {
  const formattedDate = webinarDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = '2:00 PM - 3:30 PM EST';

  return (
    <section id="about" className="relative pt-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#179E42]/60 to-[#0f4724]/80 z-10"></div>
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="h-full w-full bg-[radial-gradient(#179E42_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="animate-fade-in">
            <span className="inline-block px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full mb-6">
              EXCLUSIVE WEBINAR
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Transforming Business <br />
              with <span className="text-primary-400">AI Innovation</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Join Dr. Sarah Chen for an in-depth exploration of how artificial intelligence
              is revolutionizing business operations and creating new opportunities for growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <div className="flex items-center text-gray-300">
                <Calendar className="h-5 w-5 mr-2 text-primary-500" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="h-5 w-5 mr-2 text-primary-500" />
                <span>{formattedTime}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#register"
                className="bg-primary-500 hover:bg-primary-600 text-white py-3 px-8 rounded-md font-medium transition-colors duration-300 flex items-center justify-center"
              >
                Reserve Your Spot
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#speakers"
                className="border border-white text-white py-3 px-8 rounded-md font-medium hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
              >
                Meet the Speaker
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom curve */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-white"
        style={{
          clipPath: 'ellipse(70% 100% at 50% 100%)',
        }}
      ></div>
    </section>
  );
};

export default Hero;

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

const roadmap = [
  {
    title: 'Early Career',
    description: 'Started as a software engineer and worked across top-tier firms building scalable tech platforms.',
    logo: 'https://res.cloudinary.com/dhn6uszk0/image/upload/v1749726516/wipro-removebg-preview_dvnuhx.png'
  },
  {
    title: 'PayPal Experience',
    description: 'Served as a Senior Consultant at PayPal, contributing to global product optimization and systems architecture.',
    logo: 'https://res.cloudinary.com/dhn6uszk0/image/upload/v1749720803/paypla-removebg-preview_xdhoum.png'
  },
  {
    title: 'Startup Investments',
    description: 'Invested in 2+ early-stage startups in Tamil Nadu, focusing on tech-enabled growth and long-term scale.',
    logo: null,
    icon: <ChevronDown size={28} color="#179E42" />
  },
  {
    title: 'Cookr CTO',
    description: 'Led product strategy and engineering as CTO at Cookr, building scalable food-tech systems from scratch.',
    logo: 'https://res.cloudinary.com/dhn6uszk0/image/upload/v1749720803/cookr-removebg-preview_vvvuis.png'
  },
  {
    title: 'Noukha Founder',
    description: 'Founded Noukha Technologies to help startups scale with custom software, AI, and full-stack innovation.',
    logo: 'https://res.cloudinary.com/dhn6uszk0/image/upload/v1749721036/noukha_logo_pzv1pn.png'
  }
];

const CareerRoadmap = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Career Roadmap</h2>

        <div className="relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-2 bg-[#179E42]/30 rounded-full z-0"></div>

          <div className="space-y-16 relative z-10">
            {roadmap.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isOpen = openIndex === index;

              return (
                <div key={index} className={clsx('flex flex-col md:flex-row items-center md:items-start gap-4 relative', isLeft ? 'md:flex-row-reverse' : '')}>
                  <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <div
                      className="cursor-pointer bg-white p-4 rounded-xl border shadow hover:shadow-lg transition"
                      onClick={() => toggleIndex(index)}
                    >
                      <div className="flex items-center gap-4">
                        {item.logo ? (
                          <img src={item.logo} alt={item.title} className="w-14 h-14 object-contain" />
                        ) : (
                          item.icon
                        )}
                        <h4 className="text-lg font-semibold">{item.title}</h4>
                      </div>
                    </div>
                  </div>

                  <div className="w-1/2 hidden md:block">
                    <div className="w-5 h-5 bg-[#179E42] rounded-full absolute top-4 left-1/2 transform -translate-x-1/2 z-20"></div>
                  </div>

                  {isOpen && (
                    <div className="mt-4 w-full md:w-1/2 mx-auto text-gray-600 text-sm bg-gray-50 p-4 rounded-md shadow-inner transition-all duration-300 ease-in-out">
                      {item.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerRoadmap;

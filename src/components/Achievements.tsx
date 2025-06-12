import React from 'react';
import { Award, Users, BookOpen, Trophy, Target, Lightbulb } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "1000+ Students Mentored",
      description: "Guided over 1000 students across various colleges in tech and entrepreneurship"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "50+ Workshops Conducted",
      description: "Led workshops at prestigious institutions like CIT, PSG Tech, MIT, and KPR College"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Multiple Hackathon Judge",
      description: "Served as judge and mentor at various college hackathons and startup competitions"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "2+ Startup Investments",
      description: "Successfully invested in and mentored early-stage tech startups"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Recognition",
      description: "Recognized as a leading voice in digital innovation and startup ecosystem"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Advocate",
      description: "Passionate about transforming ideas into scalable tech ventures"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Speaker Achievements</h2>
          <p className="text-lg text-gray-700">
            A track record of excellence in mentoring, innovation, and startup ecosystem development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-[#179E42]/10 rounded-lg flex items-center justify-center mb-6 text-[#179E42]">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-black rounded-xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Why Learn from Ramanathan?
            </h3>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              With over 12 years of experience and a proven track record of mentoring successful students and startups, 
              Ramanathan brings real-world insights that bridge the gap between academic learning and industry application.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#179E42] mb-2">12+</p>
                <p className="text-white">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#179E42] mb-2">1000+</p>
                <p className="text-white">Students Mentored</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#179E42] mb-2">50+</p>
                <p className="text-white">Workshops Conducted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
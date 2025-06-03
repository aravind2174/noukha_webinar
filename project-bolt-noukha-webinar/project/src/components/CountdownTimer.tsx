import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    // Initial calculation
    setTimeLeft(calculateTimeLeft());
    
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-8">Webinar Starts In</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {timeUnits.map((unit, index) => (
              <div 
                key={index}
                className="bg-gray-50 border border-gray-100 rounded-lg shadow-sm p-4 md:p-6"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                  {unit.value.toString().padStart(2, '0')}
                </div>
                <div className="text-gray-600 font-medium">{unit.label}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <a 
              href="#register" 
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white py-3 px-8 rounded-md font-medium transition-colors duration-300"
            >
              Reserve Your Spot Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SpeakerSection from './components/SpeakerSection';
import RegistrationForm from './components/RegistrationForm';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import CountdownTimer from './components/CountdownTimer';

function App() {
  // Webinar date - set to 30 days from now
  const webinarDate = new Date();
  webinarDate.setDate(webinarDate.getDate() + 30);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero webinarDate={webinarDate} />
        <CountdownTimer targetDate={webinarDate} />
        <SpeakerSection />
        <Testimonials />
        <RegistrationForm webinarDate={webinarDate} />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

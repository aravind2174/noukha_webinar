import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SpeakerSection from './components/SpeakerSection';
import RegistrationForm from './components/RegistrationForm';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import CountdownTimer from './components/CountdownTimer';

function App() {
  // ✅ Inject Chat Widget
  useEffect(() => {
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.ChatWidgetConfig = {
        webhook: {
          url: 'https://aravindkannan.app.n8n.cloud/webhook/ca64dd7e-3be2-4d83-be2e-068494be4d3a/chat',
          route: 'general'
        },
        branding: {
          logo: 'https://noukha.in/static/media/logo.78884cb809355cdfb5dc.png',
          name: 'NOUKHA TECHNOLOGIES',
          welcomeText: 'Get instant answers to your questions!',
          responseTimeText: 'Click the button below to start chatting'
        },
        style: {
          primaryColor: '#179e42',
          secondaryColor: '#059669',
          position: 'right',
          backgroundColor: '#ffffff',
          fontColor: '#1f2937'
        },
        preChatForm: false
      };
    `;
    document.body.appendChild(configScript);

    const widgetScript = document.createElement('script');
    widgetScript.src = 'https://cdn.jsdelivr.net/gh/funtastic418/chat-widget@main/chat-widget.js';
    widgetScript.async = true;
    document.body.appendChild(widgetScript);
  }, []);

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

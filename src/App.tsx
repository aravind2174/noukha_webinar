import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Speaker from './components/Speaker';
import Achievements from './components/Achievements';
import Agenda from './components/Agenda';
import Gallery from './components/Gallery';
import Registration from './components/Registration';
import Footer from './components/Footer';
import TechBackground from './components/TechBackground';

function App() {
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

  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      <TechBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Speaker />
        <Achievements />
        <Agenda />
        <Gallery />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}

export default App;
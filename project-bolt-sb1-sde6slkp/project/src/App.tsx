import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Speaker from './components/Speaker';
import Gallery from './components/Gallery';
import Registration from './components/Registration';
import Footer from './components/Footer';
import TechBackground from './components/TechBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      <TechBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Speaker />
        <Gallery />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}

export default App;
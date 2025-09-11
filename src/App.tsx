import React, { useState, useEffect } from 'react';
import CursorGradient from './components/CursorGradient';
import EventCalendar from './components/EventCalendar';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CurrentTeam from './components/CurrentTeam';
import Faculty from './components/Faculty';
import Teams from './components/Teams';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'team', 'faculty', 'teams', 'events', 'gallery'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <CursorGradient />
      <Navigation currentSection={currentSection} onSectionChange={setCurrentSection} />
      <Hero />
      <EventCalendar />
      <CurrentTeam />
      <Faculty />
      <Teams />
      <Events />
      <Gallery />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;
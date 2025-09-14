import { useState, useEffect } from 'react';
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

    const handleKeyDown = (event: KeyboardEvent) => {
      // Check for Ctrl+Shift+C combination
      if (event.ctrlKey && event.shiftKey && event.key === 'C') {
        event.preventDefault();
        alert('Website created by Om Deole & Ishwar Sonawane 🚀');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Main Content */}
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
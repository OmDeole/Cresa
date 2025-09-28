import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTeamsOpen, setIsTeamsOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'team', label: 'Current Team' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'events', label: 'Events' },
    { id: 'gallery', label: 'Gallery' },
  ];

  const teamYears = ['2025-26', '2024-25'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onSectionChange(sectionId);
    }
    setIsOpen(false);
    setIsTeamsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            {/* Logo Image */}
            <div className="w-8 h-8 relative">
              <img 
                src={logo}
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (target.src !== window.location.origin + '/vite.svg') {
                    target.src = '/vite.svg';
                  }
                }}
                alt="CRESA Logo" 
                className="w-full h-full object-contain"
              />
              
            </div>
            {/* Brand Name */}
            <span className="font-bold text-xl text-orange-500">CRESA</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden">
            {/* intentionally hidden per design: only logo + hamburger */}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-300 hover:text-orange-500 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="lg:hidden absolute right-4 top-16 z-[60] w-64 rounded-lg bg-black/80 border border-orange-500/20 shadow-xl backdrop-blur-sm"
          >
            <div className="px-4 py-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-sm py-2 rounded-md text-gray-200 hover:text-orange-400 hover:bg-white/5 transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
              
              {/* Mobile Teams */}
              <div className="pt-2 border-t border-white/10 mt-2">
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  onClick={() => setIsTeamsOpen(!isTeamsOpen)}
                  className="flex items-center justify-between w-full text-sm py-2 rounded-md text-gray-200 hover:text-orange-400 hover:bg-white/5 transition-colors"
                >
                  <span>Teams</span>
                  <ChevronDown className={`w-4 h-4 transform transition-transform ${isTeamsOpen ? 'rotate-180' : ''}`} />
                </motion.button>
                
                <AnimatePresence>
                  {isTeamsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-1 ml-2 space-y-1 overflow-hidden"
                    >
                      {teamYears.map((year) => (
                        <button
                          key={year}
                          onClick={() => scrollToSection('teams')}
                          className="block w-full text-left text-xs py-1.5 px-2 rounded-md text-gray-300 hover:text-orange-400 hover:bg-white/5 transition-colors"
                        >
                          {year} Team
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
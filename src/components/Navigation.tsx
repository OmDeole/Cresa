import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

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
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-orange-500/20"
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
                src="/logo.png" 
                alt="CRESA Logo" 
                className="w-full h-full object-contain"
                
              />
              
            </div>
            {/* Brand Name */}
            <span className="font-bold text-xl text-orange-500">CRESA</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentSection === item.id ? 'text-orange-500' : 'text-gray-300 hover:text-orange-500'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
            
            {/* Teams Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ y: -2 }}
                onMouseEnter={() => setIsTeamsOpen(true)}
                onMouseLeave={() => setIsTeamsOpen(false)}
                className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-orange-500 transition-colors"
              >
                <span>Teams</span>
                <ChevronDown className="w-4 h-4" />
              </motion.button>
              
              <AnimatePresence>
                {isTeamsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseEnter={() => setIsTeamsOpen(true)}
                    onMouseLeave={() => setIsTeamsOpen(false)}
                    className="absolute top-full left-0 mt-2 w-32 bg-black/90 backdrop-blur-md rounded-lg shadow-lg border border-orange-500/20 py-2"
                  >
                    {teamYears.map((year) => (
                      <button
                        key={year}
                        onClick={() => scrollToSection('teams')}
                        className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:text-orange-500 hover:bg-orange-500/10 transition-colors"
                      >
                        {year} Team
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-orange-500 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-orange-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-lg font-medium text-gray-300 hover:text-orange-500 transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
              
              {/* Mobile Teams */}
              <div>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  onClick={() => setIsTeamsOpen(!isTeamsOpen)}
                  className="flex items-center space-x-2 text-lg font-medium text-gray-300 hover:text-orange-500 transition-colors"
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
                      className="mt-2 ml-4 space-y-2"
                    >
                      {teamYears.map((year) => (
                        <button
                          key={year}
                          onClick={() => scrollToSection('teams')}
                          className="block text-gray-400 hover:text-orange-500 transition-colors"
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
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, ChevronDown } from 'lucide-react';
import MemberCard from './MemberCard';
import { pastTeams } from '../data';

const Teams: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const years = Object.keys(pastTeams);

  return (
    <section id="teams" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-black mr-3" />
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Legacy</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Teams Over the Years
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Honoring the dedicated leaders who have shaped our association throughout the years.
          </p>
        </motion.div>

        {/* Year Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="relative">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="appearance-none bg-white border-2 border-gray-900 rounded-full px-6 py-3 pr-12 font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 cursor-pointer"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year} Team
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-900 pointer-events-none" />
          </div>
        </motion.div>

        {/* Team Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {pastTeams[selectedYear as keyof typeof pastTeams]?.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <MemberCard member={member} type="team" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Legacy Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-white rounded-2xl p-8 shadow-sm"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Building on Legacy
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Each year, our teams have contributed to the growth and excellence of our association. 
            From organizing groundbreaking events to fostering innovation, our past leaders continue 
            to inspire and guide future generations of computer engineers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Teams;
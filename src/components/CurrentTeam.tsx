import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import MemberCard from './MemberCard';
import { currentTeam } from '../data';

const CurrentTeam: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white">
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
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Leadership</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Current Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated leaders driving innovation and excellence in our regional Computer Engineering community.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentTeam.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <MemberCard member={member} type="team" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CurrentTeam;
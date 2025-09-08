import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin } from 'lucide-react';
import { TeamMember, Professor } from '../types';

interface MemberCardProps {
  member: TeamMember | Professor;
  type?: 'team' | 'faculty';
}

const MemberCard: React.FC<MemberCardProps> = ({ member, type = 'team' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Overlay Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 flex items-end p-6"
        >
          <div className="text-white">
            <p className="text-sm leading-relaxed">{member.bio}</p>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
          <p className="text-gray-600 font-medium">{member.role}</p>
          
          {type === 'faculty' && 'specialization' in member && member.specialization && (
            <p className="text-sm text-gray-500 mt-2">{member.specialization}</p>
          )}
        </div>

        {/* Links */}
        <div className="flex justify-center space-x-3 mt-4">
          {'linkedin' in member && member.linkedin && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
          )}
          
          {'email' in member && member.email && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${member.email}`}
              className="p-2 bg-gray-100 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Subtle border animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-black origin-left"
      />
    </motion.div>
  );
};

export default MemberCard;
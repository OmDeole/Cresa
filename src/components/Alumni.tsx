import React from 'react';
import { motion } from 'framer-motion';
import { Award, Linkedin, ExternalLink } from 'lucide-react';
import { alumni } from '../data';

const Alumni: React.FC = () => {
  return (
    <section id="alumni" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Award className="w-8 h-8 text-black mr-3" />
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Success Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Hall of Fame
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Celebrating the achievements of our alumni who are making their mark in the technology industry worldwide.
          </p>
        </motion.div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 bg-black text-white rounded-full text-xs font-semibold">
                    Class of {person.graduationYear}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{person.name}</h3>
                <p className="text-gray-800 font-medium mb-2">{person.achievement}</p>
                {person.company && (
                  <p className="text-gray-600 text-sm mb-4">at {person.company}</p>
                )}

                {/* Actions */}
                <div className="flex items-center space-x-3">
                  {person.linkedin && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-gray-100 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Subtle border animation */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="h-0.5 bg-black origin-left"
              />
            </motion.div>
          ))}
        </div>

        {/* Alumni Network CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Alumni Network
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Stay connected with fellow graduates, share opportunities, and continue to be part of our growing community of successful engineers.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition-colors duration-300"
          >
            Connect with Alumni
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Alumni;
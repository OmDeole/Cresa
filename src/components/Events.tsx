import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag } from 'lucide-react';
import { events } from '../data';

const Events: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('2025-26');
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="events" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-orange-500 mr-3" />
            <span className="text-sm font-semibold text-orange-400 uppercase tracking-wider">Activities</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Events & Achievements
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            From hackathons to industry networking events, we create opportunities for growth, learning, and connection.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-orange-500/40 transition-all duration-300 overflow-hidden border border-orange-500/30 hover:border-orange-500/60"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 bg-orange-500/90 backdrop-blur-sm rounded-full text-xs font-semibold text-black">
                    <Tag className="w-3 h-3 mr-1" />
                    {event.category}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-orange-300 mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{formatDate(event.date)}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-200 transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {event.description}
                </p>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="h-0.5 bg-orange-500 mt-6 origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Events CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-full font-semibold hover:bg-orange-500 hover:text-black transition-colors duration-300 shadow-lg shadow-orange-500/25"
          >
            View All Events
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
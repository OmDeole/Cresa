import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  category: 'workshop' | 'seminar' | 'competition' | 'social';
}

const upcomingEvents: UpcomingEvent[] = [
  {
    id: '1',
    title: 'AI/ML Workshop',
    date: 'Jan 15',
    time: '10:00 AM',
    location: 'Computer Lab 1',
    attendees: 45,
    category: 'workshop'
  },
  {
    id: '2',
    title: 'Tech Talk: Future of Web Development',
    date: 'Jan 18',
    time: '2:00 PM',
    location: 'Auditorium',
    attendees: 120,
    category: 'seminar'
  },
  {
    id: '3',
    title: 'Coding Competition',
    date: 'Jan 22',
    time: '9:00 AM',
    location: 'Main Hall',
    attendees: 80,
    category: 'competition'
  },
  {
    id: '4',
    title: 'Team Building Event',
    date: 'Jan 25',
    time: '4:00 PM',
    location: 'Campus Ground',
    attendees: 60,
    category: 'social'
  }
];

const categoryColors = {
  workshop: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  seminar: 'bg-green-500/20 text-green-300 border-green-500/30',
  competition: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  social: 'bg-orange-500/20 text-orange-300 border-orange-500/30'
};

const EventCalendar: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='5' cy='5' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest activities and workshops
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              {/* Event Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 rounded-lg p-2">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/80 font-medium">{event.date}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[event.category]}`}>
                  {event.category}
                </span>
              </div>

              {/* Event Title */}
              <h3 className="text-xl font-bold text-white mb-4">
                {event.title}
              </h3>

              {/* Event Details */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-blue-100">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-100">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-100">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{event.attendees} expected attendees</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Events Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
          >
            View All Events
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventCalendar;
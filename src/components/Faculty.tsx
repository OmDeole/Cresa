import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import MemberCard from './MemberCard';
import { faculty } from '../data';

const Faculty: React.FC = () => {
  return (
    <section id="faculty" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="w-8 h-8 text-orange-500 mr-3" />
            <span className="text-sm font-semibold text-orange-400 uppercase tracking-wider">Academic Excellence</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Department Faculty
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Our distinguished faculty members bring decades of industry experience and academic excellence to guide our students.
          </p>
        </motion.div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {faculty.map((professor, index) => (
            <motion.div
              key={professor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <MemberCard member={professor} type="faculty" />
            </motion.div>
          ))}
        </div>

        {/* Department Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-orange-500/10 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30 hover:bg-orange-500/20 transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Department of Computer Engg. Regional
          </h3>
          <p className="text-orange-100 leading-relaxed max-w-4xl mx-auto">
            Our department is committed to providing cutting-edge education in regional computer engineering, 
            fostering innovation, and preparing students for successful careers in technology. With 
            state-of-the-art facilities and industry partnerships, we ensure our students receive 
            the best possible education.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Faculty;
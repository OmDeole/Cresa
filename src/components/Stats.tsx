import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart3 } from 'lucide-react';
import { stats } from '../data';

const AnimatedCounter: React.FC<{ value: number; duration?: number }> = ({ value, duration = 2 }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const increment = end / (duration * 60); // 60 FPS
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <BarChart3 className="w-8 h-8 text-orange-500 mr-3" />
            <span className="text-sm font-semibold text-orange-400 uppercase tracking-wider">Impact</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Numbers that reflect our commitment to excellence and community building.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2, type: 'spring' }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2"
                >
                  <AnimatedCounter value={stat.value} />
                  {stat.label === 'Events Hosted' && '+'}
                  {stat.label === 'Active Members' && '+'}
                  {stat.label === 'Awards Won' && '+'}
                </motion.div>
                <p className="text-gray-300 font-medium text-sm sm:text-base">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 text-lg">
            Building tomorrow's technology leaders, one student at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
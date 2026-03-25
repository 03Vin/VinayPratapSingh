import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from './animations/AnimatedText';

const skillsData = [
  { name: 'React', level: 'Advanced', color: 'from-accent-cyan to-accent-blue', shadow: 'shadow-glow-cyan' },
  { name: 'JavaScript', level: 'Advanced', color: 'from-yellow-400 to-orange-500', shadow: 'shadow-[0_0_15px_rgba(234,179,8,0.4)]' },
  { name: 'Node.js', level: 'Intermediate', color: 'from-green-400 to-emerald-600', shadow: 'shadow-glow-pink' }, // Changed to pink for contrast
  { name: 'C++', level: 'Intermediate', color: 'from-blue-500 to-indigo-600', shadow: 'shadow-[0_0_15px_rgba(59,130,246,0.4)]' },
  { name: 'Python', level: 'Intermediate', color: 'from-blue-400 to-yellow-500', shadow: 'shadow-[0_0_15px_rgba(55,118,171,0.4)]' },
  { name: 'SQL', level: 'Intermediate', color: 'from-accent-blue to-accent-cyan', shadow: 'shadow-glow-cyan' },
  { name: 'HTML/CSS', level: 'Expert', color: 'from-orange-500 to-red-600', shadow: 'shadow-[0_0_15px_rgba(227,79,38,0.4)]' },
  { name: 'Framer Motion', level: 'Advanced', color: 'from-accent-purple to-accent-pink', shadow: 'shadow-glow-purple' },
  { name: 'Tailwind', level: 'Expert', color: 'from-accent-cyan to-accent-blue', shadow: 'shadow-glow-cyan' },
  { name: 'Git', level: 'Advanced', color: 'from-red-500 to-orange-600', shadow: 'shadow-[0_0_15px_rgba(239,68,68,0.4)]' },
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="skills" className="py-32 relative overflow-hidden border-b border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-purple/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col items-center mb-24">
          <h2 className="text-4xl md:text-7xl font-display font-black text-white uppercase tracking-tighter text-center flex justify-center text-neon-cyan">
            <AnimatedText text="My Skills" />
          </h2>
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent mt-8 shadow-glow-cyan" />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.05 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ 
                scale: 1.05,
                translateZ: 20,
              }}
              className="relative group"
            >
              <div className={`glass-premium h-40 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-500 border-white/5 group-hover:border-white/20 overflow-hidden ${hoveredIndex === index ? skill.shadow : ''}`}>
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <span className="font-display font-black text-xs md:text-sm text-text-muted uppercase tracking-widest group-hover:text-white transition-colors mb-2 block">{skill.name}</span>
                  <div className={`w-8 h-[2px] bg-gradient-to-r ${skill.color} mx-auto mb-3 opacity-50 group-hover:w-16 transition-all duration-500`} />
                  <span className="font-mono text-[10px] text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 block">{skill.level}</span>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-8 h-8 opacity-20">
                    <div className="absolute top-2 right-2 w-[2px] h-4 bg-white" />
                    <div className="absolute top-2 right-2 w-4 h-[2px] bg-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

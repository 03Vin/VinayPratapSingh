import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import AnimatedText from './animations/AnimatedText';

const educationData = [
  {
    year: '2023 - Present',
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Lovely Professional University',
    description: 'Specializing in software engineering and modern web architectures. Actively participating in hackathons and building scalable digital solutions.'
  },
  {
    year: '2020 - 2021',
    degree: 'Intermediate (PCM)',
    institution: 'Mount Litera Zee School',
    description: 'Focused on Mathematics, Physics, and Chemistry. Developed foundational logic and analytical skills through rigorous academic training.'
  },
  {
    year: '2018 - 2019',
    degree: 'Matriculation',
    institution: 'St. Dominic’s Sr. Sec. School',
    description: 'Excellence in core science subjects and early computer science fundamentals.'
  }
];

export default function Education() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="education" className="py-32 relative overflow-hidden border-b border-white/5" ref={containerRef}>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col items-center mb-24">
          <h2 className="text-4xl md:text-7xl font-display font-black text-white uppercase tracking-tighter text-center flex justify-center text-neon-purple">
            <AnimatedText text="Education" />
          </h2>
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-accent-purple to-transparent mt-8 shadow-glow-purple" />
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Central Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 transform md:-translate-x-1/2 rounded-full overflow-hidden">
             <motion.div 
               style={{ scaleY }}
               className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-accent-purple via-accent-cyan to-accent-pink origin-top shadow-glow-cyan"
             />
          </div>

          <div className="space-y-24">
            {educationData.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                 {/* Timeline Node */}
                 <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-accent-cyan transform -translate-x-[7px] md:-translate-x-1/2 shadow-glow-cyan z-10"
                 >
                    <div className="absolute inset-0 rounded-full bg-accent-cyan animate-ping opacity-20" />
                 </motion.div>

                 {/* Content Box */}
                 <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-20' : 'md:pr-20'} w-full`}>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="glass-premium p-10 rounded-2xl border border-white/5 hover:border-accent-purple/30 transition-all duration-500 relative group overflow-hidden"
                    >
                       <div className="absolute top-0 left-0 w-1 h-0 bg-accent-purple group-hover:h-full transition-all duration-500" />
                       
                       <div className="flex items-center gap-3 mb-4">
                          <span className="text-accent-cyan font-mono text-[10px] uppercase tracking-widest px-2 py-1 bg-accent-cyan/10 rounded">{edu.year}</span>
                          <div className="h-px flex-1 bg-white/5" />
                       </div>

                       <h3 className="text-3xl font-display font-black text-white mb-2 tracking-tighter group-hover:text-neon-cyan transition-colors">{edu.degree}</h3>
                       <div className="text-accent-purple font-mono text-xs uppercase tracking-widest mb-6 font-bold">{edu.institution}</div>
                       <p className="text-text-muted font-sans text-sm leading-relaxed group-hover:text-white/80 transition-colors">{edu.description}</p>
                    </motion.div>
                 </div>

                 {/* Year Display for Mobile or Desktop Alternate */}
                 <div className={`hidden md:flex flex-1 ${index % 2 === 0 ? 'justify-start md:pr-20' : 'justify-end md:pl-20'}`}>
                    <span className="text-7xl font-display font-black text-white/5 uppercase select-none leading-none tracking-tighter">
                      {edu.year.split(' ')[0]}
                    </span>
                 </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

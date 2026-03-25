import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import AnimatedText from './animations/AnimatedText';
import Magnetic from './animations/Magnetic';

import sheShieldImg from '../assets/she_shield.png';
import cryptoMatrixImg from '../assets/crypto_matrix.png';
import academicOsImg from '../assets/academic_os.png';

const projects = [
  {
    id: 1,
    title: 'She Shield',
    description: 'A comprehensive women safety application with real-time location tracking and emergency alerts.',
    detailedDescription: 'She Shield is designed to provide immediate assistance in emergencies. It features a panic button, live location sharing with trusted contacts, and integration with local emergency services. Built with a focus on reliability and speed.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    color: 'from-accent-purple to-accent-pink',
    shadow: 'shadow-glow-purple',
    image: sheShieldImg
  },
  {
    id: 2,
    title: 'Crypto Matrix',
    description: 'Real-time cryptocurrency tracking matrix with portfolio management capabilities.',
    detailedDescription: 'An immersive dashboard providing live market data, advanced charting, and portfolio tracking. Features include custom alerts, historical data analysis, and simulated trading using WebSockets for real-time updates.',
    tech: ['React', 'Chart.js', 'WebSockets', 'Tailwind'],
    color: 'from-accent-cyan to-accent-blue',
    shadow: 'shadow-glow-cyan',
    image: cryptoMatrixImg
  },
  {
    id: 3,
    title: 'SmartAcad',
    description: 'A centralized portal for managing courses, grades, and student-teacher interactions.',
    detailedDescription: 'Streamlines academic operations by offering role-based dashboards for admins, teachers, and students. Includes features for attendance tracking, assignment submissions, and automated grade calculations.',
    tech: ['Flask', 'Python', 'SQLAlchemy', 'Postgres'],
    color: 'from-accent-blue to-accent-purple',
    shadow: 'shadow-glow-purple',
    image: academicOsImg
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-32 relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col items-center mb-24">
          <h2 className="text-4xl md:text-7xl font-display font-black text-white uppercase tracking-tighter text-center flex justify-center text-neon-cyan">
            <AnimatedText text="Projects" />
          </h2>
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent mt-8 shadow-glow-cyan" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: -5,
              }}
              className="group relative"
              style={{ perspective: 1000 }}
              onClick={() => setSelectedProject(project)}
            >
               <div className={`glass-premium h-full rounded-2xl p-6 border-white/5 overflow-hidden transition-all duration-500 hover:border-white/20 flex flex-col cursor-pointer group/card ${project.shadow}`}>
                  {/* Thumbnail Image Container */}
                  <div className="relative h-56 -mx-6 -mt-6 mb-6 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity" />
                    
                    {/* Floating Tech Badges on Image */}
                    <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 translate-y-[-10px] group-hover/card:translate-y-0">
                      {project.tech.slice(0, 2).map(t => (
                        <span key={t} className="text-[8px] font-mono px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-accent-cyan uppercase tracking-tighter">
                           {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} ${project.shadow}`} />
                      <span className="text-[10px] font-display uppercase tracking-[0.3em] text-text-muted group-hover/card:text-white transition-colors">Project {index + 1}</span>
                    </div>

                    <h3 className="text-3xl font-display font-black text-white mb-3 group-hover/card:text-neon-cyan transition-colors leading-none">{project.title}</h3>
                    <p className="text-text-muted font-sans text-sm mb-6 leading-relaxed line-clamp-2 group-hover/card:text-white/80 transition-colors">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
                      {project.tech.map(t => (
                        <span key={t} className="text-[8px] font-mono px-2 py-1 rounded bg-white/5 border border-white/5 text-text-muted/60 group-hover/card:text-text-muted transition-colors">
                           {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between text-[10px] font-display uppercase tracking-[0.4em] text-accent-cyan opacity-40 group-hover/card:opacity-100 transition-opacity">
                        <span>Initialize Protocol</span>
                        <span className="group-hover/card:translate-x-2 transition-transform duration-300">→</span>
                    </div>
                  </div>
               </div>

               {/* 3D Reflection Effect */}
               <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-10 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Futuristic Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
             <div className="absolute inset-0 bg-primary/90 backdrop-blur-xl" onClick={() => setSelectedProject(null)} />
             
             <motion.div
                initial={{ scale: 0.8, y: 100, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, y: 100, opacity: 0 }}
                className="glass-premium border border-white/10 p-10 rounded-3xl max-w-3xl w-full relative z-10 shadow-2xl overflow-hidden"
             >
                {/* Background Glow */}
                <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${selectedProject.color} blur-[120px] opacity-20`} />

                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 text-text-muted hover:text-white hover:rotate-90 transition-all z-20"
                >
                   <X size={24} />
                </button>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                     <span className="px-3 py-1 bg-white/5 rounded text-[10px] font-mono text-accent-cyan uppercase tracking-widest">Release Candidate</span>
                     <span className="text-[10px] font-mono text-text-muted uppercase">Hash: #8291A</span>
                  </div>

                  <h3 className="text-4xl md:text-6xl font-display font-black text-white mb-2 leading-none tracking-tighter">{selectedProject.title}</h3>
                  <div className={`w-32 h-[1px] bg-gradient-to-r ${selectedProject.color} mb-8`} />

                  {/* Modal Image */}
                  <div className="w-full h-64 rounded-2xl overflow-hidden mb-8 border border-white/10">
                     <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                  </div>

                  <p className="text-text-muted font-sans text-lg mb-8 leading-relaxed">
                     {selectedProject.detailedDescription}
                  </p>

                  <div className="mb-10">
                    <h4 className="text-white font-display font-bold uppercase tracking-widest text-[10px] mb-4 opacity-50">Dependencies</h4>
                    <div className="flex flex-wrap gap-2">
                       {selectedProject.tech.map(t => (
                         <span key={t} className="text-xs font-mono px-3 py-1.5 rounded-full bg-slate-900 border border-white/5 text-accent-cyan">
                            {t}
                         </span>
                       ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Magnetic>
                       <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-2 px-8 py-3 bg-accent-cyan text-primary hover:bg-white transition-colors font-display font-bold uppercase tracking-wider text-[10px] rounded-full">
                          <ExternalLink size={16} />
                          Initialize deployment
                       </a>
                    </Magnetic>
                    <Magnetic>
                       <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-2 px-8 py-3 glass-premium hover:bg-white/10 transition-colors font-display font-bold uppercase tracking-wider text-[10px] text-white rounded-full border-white/10">
                          <Github size={16} />
                          Source protocol
                       </a>
                    </Magnetic>
                  </div>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

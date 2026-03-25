import { motion } from 'framer-motion';
import AnimatedText from './animations/AnimatedText';
import profileImg from '../assets/Profile.jpeg';

export default function About() {
  return (
    <section id="about" className="py-12 relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter flex items-center gap-4 text-neon-cyan">
              <AnimatedText text="About" />
            </h2>
            <div className="h-px bg-gradient-to-r from-accent-cyan/50 to-transparent flex-1 shadow-glow-cyan" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Text Side - Code Terminal Style */}
            <div className="space-y-12 text-text-muted font-mono text-base leading-relaxed md:pr-8 relative">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-cyan to-transparent opacity-20" />
              <div className="space-y-6">
                <p>
                  <span className="text-accent-cyan">&gt;</span> Initializing profile...<br />
                  <span className="text-accent-cyan font-bold">STATUS:</span> I am a <span className="text-white font-bold">Full Stack Developer</span> obsessed with building high-performance digital systems.
                </p>
                <p>
                  <span className="text-accent-cyan">&gt;</span> My philosophy is simple: <span className="text-accent-purple">Code is poetry, but architecture is the soul.</span> I blend aesthetic perfection with technical robustness to create interfaces that don't just work—they inspire.
                </p>
                <p>
                  <span className="text-accent-cyan">&gt;</span> From micro-interactions to scalable cloud infrastructures, I engineer digital experiences that push the boundaries of what's possible on the web.
                </p>
              </div>

              {/* Restored Quote Card - Moved Below Description */}
              <motion.div
                initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="glass-premium p-8 rounded-3xl border border-white/5 relative overflow-hidden group max-w-sm"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-accent-purple opacity-50 shadow-glow-purple" />
                <span className="text-6xl text-accent-purple/10 font-serif absolute -top-4 left-2 leading-none select-none">"</span>
                <p className="text-xl font-display text-white/90 font-bold z-10 relative leading-tight tracking-tight">
                  Be yourself; <span className="text-accent-purple">everyone else</span> is already taken.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-4 h-[1px] bg-accent-purple/50" />
                  <span className="text-[8px] uppercase tracking-[0.3em] font-mono text-text-muted">Oscar Wilde</span>
                </div>
              </motion.div>
            </div>
            
            <div className="flex flex-col gap-8 max-w-sm ml-auto">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)', rotateY: 20 }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', rotateY: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ rotateY: -10, rotateX: 5, scale: 1.02 }}
                style={{ perspective: 1000 }}
              >
                <div className="absolute -inset-10 bg-accent-cyan/10 blur-[100px] rounded-full" />
                <div className="glass-premium p-4 rounded-[2.5rem] border border-white/10 relative shadow-2xl backdrop-blur-3xl overflow-hidden group">
                  {/* Photo Container */}
                  <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5]">
                    <img 
                      src={profileImg} 
                      alt="Vinay Pratap Singh" 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    {/* Techy Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                    <div className="absolute inset-0 border-[10px] border-black/10 pointer-events-none" />
                  </div>

                  {/* Id Tag - Removed per user request */}

                  {/* Cyber Accents */}
                  <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-accent-cyan/20 rounded-tr-[2.5rem]" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-accent-purple/20 rounded-bl-[2.5rem]" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

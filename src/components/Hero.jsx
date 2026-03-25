import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import CyberScene from './CyberScene';
import Magnetic from './animations/Magnetic';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-white/5 pt-20">
      <div className="scanline" />
      
      <div className="container mx-auto px-6 h-full relative z-10 flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Content */}
        <motion.div 
          className="flex-1 md:pr-10 text-center md:text-left mb-16 md:mb-0 mt-10 md:mt-0"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white mb-4 leading-[0.85] tracking-tighter"
          >
            VINAY PRATAP<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-accent-cyan via-accent-purple to-accent-pink drop-shadow-[0_0_15px_rgba(188,19,254,0.3)]">SINGH</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-text-muted font-mono h-16 md:h-12 mt-4"
          >
            <TypeAnimation
              sequence={[
                'Web Developer', 1500,
                'Full Stack Engineer', 1500,
                'Futuristic Interfaces', 1500,
                'Creative Coder', 1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-neon-cyan"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center"
          >
            <Magnetic>
              <a href="#projects" className="px-10 py-4 bg-accent-purple text-white hover:shadow-glow-purple transition-all rounded-full uppercase tracking-widest font-display text-[10px] font-bold inline-block">
                Initialize View
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="px-10 py-4 glass-premium text-white hover:text-accent-cyan transition-all rounded-full uppercase tracking-widest font-display text-[10px] font-bold border-white/5 inline-block">
                 Get in Touch
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Profile / Right Side */}
        <motion.div 
          className="flex-1 flex justify-center items-center relative w-full h-[450px] md:h-[600px]"
          initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Cyber Scene 3D Canvas */}
          <CyberScene />

          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-1/4 -right-4 glass-premium px-4 py-2 rounded text-accent-pink font-mono text-[10px] border-accent-pink/20 shadow-glow-pink flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-accent-pink rounded-full animate-pulse" />
            CORE_ENGINE: READY
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 -left-4 glass-premium px-4 py-2 rounded text-accent-cyan font-mono text-[10px] border-accent-cyan/20 shadow-glow-cyan flex items-center gap-2"
          >
             <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-pulse" />
             UI_FLUID: ACTIVE
          </motion.div>
        </motion.div>

      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-display text-text-muted">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent-cyan to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-0 bg-white w-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

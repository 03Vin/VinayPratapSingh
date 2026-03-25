import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Particles from './components/Particles';
import { ReactLenis } from 'lenis/react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Simulate loading/entry delay
    const timer = setTimeout(() => setLoading(false), 2000);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="bg-primary min-h-screen text-text-main font-sans selection:bg-accent-cyan/30 relative selection:text-primary overflow-clip">
        
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center"
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "circOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-display font-bold text-neon-cyan tracking-tighter"
              >
                VINAY<span className="text-accent-purple">.</span>
              </motion.div>
              <motion.div 
                className="mt-4 w-48 h-[2px] bg-slate-800 relative overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-accent-cyan"
                  initial={{ translate: "-100%" }}
                  animate={{ translate: "0%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* Ambient Cursor Glow */}
        <motion.div 
          className="pointer-events-none fixed inset-0 z-0 opacity-40 mix-blend-screen hidden md:block"
          animate={{
            background: `radial-gradient(1200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.08), transparent 40%)`
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
        />

        {/* Dynamic Background */}
        <Particles />
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] mesh-bg-1 opacity-70 mix-blend-screen"></div>
          <div className="absolute top-[10%] right-[-20%] w-[60vw] h-[60vw] mesh-bg-2 opacity-60 mix-blend-screen"></div>
        </div>

        <div className="relative z-10 w-full h-full">
          {!loading && (
            <>
              <CustomCursor />
              <Navbar />
              
              <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Contact />
              </motion.main>

              <footer className="py-10 text-center text-text-muted text-sm glass border-t-0">
                <p>© {new Date().getFullYear()} Vinay Pratap Singh. All rights reserved.</p>
              </footer>
            </>
          )}
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;

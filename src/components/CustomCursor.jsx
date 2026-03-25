import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorType, setCursorType] = useState('default');
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const trailX = useSpring(cursorX, { damping: 40, stiffness: 300, mass: 0.8 });
  const trailY = useSpring(cursorY, { damping: 40, stiffness: 300, mass: 0.8 });
  
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('button') || target.closest('a') || target.closest('input') || target.closest('textarea');
      
      if (isInteractive) {
        setIsHovering(true);
        if (target.closest('button') || target.closest('a')) setCursorType('pointer');
        if (target.closest('input') || target.closest('textarea')) setCursorType('text');
      } else {
        setIsHovering(false);
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Outer Glow Trail */}
      <motion.div
        className="absolute w-12 h-12 rounded-full blur-2xl opacity-20 bg-accent-cyan"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      
      {/* Main Cursor Ring */}
      <motion.div
        className="absolute w-8 h-8 border border-accent-cyan/50 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.4)]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'rgba(0, 240, 255, 1)' : 'rgba(0, 240, 255, 0.5)',
          backgroundColor: isHovering ? 'rgba(0, 240, 255, 0.05)' : 'rgba(0, 240, 255, 0)',
        }}
      />

      {/* Inner Dot */}
      <motion.div
        className="absolute w-1.5 h-1.5 bg-accent-cyan rounded-full shadow-[0_0_8px_rgba(0,240,255,0.8)]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 0.5 : 1,
          opacity: cursorType === 'text' ? 0 : 1
        }}
      />
    </div>
  );
}

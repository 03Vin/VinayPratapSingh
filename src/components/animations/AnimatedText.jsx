import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AnimatedText({ text, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -90,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      ref={ref}
    >
      {words.map((word, index) => (
        <span style={{ overflow: "hidden", display: "inline-block", marginRight: "0.25em" }} key={index}>
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={child}
              style={{ display: "inline-block", transformOrigin: "bottom center" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}

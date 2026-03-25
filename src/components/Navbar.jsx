import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a href="#home" className="text-3xl font-display font-bold text-white relative group tracking-wider">
          VPS<span className="text-accent-cyan">.</span>
          <span className="absolute -inset-1 bg-accent-cyan/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex space-x-8 items-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-text-muted hover:text-white transition-colors relative group font-mono text-sm tracking-wider uppercase"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 group-hover:w-full box-shadow-glow-cyan"></span>
            </a>
          ))}
          <div className="flex items-center space-x-4">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="relative group inline-block text-sm font-mono font-bold uppercase tracking-wider text-primary bg-accent-cyan px-6 py-2 rounded-sm overflow-hidden">
              <span className="relative z-10">View Resume</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a href="/resume.pdf" download="Vinay_Pratap_Singh_Resume.pdf" className="relative group inline-block text-sm font-mono font-bold uppercase tracking-wider text-accent-cyan border border-accent-cyan px-4 py-2 rounded-sm overflow-hidden hover:bg-accent-cyan/10 transition-colors">
              <span className="relative z-10">Download CV</span>
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-accent-cyan z-50 relative" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: '100vh' }}
          className="md:hidden glass-dark absolute top-0 left-0 w-full flex flex-col justify-center items-center space-y-8"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl text-white font-display tracking-widest uppercase hover:text-accent-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col items-center space-y-4 w-full px-12 mt-8">
             <a 
               href="/resume.pdf" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="w-full text-center text-lg font-mono font-bold uppercase tracking-wider text-primary bg-accent-cyan px-6 py-4 rounded-sm"
               onClick={() => setIsOpen(false)}
             >
               View Resume
             </a>
             <a 
               href="/resume.pdf" 
               download="Vinay_Pratap_Singh_Resume.pdf" 
               className="w-full text-center text-lg font-mono font-bold uppercase tracking-wider text-accent-cyan border border-accent-cyan px-6 py-4 rounded-sm"
               onClick={() => setIsOpen(false)}
             >
               Download CV
             </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

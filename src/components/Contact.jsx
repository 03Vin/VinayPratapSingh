import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Send, Download, Twitter, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import AnimatedText from './animations/AnimatedText';
import Magnetic from './animations/Magnetic';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace 'YOUR_FORMSPREE_ID' with your real Formspree ID to receive emails
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqlwybq";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        <div className="flex flex-col items-center mb-24">
          <h2 className="text-4xl md:text-7xl font-display font-black text-white uppercase tracking-tighter text-center flex justify-center text-neon-cyan">
            <AnimatedText text="Contact Me" />
          </h2>
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent mt-8 shadow-glow-cyan" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 max-w-7xl mx-auto">

          {/* Left: Tactical Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-6 uppercase tracking-tight leading-none bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">Available for<br /><span className="text-accent-cyan">Digital Collaboration</span></h3>
              <p className="text-text-muted text-lg leading-relaxed font-sans mb-12 max-w-md">
                I'm currently open to new opportunities and high-impact projects. Feel free to reach out if you have a project in mind or just want to say hi!
              </p>

              <div className="grid grid-cols-2 gap-4 mb-12">
                {[
                  { icon: Mail, label: 'Email', value: 'vinaypratap227@gmail.com', color: 'accent-cyan', link: 'mailto:vinaypratap227@gmail.com' },
                  { icon: Globe, label: 'Phone', value: '+91-9256857635', color: 'accent-purple', link: 'tel:+919256857635' },
                ].map((item, i) => (
                  <a key={i} href={item.link} className="glass-premium p-6 rounded-2xl border-white/5 group hover:border-white/10 transition-colors">
                    <item.icon size={20} className={`text-${item.color} mb-3 opacity-50 group-hover:opacity-100 transition-opacity`} />
                    <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-1">{item.label}</div>
                    <div className="text-sm font-mono text-white truncate">{item.value}</div>
                  </a>
                ))}
              </div>

              <div className="flex gap-6 mb-12">
                {[
                  { Icon: Github, url: 'https://github.com/03Vin', hoverClass: 'hover:bg-[#24292e] hover:text-white hover:border-white/20' },
                  { Icon: Linkedin, url: 'https://www.linkedin.com/in/vinaypratapsingh227', hoverClass: 'hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]/50' },
                  {
                    Icon: () => (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03a11.811 11.811 0 011.592 5.96L0 24l6.101-1.6c1.813.99 3.854 1.513 5.94 1.515h.005c6.637 0 12.032-5.396 12.035-12.03a11.81 11.81 0 00-3.417-8.436z" />
                      </svg>
                    ),
                    url: 'https://wa.me/918923409136',
                    hoverClass: 'hover:bg-[#25D366] hover:text-white hover:border-[#25D366]/50'
                  }
                ].map((social, i) => (
                  <Magnetic key={i}>
                    <a href={social.url} target="_blank" rel="noopener noreferrer" className={`w-14 h-14 glass-premium rounded-full flex items-center justify-center transition-all border-white/10 text-text-muted ${social.hoverClass}`}>
                      <social.Icon size={24} />
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right: Uplink Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-premium p-10 md:p-12 rounded-[2rem] border border-white/5 relative overflow-hidden shadow-2xl min-h-[500px] flex items-center">
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-scanline opacity-[0.02] pointer-events-none" />

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="w-full text-center space-y-6 py-12"
                  >
                    <div className="relative inline-block">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                        className="w-24 h-24 bg-accent-cyan/10 rounded-full flex items-center justify-center border border-accent-cyan/20 shadow-glow-cyan"
                      >
                        <CheckCircle2 size={48} className="text-accent-cyan" />
                      </motion.div>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-0 bg-accent-cyan rounded-full opacity-20"
                      />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-3xl font-display font-black text-white uppercase tracking-tighter">Uplink Established</h4>
                      <p className="text-text-muted font-mono text-sm uppercase tracking-widest">Your message has been encrypted and sent.</p>
                    </div>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-accent-cyan font-mono text-[10px] uppercase tracking-[0.4em] hover:text-white transition-colors flex items-center gap-2 mx-auto mt-10 group"
                    >
                      Initialize New Session <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                ) : status === 'error' ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="w-full text-center space-y-6 py-12"
                  >
                    <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.2)] mx-auto">
                      <Globe size={48} className="text-red-500" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-3xl font-display font-black text-white uppercase tracking-tighter">Transmission Error</h4>
                      <p className="text-text-muted font-mono text-sm uppercase tracking-widest px-8">Unable to establish secure uplink. Please check your connection or contact ID.</p>
                    </div>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-red-500 font-mono text-[10px] uppercase tracking-[0.4em] hover:text-white transition-colors flex items-center gap-2 mx-auto mt-10 group"
                    >
                      Retry Connection <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                    className="space-y-8 relative z-10 w-full"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent-cyan font-bold ml-1" htmlFor="name">Your Name</label>
                        <input
                          required
                          name="name"
                          type="text"
                          id="name"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full bg-slate-900/50 border border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent-cyan/50 focus:bg-slate-900 transition-all font-sans placeholder:text-white/10"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent-purple font-bold ml-1" htmlFor="email">Your Email</label>
                        <input
                          required
                          name="email"
                          type="email"
                          id="email"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full bg-slate-900/50 border border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent-purple/50 focus:bg-slate-900 transition-all font-sans placeholder:text-white/10"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent-pink font-bold ml-1" htmlFor="message">Your Message</label>
                      <textarea
                        required
                        name="message"
                        id="message"
                        rows="6"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full bg-slate-900/50 border border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent-pink/50 focus:bg-slate-900 transition-all font-sans resize-none custom-scrollbar placeholder:text-white/10"
                        placeholder="Write your message here..."
                      />
                    </div>

                    <Magnetic>
                      <button
                        disabled={status === 'sending'}
                        type="submit"
                        className={`w-full py-5 bg-white text-primary hover:bg-accent-cyan hover:shadow-glow-cyan transition-all font-display font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3 rounded-xl overflow-hidden relative group ${status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <span className="relative z-10 flex items-center gap-3">
                          {status === 'sending' ? 'Transmitting...' : 'Send Message'}
                          {status === 'sending' ? (
                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                              <Globe size={18} />
                            </motion.div>
                          ) : (
                            <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                          )}
                        </span>
                      </button>
                    </Magnetic>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

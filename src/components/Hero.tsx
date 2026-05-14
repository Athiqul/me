import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, FileText, Terminal, Server, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container-wide relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Scaling the Web with Precision
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold mb-8 leading-[0.9] tracking-tighter">
            MD ATHIQUL <br />
            <span className="text-gradient">HASAN MOMIN</span>
          </h1>

          <p className="text-lg md:text-2xl text-[var(--text-muted)] max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            Senior Backend Software Engineer focused on <span className="text-[var(--text)]">Distributed Systems</span>, 
            <span className="text-[var(--text)]"> Multi-Tenant Architectures</span>, and <span className="text-[var(--text)]">Cloud Infrastructure</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="#projects" className="btn-primary min-w-[200px] h-14">
                View Architecture <ChevronRight size={20} />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/resume" className="btn-secondary min-w-[200px] h-14">
                <FileText size={20} /> Professional Resume
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 pt-12 border-t border-[var(--border)] flex flex-wrap justify-center gap-x-12 gap-y-6 grayscale hover:grayscale-0 transition-all duration-500"
        >
          <div className="flex items-center gap-3 font-display font-black text-2xl tracking-tighter">
            <Server size={24} className="text-primary" /> LARAVEL
          </div>
          <div className="flex items-center gap-3 font-display font-black text-2xl tracking-tighter">
            <Cloud size={24} className="text-primary" /> AWS
          </div>
          <div className="flex items-center gap-3 font-display font-black text-2xl tracking-tighter">
            <Terminal size={24} className="text-primary" /> PHP
          </div>
          <div className="flex items-center gap-3 font-display font-black text-2xl tracking-tighter text-nowrap">
            <span className="text-primary">#</span> SYSTEM DESIGN
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-[var(--border)] container-wide">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-2">
          <Link to="/" className="font-display text-2xl font-black tracking-tighter mb-6 block">
            ATHIQUL <span className="text-primary">HASAN MOMIN</span>
          </Link>
          <p className="text-[var(--text-muted)] max-w-sm leading-relaxed mb-8">
            Backend Software Engineer specialized in architecting high-performance distributed systems, multi-tenant platforms, and robust cloud infrastructure.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Athiqul" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[var(--border)]/50 text-[var(--text-muted)] hover:text-primary transition-all">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/athiqul-hasan-672a6b174" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-[var(--border)]/50 text-[var(--text-muted)] hover:text-primary transition-all">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:athiqulhasan.4@gmail.com" className="p-3 rounded-xl bg-[var(--border)]/50 text-[var(--text-muted)] hover:text-primary transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text)] mb-6">Navigation</h4>
          <ul className="space-y-4 text-sm font-medium text-[var(--text-muted)]">
            <li><a href="/#about" className="hover:text-primary transition-colors">Architecture</a></li>
            <li><a href="/#skills" className="hover:text-primary transition-colors">Expertise</a></li>
            <li><a href="/#experience" className="hover:text-primary transition-colors">Journey</a></li>
            <li><a href="/#projects" className="hover:text-primary transition-colors">Portfolio</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text)] mb-6">Resources</h4>
          <ul className="space-y-4 text-sm font-medium text-[var(--text-muted)]">
            <li><Link to="/resume" className="hover:text-primary transition-colors">Professional Resume</Link></li>
            <li><a href="https://github.com/Athiqul" className="hover:text-primary transition-colors">Engineering Logs</a></li>
            <li><a href="/#contact" className="hover:text-primary transition-colors">Contact Service</a></li>
          </ul>
        </div>
      </div>

      <div className="pt-12 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-muted)]">
        <p>© {currentYear} Athiqul Hasan Momin. All rights reserved.</p>
        <p className="flex items-center gap-2">
          Designed with <Heart size={12} className="text-primary fill-primary" /> for High Scalability
        </p>
      </div>
    </footer>
  );
};

export default Footer;

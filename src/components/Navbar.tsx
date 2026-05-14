import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Sun, Moon, FileText, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isResumePage = location.pathname === '/resume';

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.documentElement.classList.add('light');
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'Architecture', href: '/#about' },
    { name: 'Expertise', href: '/#skills' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Education', href: '/#education' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3 glass shadow-2xl shadow-black/5' : 'py-6 bg-transparent'
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left z-50" style={{ scaleX }} />

      <div className="container-wide flex items-center justify-between">
        <Link to="/" className="font-display text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm group-hover:rotate-12 transition-transform">AM</div>
          <span className="hidden sm:inline">ATHIQUL <span className="text-primary">HASAN MOMIN</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {!isResumePage && navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
          <Link 
            to="/resume" 
            className={`text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 px-6 py-2.5 rounded-full transition-all ${
              isResumePage 
                ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                : 'bg-[var(--border)] hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30'
            }`}
          >
            <FileText size={14} /> Resume
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-xl hover:bg-[var(--border)] transition-all active:scale-90"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <div className="h-6 w-[1px] bg-[var(--border)] mx-2 hidden sm:block"></div>
          
          <div className="hidden sm:flex items-center gap-3">
            <a href="https://github.com/Athiqul" target="_blank" rel="noopener noreferrer" className="p-2 text-[var(--text-muted)] hover:text-primary transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/athiqul-hasan-672a6b174" target="_blank" rel="noopener noreferrer" className="p-2 text-[var(--text-muted)] hover:text-primary transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-[var(--text)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-[var(--bg)] border-b border-[var(--border)] p-8 lg:hidden shadow-2xl"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold tracking-tight hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Link 
              to="/resume" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary w-full"
            >
              <FileText size={18} /> View Resume
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

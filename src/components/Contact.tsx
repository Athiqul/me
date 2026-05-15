import { motion } from 'framer-motion';
import { Mail, Send, MapPin, ExternalLink } from 'lucide-react';
import { FaLinkedin } from "react-icons/fa6";
import SectionHeader from './SectionHeader';

const ContactInfo = ({ icon: Icon, label, value, href }: { icon: any, label: string, value: string, href?: string }) => (
  <motion.div 
    whileHover={{ x: 10 }}
    className="flex items-center gap-6 p-6 rounded-3xl border border-[var(--border)] bg-[var(--border)]/5 hover:border-primary/30 transition-all group"
  >
    <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
      <Icon size={24} />
    </div>
    <div>
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-muted)] mb-1">{label}</p>
      {href ? (
        <a href={href} className="text-lg font-bold hover:text-primary transition-colors flex items-center gap-2">
          {value} <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      ) : (
        <p className="text-lg font-bold">{value}</p>
      )}
    </div>
  </motion.div>
);

const Contact = () => {
  return (
    <section id="contact" className="section-padding container-wide">
      <SectionHeader 
        title="Get in Touch" 
        subtitle="Open for senior backend opportunities, architecture consulting, or discussions on distributed systems."
        align="center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <ContactInfo 
            icon={Mail} 
            label="Direct Email" 
            value="athiqulhasan.4@gmail.com" 
            href="mailto:athiqulhasan.4@gmail.com"
          />
          <ContactInfo 
            icon={FaLinkedin} 
            label="LinkedIn" 
            value="athiqul-hasan" 
            href="https://linkedin.com/in/athiqul-hasan-672a6b174"
          />
          <ContactInfo 
            icon={MapPin} 
            label="Location" 
            value="Mirpur, Dhaka, Bangladesh" 
          />
          <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 mt-8">
            <h4 className="font-bold mb-4 uppercase tracking-widest text-[10px] text-primary">Availability Status</h4>
            <div className="flex items-center gap-3 text-[var(--text)]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <p className="text-lg font-bold tracking-tight">Active & open for international roles</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card bg-[#0a0a0c] p-10 md:p-12"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-muted)]">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-0 py-3 bg-transparent border-b border-[var(--border)] focus:border-primary outline-none transition-all placeholder:text-gray-700 font-medium text-lg"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-muted)]">Email Address</label>
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="w-full px-0 py-3 bg-transparent border-b border-[var(--border)] focus:border-primary outline-none transition-all placeholder:text-gray-700 font-medium text-lg"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-muted)]">Your Message</label>
              <textarea 
                rows={4}
                placeholder="How can I help you scale your next big idea?"
                className="w-full px-0 py-3 bg-transparent border-b border-[var(--border)] focus:border-primary outline-none transition-all resize-none placeholder:text-gray-700 font-medium text-lg"
              ></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="btn-primary w-full py-5 text-sm font-black uppercase tracking-[0.2em]"
            >
              Dispatch Message <Send size={18} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

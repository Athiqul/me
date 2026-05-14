import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

const SectionHeader = ({ title, subtitle, align = 'left' }: SectionHeaderProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-16 ${align === 'center' ? 'text-center mx-auto' : ''} max-w-2xl`}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter uppercase">{title}</h2>
      <p className="text-lg text-[var(--text-muted)] leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionHeader;

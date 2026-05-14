import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import SectionHeader from './SectionHeader';

const EducationCard = ({ degree, school, period, achievement, index }: { degree: string, school: string, period: string, achievement?: string, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="card group hover:bg-primary/[0.02]"
  >
    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
      <div className="flex gap-6">
        <div className="p-4 h-fit rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
          <GraduationCap size={28} />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">{degree}</h3>
          <p className="text-lg font-medium text-[var(--text)] mb-1">{school}</p>
          <p className="text-sm text-[var(--text-muted)] font-bold uppercase tracking-widest">{period}</p>
        </div>
      </div>
      
      {achievement && (
        <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-accent/10 border border-accent/20 text-accent h-fit">
          <Award size={20} />
          <span className="text-sm font-bold tracking-tight">{achievement}</span>
        </div>
      )}
    </div>
  </motion.div>
);

const Education = () => {
  const education = [
    {
      degree: 'Master of Science (MSc), Computer Science',
      school: 'North South University',
      period: 'Jan 2023 – Present',
    },
    {
      degree: 'Bachelor of Science (BSc), Computer Science & Engineering',
      school: 'Uttara University',
      period: 'May 2019 – Aug 2022',
      achievement: 'Dean Awarded, CGPA: 3.95 / 4.00',
    },
    {
      degree: 'Diploma in Engineering, Automobile Technology',
      school: 'Dhaka Polytechnic Institute',
      period: '2012 – 2016',
    },
  ];

  return (
    <section id="education" className="section-padding container-wide">
      <SectionHeader 
        title="Academic Foundation" 
        subtitle="Strong academic background in computer science and engineering, providing the theoretical basis for complex system design."
      />

      <div className="grid grid-cols-1 gap-6 max-w-5xl">
        {education.map((edu, idx) => (
          <EducationCard key={idx} {...edu} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Education;

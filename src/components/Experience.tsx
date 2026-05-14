import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import SectionHeader from './SectionHeader';

const ExperienceItem = ({ role, company, period, location, achievements, index }: { role: string, company: string, period: string, location: string, achievements: string[], index: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative pl-12 pb-16 last:pb-0 group"
  >
    {/* Timeline Line */}
    <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-[var(--border)] group-last:bottom-auto group-last:h-8"></div>
    
    {/* Timeline Dot */}
    <div className="absolute left-0 top-0 w-[32px] h-[32px] rounded-full bg-[var(--bg)] border-2 border-[var(--border)] group-hover:border-primary transition-colors flex items-center justify-center z-10 shadow-sm">
      <Briefcase size={14} className="text-[var(--text-muted)] group-hover:text-primary transition-colors" />
    </div>
    
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h3 className="text-2xl font-bold tracking-tight text-[var(--text)] group-hover:text-primary transition-colors">
          {role}
        </h3>
        <span className="text-xs font-bold px-4 py-1.5 rounded-full bg-[var(--border)] text-[var(--text-muted)] flex items-center gap-2">
          <Calendar size={14} /> {period}
        </span>
      </div>
      
      <div className="flex items-center gap-4 font-semibold text-lg">
        <span className="text-primary">{company}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--border)]"></span>
        <span className="text-[var(--text-muted)] font-normal flex items-center gap-2 text-sm">
          <MapPin size={14} /> {location}
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mt-4">
        {achievements.map((achievement, idx) => (
          <div key={idx} className="flex gap-3 text-[var(--text-muted)] leading-relaxed text-sm">
            <span className="text-primary flex-shrink-0 mt-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </span>
            <span>{achievement}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'JB Connect Ltd.',
      period: 'Sep 2024 – Present',
      location: 'Dhaka, Bangladesh',
      achievements: [
        'Architected BBS CMS multi-tenant platform for WordPress management.',
        'Engineered AWS cloud solutions with highly available RDS and S3 integration.',
        'Implemented GDN Owlet Framework core backend components.',
        'Developed API bridge systems for seamless third-party service integration.',
        'Led OAuth 2.0 implementations for secure cross-platform authentication.',
        'Contributed to YELL PAY backend infrastructure for secure processing.'
      ],
    },
    {
      role: 'Back-End Developer',
      company: 'Above IT',
      period: 'Sep 2022 – Aug 2024',
      location: 'Dhaka, Bangladesh',
      achievements: [
        'Developed 10crmBank financial backend with real-time transaction processing.',
        'Architected AboveBD service platform infrastructure using Laravel.',
        'Engineered high-throughput SMS gateway systems with queue management.',
        'Optimized complex SQL queries reducing API latency by 40%.',
        'Built enterprise-grade REST APIs for high-traffic mobile applications.'
      ],
    },
    {
      role: 'Web Developer',
      company: 'Above IT',
      period: 'Dec 2021 – Apr 2022',
      location: 'Dhaka, Bangladesh',
      achievements: [
        'Provided full-stack development support for internal enterprise tools.',
        'Handled backend integration for responsive client-facing web apps.',
        'Managed server deployment workflows and CI/CD pipelines.'
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding container-wide">
      <SectionHeader 
        title="Engineering Journey" 
        subtitle="Over 4 years of professional experience building high-performance systems and leading technical initiatives."
      />

      <div className="max-w-5xl ml-4">
        {experiences.map((exp, idx) => (
          <ExperienceItem key={idx} {...exp} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Experience;

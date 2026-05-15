import { motion } from 'framer-motion';
import { Server, Database, Cloud, Shield, Terminal, Layout } from 'lucide-react';
import SectionHeader from './SectionHeader';

const SkillCard = ({ title, icon: Icon, skills, index }: { title: string, icon: any, skills: string[], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="card group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
      <Icon size={120} />
    </div>
    
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold tracking-tight">{title}</h3>
    </div>

    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill} 
          className="px-3 py-1 text-xs font-semibold rounded-lg bg-[var(--border)]/50 text-[var(--text-muted)] border border-[var(--border)] group-hover:border-primary/30 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const categories = [
    {
      title: 'Backend Core',
      icon: Terminal,
      skills: ['PHP', 'Laravel', 'CodeIgniter 4', 'Symphony', 'REST APIs'],
    },
    {
      title: 'Architecture',
      icon: Server,
      skills: ['Microservices', 'Multi-Tenancy', 'CQRS', 'Event-Driven', 'System Design'],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS (EC2, RDS, S3)', 'ALB', 'CI/CD', 'Docker', 'Linux Admin'],
    },
    {
      title: 'Database Systems',
      icon: Database,
      skills: ['MySQL', 'Redis', 'Elasticsearch', 'Query Optimization', 'Database Design'],
    },
    {
      title: 'Frontend Bridge',
      icon: Layout,
      skills: ['React.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion'],
    },
    {
      title: 'Integrations & Auth',
      icon: Shield,
      skills: ['Google OAuth', 'JWT', 'API Bridges', 'Third-party SDKs', 'Secure Payments'],
    },
  ];

  return (
    <section id="skills" className="section-padding container-wide">
      <SectionHeader 
        title="Technical Expertise" 
        subtitle="Specialized in building high-performance backend systems with a focus on scalability and architectural integrity."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, idx) => (
          <SkillCard key={category.title} {...category} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

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
      title: 'Backend Engineering',
      icon: Terminal,
      skills: ['PHP', 'Laravel', 'CodeIgniter 4', 'RESTful APIs', 'OAuth 2.0', 'Multi-Tenancy', 'System Design', 'Distributed Systems'],
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      skills: ['AWS (EC2, RDS, S3, ALB, CloudFront)', 'SES/SNS/SQS', 'Linux Server', 'CI/CD Pipelines'],
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'PostgreSQL', 'NoSQL', 'Database Design', 'Query Optimization'],
    },
    {
      title: 'Frontend',
      icon: Layout,
      skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      title: 'Engineering Practices',
      icon: Server,
      skills: ['Async Processing', 'Queue Systems', 'SOLID Principles', 'Clean Architecture', 'TDD', 'Agile'],
    },
    {
      title: 'Architecture & DevOps',
      icon: Shield,
      skills: ['Webhooks', 'DRY Principles', 'AI-Assisted Dev', 'Deployment Workflows'],
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

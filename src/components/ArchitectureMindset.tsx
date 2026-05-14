import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Database, Globe } from 'lucide-react';
import SectionHeader from './SectionHeader';

const MindsetCard = ({ title, description, icon: Icon, index }: { title: string, description: string, icon: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex flex-col gap-4 p-8 rounded-3xl bg-[var(--border)]/10 border border-[var(--border)] hover:border-primary/30 transition-all group"
  >
    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold tracking-tight">{title}</h3>
    <p className="text-sm text-[var(--text-muted)] leading-relaxed">{description}</p>
  </motion.div>
);

const ArchitectureMindset = () => {
  return (
    <section id="about" className="section-padding container-wide">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-tight uppercase">
            Architecting for <br />
            <span className="text-primary italic">Global Scalability.</span>
          </h2>
          <div className="space-y-6 text-lg text-[var(--text-muted)] leading-relaxed">
            <p>
              I am a Backend Software Engineer with a deep passion for building high-performance systems that don't just work—they excel under pressure. My expertise lies in the <span className="text-[var(--text)] font-semibold underline decoration-primary/30">PHP/Laravel ecosystem</span>, but my mindset is framework-agnostic.
            </p>
            <p>
              Whether it's designing multi-tenant architectures for complex SaaS platforms or provisioning resilient cloud environments on <span className="text-[var(--text)] font-semibold underline decoration-secondary/30">AWS</span>, I focus on security, atomicity, and developer experience.
            </p>
            <p>
              I believe that great software is built on the foundation of domain-driven design and clean, maintainable code. My goal is always to bridge the gap between complex business logic and robust technical infrastructure.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <MindsetCard 
            title="Scalability" 
            description="Engineering systems that handle millions of events with sub-second latency using distributed patterns."
            icon={Zap}
            index={0}
          />
          <MindsetCard 
            title="Resilience" 
            description="Building fault-tolerant architectures with automatic failover and circuit breaker patterns."
            icon={ShieldCheck}
            index={1}
          />
          <MindsetCard 
            title="Data Integrity" 
            description="Ensuring atomic transactions and eventual consistency in complex distributed environments."
            icon={Database}
            index={2}
          />
          <MindsetCard 
            title="Cloud Native" 
            description="Leveraging serverless and containerized environments for elastic, cost-effective infrastructure."
            icon={Globe}
            index={3}
          />
        </div>
      </div>
    </section>
  );
};

export default ArchitectureMindset;

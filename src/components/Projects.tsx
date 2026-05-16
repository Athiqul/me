import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Server, ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import ProjectModal from './ProjectModal';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  architecture: string;
  github?: string;
  live?: string;
  caseStudyFile: string;
}

const ProjectCard = ({ project, onOpenModal, index }: { project: Project, onOpenModal: (p: Project) => void, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="card group overflow-hidden flex flex-col p-0 bg-white hover:bg-gray-50 transition-all duration-500"
  >
    <div className="relative aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>

      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="text-[10px] px-2 py-1 rounded bg-black/50 backdrop-blur-md text-white border border-white/10 uppercase font-black tracking-widest">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className="p-8 flex flex-col flex-grow gap-6">
      <div>
        <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-[var(--text-muted)] text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      <div className="mt-auto space-y-4">
        <div className="flex items-start gap-3 p-3 rounded-xl bg-[var(--border)]/30 border border-[var(--border)]/50">
          <Server size={18} className="text-primary mt-1 flex-shrink-0" />
          <p className="text-xs font-medium text-[var(--text-muted)] leading-tight">
            <span className="text-[var(--text)] font-bold block mb-1">Impact & Architecture</span>
            {project.architecture}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
          <div className="flex items-center gap-4">

            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 text-[var(--text-muted)] hover:text-primary transition-colors">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
          <button
            onClick={() => onOpenModal(project)}
            className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 group/btn"
          >
            Full Case Study <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      title: 'BBS CMS',
      description: 'Multi-tenant WordPress provisioning and management platform engineered for tenant isolation, scalable deployment workflows, and centralized resource management.',
      image: 'projects/bbs-cms.webp',
      tech: ['Laravel', 'AWS', 'Multi-Tenancy', 'PHP'],
      architecture: 'Isolated database strategy with dynamic routing and high-availability AWS RDS integration.',
      github: 'https://github.com/Athiqul',
      caseStudyFile: 'projects/bbs-cms.md'
    },
    {
      title: 'YELL PAY',
      description: 'Payment processing platform focused on secure transaction handling, API integrations, and financial data integrity.',
      image: 'projects/fintech.jpg',
      tech: ['PHP', 'MySQL', 'API Bridges', 'Redis'],
      architecture: 'Distributed queue system for handling asynchronous transaction auditing and reporting.',
      github: 'https://play.google.com/store/search?q=10cr+mbank+pro&c=apps',
      caseStudyFile: 'projects/yell-pay.md'
    },
    {
      title: '10crmBank Pro',
      description: 'Fintech platform with 10k+ downloads supporting SMS-based transactions, wallet operations, and real-time ledger synchronization.',
      image: 'projects/gateway.jpg',
      tech: ['CodeIgniter 4', 'MySQL', 'REST API'],
      architecture: 'Stateless API design with robust token-based authentication and real-time ledger synchronization.',
      github: 'https://play.google.com/store/search?q=10cr+mbank+pro&c=apps',
      caseStudyFile: 'projects/10crmbank-pro.md'
    },
    {
      title: 'School Management System',
      description: 'ERP platform designed for managing student lifecycles, payroll, attendance, and academic operations through modular backend services.',
      image: 'projects/analytics.jpg',
      tech: ['Laravel', 'MySQL', 'Bootstrap'],
      architecture: 'Modular monolithic architecture with role-based access control and high-performance reporting modules.',
      github: 'https://github.com/Athiqul',
      caseStudyFile: 'projects/school-system.md'
    },
    {
      title: 'Owlet Framework',
      description: 'Private PHP framework powering large-scale CMS ecosystems with reusable modules, tenant management, and scalable architecture support.',
      image: 'projects/gateway.jpg',
      tech: ['PHP', 'Architecture', 'Framework Dev'],
      architecture: 'Custom modular foundation enabling rapid deployment of highly customized CMS environments.',
      github: 'https://github.com/Athiqul',
      caseStudyFile: 'projects/owlet-framework.md'
    },
  ];

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="section-padding container-wide">
      <SectionHeader
        title="Engineering Portfolio"
        subtitle="Selection of high-impact backend projects demonstrating expertise in scalability, financial systems, and enterprise architecture."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            project={project}
            index={idx}
            onOpenModal={handleOpenModal}
          />
        ))}
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;


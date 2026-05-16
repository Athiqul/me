import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    tech: string[];
    architecture: string;
    github?: string;
    live?: string;
    caseStudyFile?: string;
  } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && project?.caseStudyFile) {
      setLoading(true);
      fetch(project.caseStudyFile)
        .then((res) => res.text())
        .then((text) => {
          setContent(text);
          setLoading(false);
        })
        .catch(() => {
          setContent('Failed to load case study.');
          setLoading(false);
        });
    }
  }, [isOpen, project]);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header / Image Area */}
            <div className="relative h-48 md:h-64 flex-shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all z-10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-grow overflow-y-auto p-8 md:p-12 pt-0">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{project.title}</h2>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] px-2 py-1 rounded bg-primary/10 text-primary uppercase font-bold tracking-widest">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">

                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary py-2 px-4 text-xs">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <div className="prose max-w-none">
                  {loading ? (
                    <div className="flex items-center justify-center py-20">
                      <Loader2 size={40} className="animate-spin text-primary opacity-20" />
                    </div>
                  ) : (
                    <ReactMarkdown>{content}</ReactMarkdown>
                  )}
                </div>
              </div>
            </div>

            {/* Footer shadow fade */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

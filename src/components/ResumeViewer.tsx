import { useEffect, useState, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { Download, ChevronLeft, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePDF } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';
import { resumeData } from '../data/resumeData';

const ResumeViewer = () => {
  const [markdown, setMarkdown] = useState('');
  const [isReady, setIsReady] = useState(false);

  // Memoize the document to prevent unnecessary re-renders of the PDF engine
  const pdfDocument = useMemo(() => <ResumePDF data={resumeData} />, []);
  
  // Hook for generating the PDF
  const [instance] = usePDF({ document: pdfDocument });

  useEffect(() => {
    fetch('resume.md')
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
    
    // Ensure we are on client side
    setIsReady(true);
  }, []);

  const handleDownload = () => {
    if (instance.url) {
      const link = document.createElement('a');
      link.href = instance.url;
      link.download = 'Athiqul_Hasan_Momin_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (!isReady) return null;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Navigation / Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link to="/" className="btn-secondary py-2 flex items-center gap-2 hover:bg-gray-200">
            <ChevronLeft size={18} /> Back to Portfolio
          </Link>
          <div className="flex gap-3">
            <button
              onClick={handleDownload}
              disabled={instance.loading || !!instance.error}
              className="btn-primary py-2 flex items-center gap-2 shadow-lg hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {instance.loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Preparing...
                </>
              ) : (
                <>
                  <Download size={18} /> Download High-Quality PDF
                </>
              )}
            </button>
          </div>
        </div>

        {instance.error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-sm">
            Failed to generate PDF. Please try again later.
          </div>
        )}

        {/* Resume Content Container (Markdown View) */}
        <div className="shadow-2xl rounded-xl overflow-hidden border border-gray-200 bg-white p-12 md:p-20 text-black">
          <div className="prose-custom">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>

      <style>{`
        .prose-custom {
          font-family: 'Inter', sans-serif;
          color: #1a1a1a;
          line-height: 1.6;
        }
        .prose-custom h1 {
          font-size: 2.5rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }
        .prose-custom p:first-of-type {
          text-align: center;
          font-weight: 600;
          color: #3b82f6;
          margin-bottom: 2rem;
        }
        .prose-custom h2 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          border-bottom: 2px solid #f3f4f6;
          padding-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .prose-custom h3 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .prose-custom p {
          margin-bottom: 1rem;
          color: #4b5563;
        }
        .prose-custom ul {
          list-style-type: disc;
          margin-left: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .prose-custom li {
          margin-bottom: 0.5rem;
          color: #4b5563;
        }
        .prose-custom hr {
          margin: 2rem 0;
          border: none;
          border-top: 1px solid #f3f4f6;
        }
        .prose-custom strong {
          color: #111827;
        }
        .prose-custom a {
          color: #3b82f6;
          text-decoration: none;
        }
        .prose-custom a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default ResumeViewer;

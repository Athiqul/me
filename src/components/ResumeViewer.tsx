import React, { useEffect, useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { Download, ChevronLeft, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
// @ts-ignore
import html2pdf from 'html2pdf.js';

const ResumeViewer = () => {
  const [markdown, setMarkdown] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('resume.md')
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return;
    setIsDownloading(true);

    const element = resumeRef.current;
    
    // Improved options for better text rendering and layout preservation
    const opt = {
      margin: [15, 15, 15, 15],
      filename: 'Athiqul_Hasan_Momin_Resume.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { 
        scale: 4, // Higher scale for extreme clarity
        useCORS: true, 
        letterRendering: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: 1000 // Fixed width for consistent layout
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', compress: true },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    try {
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('PDF Generation Error:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0a0a0c] pt-24 pb-12 px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Navigation / Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link to="/" className="btn-secondary py-2 flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-white/10">
            <ChevronLeft size={18} /> Back to Portfolio
          </Link>
          <div className="flex gap-3">
            <button 
              onClick={handleDownloadPDF} 
              disabled={isDownloading}
              className="btn-primary py-2 flex items-center gap-2 shadow-lg hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Generating...
                </>
              ) : (
                <>
                  <Download size={18} /> Download Resume (PDF)
                </>
              )}
            </button>
          </div>
        </div>

        {/* Resume Content Container */}
        <div className="shadow-2xl rounded-xl overflow-hidden border border-gray-200 dark:border-white/5">
          <div 
            ref={resumeRef}
            className="bg-white p-12 md:p-20 resume-pdf-content text-black"
          >
            {/* We use a standard div structure instead of prose to avoid Tailwind layout bugs in PDF conversion */}
            <div className="pdf-typography">
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* PDF Specific Typography - Hand-crafted for perfect PDF exports */
        .pdf-typography {
          font-family: 'Inter', 'Segoe UI', Helvetica, Arial, sans-serif !important;
          color: #000 !important;
          line-height: 1.6 !important; /* Increased line height for readability */
        }
        
        .pdf-typography h1 {
          font-size: 32px !important;
          font-weight: 800 !important;
          text-align: center !important;
          margin-bottom: 8px !important;
          text-transform: uppercase !important;
          letter-spacing: -0.02em !important;
          line-height: 1.2 !important;
        }
        
        .pdf-typography h2 {
          font-size: 18px !important;
          font-weight: 700 !important;
          margin-top: 24px !important;
          margin-bottom: 12px !important;
          border-bottom: 2px solid #eee !important;
          padding-bottom: 4px !important;
          text-transform: uppercase !important;
          letter-spacing: 0.05em !important;
          color: #1a1a1a !important;
        }
        
        .pdf-typography h3 {
          font-size: 16px !important;
          font-weight: 700 !important;
          margin-top: 16px !important;
          margin-bottom: 6px !important;
          color: #333 !important;
        }
        
        .pdf-typography p {
          font-size: 14px !important;
          margin-bottom: 10px !important;
          color: #444 !important;
        }
        
        .pdf-typography ul {
          list-style-type: disc !important;
          margin-left: 20px !important;
          margin-bottom: 16px !important;
        }
        
        .pdf-typography li {
          font-size: 13.5px !important;
          margin-bottom: 6px !important;
          color: #444 !important;
        }
        
        .pdf-typography hr {
          border: none !important;
          border-top: 1px solid #ddd !important;
          margin: 20px 0 !important;
        }
        
        .pdf-typography strong {
          font-weight: 700 !important;
          color: #000 !important;
        }
        
        .pdf-typography a {
          color: #2563eb !important;
          text-decoration: none !important;
        }

        /* Ensure clean background in dark mode for the PDF container */
        .dark .resume-pdf-content {
          background-color: white !important;
          color: black !important;
        }
        
        /* Force specific widths during generation to prevent compression */
        @media screen and (max-width: 768px) {
          .resume-pdf-content {
            padding: 40px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumeViewer;

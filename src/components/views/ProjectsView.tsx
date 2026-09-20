import { Box, ArrowUpRight } from 'lucide-react';
import { Github } from '../common/Icons';
import { PROJECTS } from '../../data/projects';

export function ProjectsView() {
  return (
    <div className="shrink-0 bg-dash-card dark:bg-dash-darkcard p-6 md:p-10 rounded-[24px] border border-dash-border dark:border-dash-darkborder shadow-neumorphic dark:shadow-neumorphic-dark animate-[fadeIn_0.3s_ease-out] flex flex-col gap-8">
      <div className="border-b border-dash-border dark:border-dash-darkborder pb-6">
        <div className="flex items-center gap-2 text-[10px] font-bold text-dash-orange uppercase tracking-widest mb-2">
          <Box size={14} /> Portfolio
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Hardware & Logic Projects</h1>
        <p className="text-sm text-dash-muted dark:text-dash-darkmuted">
          Selected hardware designs, embedded systems, and silicon engineering projects.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {PROJECTS.map((proj) => (
          <div key={proj.title} className="bg-dash-bg dark:bg-dash-darkbg p-6 md:p-8 rounded-2xl border border-dash-border dark:border-dash-darkborder flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-3 h-3 rounded-full ${proj.color}`}></div>
                <span className="text-xs font-bold uppercase tracking-wider text-dash-muted">{proj.status}</span>
              </div>
              <h2 className="text-2xl font-bold mb-1">{proj.title}</h2>
              <div className="text-xs font-mono text-dash-orange mb-3">{proj.subtitle}</div>
              <p className="text-sm text-dash-muted dark:text-dash-darkmuted leading-relaxed mb-4">
                {proj.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tags.map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded bg-dash-card dark:bg-dash-darkcard border border-dash-border dark:border-dash-darkborder font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a 
                  href={proj.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-dash-card dark:bg-dash-darkcard border border-dash-border dark:border-dash-darkborder px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2 hover:border-dash-orange transition-colors"
                >
                  <Github size={14} /> GitHub <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
            {proj.image && (
              <div className="w-full md:w-64 flex justify-center shrink-0">
                <img src={proj.image} alt={proj.title} className="max-h-48 object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300 rounded-lg" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export const ProjectsContent = ProjectsView;

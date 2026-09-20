import { ArrowUpRight, FileText, File } from 'lucide-react';
import { Github } from '../common/Icons';
import { CURRENT_WORK_ITEMS, RECENT_PROJECTS } from '../../data/projects';
import type { TabType } from '../../types';

interface HomeViewProps {
  setActiveTab: (tab: TabType) => void;
}

export function HomeView({ setActiveTab }: HomeViewProps) {
  return (
    <div className="flex flex-col gap-4 animate-[fadeIn_0.3s_ease-out]">
      {/* Top Hero Card (shrink-0 prevents text clipping) */}
      <div className="shrink-0 bg-dash-card dark:bg-dash-darkcard p-6 md:p-8 rounded-[24px] flex justify-between shadow-neumorphic dark:shadow-neumorphic-dark border border-dash-border dark:border-dash-darkborder relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-dash-orange mb-2">I'm Amrit.</h1>
          <h2 className="text-lg md:text-xl font-medium mb-1">19 | Sophomore | Learner</h2>
          <p className="text-dash-muted dark:text-dash-darkmuted mb-6 md:mb-8 text-sm">Exploring hardware, systems and the in-between.</p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <button 
              onClick={() => setActiveTab('Projects')}
              className="bg-dash-orange text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-medium text-sm flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
            >
              Explore My Work <ArrowUpRight size={16} />
            </button>
            <button 
              onClick={() => setActiveTab('About')}
              className="border border-dash-border dark:border-dash-darkborder px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
            >
              <FileText size={16} /> View Profile
            </button>
          </div>
        </div>
        <div className="hidden sm:block text-right text-[10px] font-mono text-dash-orange opacity-60 leading-relaxed uppercase absolute right-8 top-8 z-10">
          Ideas<br/>Prototypes<br/>Progress<br/>—
        </div>
      </div>

      {/* Featured Project Card (shrink-0) */}
      <div id="projects" className="shrink-0 bg-dash-card dark:bg-dash-darkcard p-6 md:p-8 rounded-[24px] flex flex-col md:flex-row justify-between items-center shadow-neumorphic dark:shadow-neumorphic-dark border border-dash-border dark:border-dash-darkborder gap-6">
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-2 text-[10px] font-bold text-dash-muted uppercase tracking-widest mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-dash-green"></div> Featured Project
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-2">REFORGE</h2>
          <h3 className="text-base md:text-lg mb-4 text-dash-muted dark:text-dash-darkmuted">FPGA + ESP32 Development Board</h3>
          <p className="text-sm text-dash-muted dark:text-dash-darkmuted mb-6 leading-relaxed">
            A custom development board integrating an ESP32 microcontroller with an iCE40 FPGA. The ESP32 stores and loads FPGA designs through SPI, enabling dynamic hardware configuration. The current prototype performs a custom VGA implementation that renders real-time RGB color bands using the FPGA.
          </p>
          <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
            {['FPGA', 'ESP32', 'KiCad', 'Hardware'].map(tag => (
              <span key={tag} className="text-xs bg-[#E3D9CD] dark:bg-dash-darkborder text-dash-orange px-3 py-1.5 rounded-md font-medium">{tag}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <button 
              onClick={() => setActiveTab('Projects')}
              className="bg-dash-green text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
            >
              View Project <ArrowUpRight size={16} />
            </button>
            <a 
              href="https://github.com/kishoriju-vrind/Reforge" 
              target="_blank" 
              rel="noreferrer"
              className="border border-dash-border dark:border-dash-darkborder px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img 
            src="/reforge_pcb.png" 
            alt="REFORGE PCB" 
            className="w-[280px] md:w-[350px] max-w-full drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-lg object-contain" 
          />
        </div>
      </div>

      {/* Lower Dashboard Grid (shrink-0) */}
      <div className="shrink-0 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Currently Working On (SYNAPSE-32 REMOVED) */}
        <div className="bg-dash-card dark:bg-dash-darkcard p-6 rounded-[24px] border border-dash-border dark:border-dash-darkborder">
          <h3 className="text-sm font-bold flex items-center gap-2 mb-6">
            <ArrowUpRight size={16} className="text-dash-muted" /> Currently Working On
          </h3>
          <div className="flex flex-col gap-4">
            {CURRENT_WORK_ITEMS.map((item) => (
              <WorkItem key={item.title} color={item.color} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>

        {/* Recent Projects (SYNAPSE-32 REMOVED) */}
        <div className="bg-dash-card dark:bg-dash-darkcard p-6 rounded-[24px] border border-dash-border dark:border-dash-darkborder">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold flex items-center gap-2">
              <File size={16} className="text-dash-muted" /> Recent Projects
            </h3>
            <span 
              onClick={() => setActiveTab('Projects')}
              className="text-[10px] uppercase font-bold text-dash-muted cursor-pointer hover:text-dash-text dark:hover:text-dash-darktext transition-colors"
            >
              View All →
            </span>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-2">
            {RECENT_PROJECTS.map((project) => (
              <RecentProjectBox 
                key={project.title} 
                title={project.title} 
                sub={project.sub} 
                color={project.color} 
                tags={project.tags} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkItem({ color, title, desc }: { color: string, title: string, desc: string }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <div className={`w-2 h-2 rounded-full shrink-0 ${color}`}></div>
      <span className="font-bold w-28 shrink-0">{title}</span>
      <span className="text-dash-muted">{desc}</span>
    </div>
  );
}

function RecentProjectBox({ title, sub, color, tags }: { title: string, sub: string, color: string, tags: string[] }) {
  return (
    <div className="bg-dash-bg dark:bg-dash-darkbg p-4 rounded-xl flex-1 border border-dash-border dark:border-dash-darkborder">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-8 h-8 rounded-lg shadow-inner shrink-0 ${color}`}></div>
        <div>
          <div className="font-bold text-xs">{title}</div>
          <div className="text-[9px] text-dash-muted">{sub}</div>
        </div>
      </div>
      <div className="flex justify-between items-center text-[9px] font-mono text-dash-muted">
        <div className="flex gap-2">
          {tags.map(t => <span key={t}>{t}</span>)}
        </div>
        <ArrowUpRight size={12} />
      </div>
    </div>
  );
}
export const HomeContent = HomeView;

import type { ReactNode } from 'react';
import { Home, User, Box, FileText, Mail } from 'lucide-react';
import { Github, Linkedin, XIcon } from '../common/Icons';
import type { TabType } from '../../types';

interface SidebarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

interface NavItemDef {
  label: TabType;
  icon: ReactNode;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems: NavItemDef[] = [
    { label: 'Home', icon: <Home size={18} /> },
    { label: 'About', icon: <User size={18} /> },
    { label: 'Projects', icon: <Box size={18} /> },
    { label: 'Blog', icon: <FileText size={18} /> },
    { label: 'Contact', icon: <Mail size={18} /> },
  ];

  return (
    <aside className="w-full lg:w-64 flex flex-col justify-between py-4 pr-0 lg:pr-4 shrink-0">
      <div>
        <div className="mb-4 lg:mb-10 pl-2 lg:pl-4 flex lg:flex-col items-center lg:items-start gap-3 lg:gap-0">
          <div className="text-3xl lg:text-5xl font-bold lg:mb-2 tracking-tighter w-10 h-10 lg:w-auto lg:h-auto rounded-xl bg-[#E3D9CD] dark:bg-dash-darkborder text-dash-orange lg:text-dash-text lg:dark:text-white flex items-center justify-center lg:bg-transparent lg:dark:bg-transparent shrink-0">A</div>
          <div>
            <h1 className="font-bold text-sm tracking-widest uppercase">Amrit Tiwari</h1>
            <p className="text-xs text-dash-muted dark:text-dash-darkmuted mt-0.5 lg:mt-1 leading-tight lg:leading-relaxed">
              Electrical Engineer<span className="hidden lg:inline"><br/></span><span className="lg:hidden"> • </span>VJTI Mumbai
            </p>
          </div>
        </div>
        <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 -mx-1 px-1 lg:mx-0 lg:px-0">
          {navItems.map((item) => (
            <NavItem 
              key={item.label}
              icon={item.icon} 
              label={item.label} 
              active={activeTab === item.label} 
              onClick={() => setActiveTab(item.label)}
            />
          ))}
        </nav>
      </div>
      <div className="hidden lg:block pl-2 lg:pl-4 pb-4 mt-6 lg:mt-0">
        <p className="font-handwriting text-2xl -rotate-6 text-dash-muted dark:text-dash-darkmuted opacity-80 mb-6 lg:mb-8">
          Same curiosity.<br/>Different ideas.
        </p>
        <div className="text-[10px] text-dash-muted dark:text-dash-darkmuted mb-4">
          v1.0.0 <br/>© 2026 Amrit Tiwari
        </div>
        <div className="flex gap-4 text-dash-muted dark:text-dash-darkmuted items-center">
          <a href="https://github.com/amrit-reboot" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="cursor-pointer hover:text-dash-text dark:hover:text-white transition-colors">
            <Github size={16} />
          </a>
          <a href="https://www.linkedin.com/in/amrit-tiwari-at1010/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="cursor-pointer hover:text-dash-text dark:hover:text-white transition-colors">
            <Linkedin size={16} />
          </a>
          <a href="https://x.com/amrit_reboot" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="cursor-pointer hover:text-dash-text dark:hover:text-white transition-colors">
            <XIcon size={14} />
          </a>
          <a href="mailto:atiwari.at07@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="cursor-pointer hover:text-dash-text dark:hover:text-white transition-colors">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </aside>
  );
}

function NavItem({ 
  icon, 
  label, 
  active = false,
  onClick
}: { 
  icon: ReactNode; 
  label: string; 
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button 
      onClick={onClick}
      className={`shrink-0 whitespace-nowrap flex items-center gap-2 lg:gap-3 px-3.5 lg:px-4 py-2 lg:py-3 rounded-xl text-xs lg:text-sm font-medium transition-all cursor-pointer ${
        active 
        ? 'bg-[#E3D9CD] dark:bg-dash-darkborder text-dash-orange dark:text-dash-orange shadow-sm' 
        : 'text-dash-text dark:text-dash-darktext hover:bg-black/5 dark:hover:bg-white/5'
      }`}
    >
      {icon} {label}
    </button>
  );
}

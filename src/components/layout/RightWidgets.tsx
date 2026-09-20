import { useState, useEffect } from 'react';
import { Sun, ArrowUpRight, Mail } from 'lucide-react';
import { Github, Linkedin, XIcon } from '../common/Icons';
import { QuickLink } from '../common/QuickLink';
import { MusicPlayer } from '../player/MusicPlayer';

export function RightWidgets() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <aside className="w-full lg:w-80 flex flex-col gap-4 overflow-y-auto h-full pr-0 lg:pr-2 pb-10 shrink-0">
      <div className="bg-dash-card dark:bg-dash-darkcard p-6 rounded-[24px] border border-dash-border dark:border-dash-darkborder relative">
        <Sun size={20} className="absolute top-6 right-6 text-dash-orange opacity-80" />
        <div className="text-xs text-dash-muted font-medium mb-1">
          {time.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}
        </div>
        <div className="text-4xl font-bold tracking-tighter mb-4">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
        <div className="text-xs font-mono text-dash-muted opacity-70">
          "A little progress<br/>every day."<br/>—
        </div>
      </div>

      <MusicPlayer />

      <div className="bg-dash-card dark:bg-dash-darkcard p-6 rounded-[24px] border border-dash-border dark:border-dash-darkborder">
        <div className="flex justify-between items-center mb-4 text-sm font-bold">
          Quick Links <ArrowUpRight size={16} />
        </div>
        <div className="grid grid-cols-4 gap-2 text-center">
          <QuickLink icon={<Github size={18}/>} label="GitHub" href="https://github.com/amrit-reboot" />
          <QuickLink icon={<Linkedin size={18}/>} label="LinkedIn" href="https://www.linkedin.com/in/amrit-tiwari-at1010/" />
          <QuickLink icon={<XIcon size={16}/>} label="X" href="https://x.com/amrit_reboot" />
          <QuickLink icon={<Mail size={18}/>} label="Email" href="mailto:atiwari.at07@gmail.com" />
        </div>
      </div>

      <div className="shrink-0 bg-[#1C252B] p-6 rounded-[24px] flex flex-col relative overflow-hidden border border-[#2D3A44] shadow-xl">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a5d?q=80&w=600')] bg-cover bg-center"></div>
        <div className="relative z-10 text-white font-mono text-xs opacity-80 leading-relaxed">
          Better<br/>Hardware.<br/>Brighter<br/>Tomorrow.<br/>—
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="lg:hidden flex flex-col items-center text-center pt-4 pb-8 text-dash-muted dark:text-dash-darkmuted">
        <p className="font-handwriting text-2xl -rotate-3 opacity-80 mb-3">
          Same curiosity. Different ideas.
        </p>
        <div className="text-[10px] mb-3">
          v1.0.0 • © 2026 Amrit Tiwari
        </div>
        <div className="flex gap-4 items-center">
          <a href="https://github.com/amrit-reboot" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-dash-text dark:hover:text-white transition-colors">
            <Github size={16} />
          </a>
          <a href="https://www.linkedin.com/in/amrit-tiwari-at1010/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-dash-text dark:hover:text-white transition-colors">
            <Linkedin size={16} />
          </a>
          <a href="https://x.com/amrit_reboot" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-dash-text dark:hover:text-white transition-colors">
            <XIcon size={14} />
          </a>
          <a href="mailto:atiwari.at07@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="hover:text-dash-text dark:hover:text-white transition-colors">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </aside>
  );
}

import { Mail } from 'lucide-react';
import { Github, Linkedin, XIcon } from '../common/Icons';

export function ContactView() {
  return (
    <div className="shrink-0 bg-dash-card dark:bg-dash-darkcard p-6 md:p-10 rounded-[24px] border border-dash-border dark:border-dash-darkborder shadow-neumorphic dark:shadow-neumorphic-dark animate-[fadeIn_0.3s_ease-out] flex flex-col gap-8">
      <div className="border-b border-dash-border dark:border-dash-darkborder pb-6">
        <div className="flex items-center gap-2 text-[10px] font-bold text-dash-orange uppercase tracking-widest mb-2">
          <Mail size={14} /> Contact
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Get in Touch</h1>
        <p className="text-sm text-dash-muted dark:text-dash-darkmuted">
          Interested in discussing hardware design, embedded systems, or collaborative projects? Reach out anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a 
          href="mailto:atiwari.at07@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-5 rounded-2xl bg-dash-bg dark:bg-dash-darkbg border border-dash-border dark:border-dash-darkborder hover:border-dash-orange transition-colors flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-dash-orange/10 text-dash-orange flex items-center justify-center shrink-0">
            <Mail size={22} />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-bold uppercase text-dash-muted">Email</div>
            <div className="text-sm font-bold truncate">atiwari.at07@gmail.com</div>
          </div>
        </a>

        <a 
          href="https://www.linkedin.com/in/amrit-tiwari-at1010/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-5 rounded-2xl bg-dash-bg dark:bg-dash-darkbg border border-dash-border dark:border-dash-darkborder hover:border-dash-orange transition-colors flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
            <Linkedin size={22} />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-bold uppercase text-dash-muted">LinkedIn</div>
            <div className="text-sm font-bold truncate">amrit-tiwari-at1010</div>
          </div>
        </a>

        <a 
          href="https://x.com/amrit_reboot" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-5 rounded-2xl bg-dash-bg dark:bg-dash-darkbg border border-dash-border dark:border-dash-darkborder hover:border-dash-orange transition-colors flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-black/10 dark:bg-white/10 text-dash-text dark:text-white flex items-center justify-center shrink-0">
            <XIcon size={20} />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-bold uppercase text-dash-muted">X (Twitter)</div>
            <div className="text-sm font-bold truncate">@amrit_reboot</div>
          </div>
        </a>

        <a 
          href="https://github.com/amrit-reboot" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-5 rounded-2xl bg-dash-bg dark:bg-dash-darkbg border border-dash-border dark:border-dash-darkborder hover:border-dash-orange transition-colors flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-dash-card dark:bg-dash-darkcard text-dash-text dark:text-dash-darktext flex items-center justify-center shrink-0">
            <Github size={22} />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-bold uppercase text-dash-muted">GitHub</div>
            <div className="text-sm font-bold truncate">amrit-reboot</div>
          </div>
        </a>
      </div>
    </div>
  );
}
export const ContactContent = ContactView;


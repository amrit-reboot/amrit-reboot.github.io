import { User, ArrowUpRight } from 'lucide-react';
import type { TabType } from '../../types';

interface AboutViewProps {
  setActiveTab: (tab: TabType) => void;
}

export function AboutContent() {
  return (
    <div className="space-y-6 text-lg leading-relaxed max-w-3xl lowercase">
      <p>hey</p>
      <p>i’m a pretty curious guy who likes talking to people and hearing different takes on things.</p>
      <p>lately i’ve been deep into <strong className="text-dash-orange">VLSI, digital design and semiconductors.</strong></p>
      <p>love pulling hardware apart and bringing ideas to life with Verilog and KiCad.<br/>
      at the same time i’m big on building communities — been running events and ops while studying.</p>
      <p>for me it just comes down to learning fast and making stuff that works,<br/>
      whether that’s a PCB or some campus-wide thing.</p>
    </div>
  );
}

export function AboutView({ setActiveTab }: AboutViewProps) {
  const coreDomains = [
    'Digital Logic', 'RISC-V', 'Verilog', 'FPGA', 
    'KiCad', 'High-Speed PCB', 'Embedded C', 'Signal Integrity'
  ];

  return (
    <div className="bg-dash-card dark:bg-dash-darkcard p-6 md:p-10 rounded-[24px] border border-dash-border dark:border-dash-darkborder shadow-neumorphic dark:shadow-neumorphic-dark animate-[fadeIn_0.3s_ease-out] flex flex-col gap-8">
      <div className="border-b border-dash-border dark:border-dash-darkborder pb-6">
        <div className="flex items-center gap-2 text-[10px] font-bold text-dash-orange uppercase tracking-widest mb-2">
          <User size={14} /> About Me
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Amrit Tiwari</h1>
        <p className="text-base text-dash-muted dark:text-dash-darkmuted">
          Electrical Engineer & Hardware Systems Builder • VJTI Mumbai
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <AboutContent />

          <div className="pt-4 flex flex-wrap gap-4">
            <button 
              onClick={() => setActiveTab('Projects')}
              className="bg-dash-orange text-white px-5 py-2.5 rounded-lg text-xs font-medium flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
            >
              Explore Projects <ArrowUpRight size={14} />
            </button>
            <button 
              onClick={() => setActiveTab('Contact')}
              className="border border-dash-border dark:border-dash-darkborder px-5 py-2.5 rounded-lg text-xs font-medium flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-dash-bg dark:bg-dash-darkbg p-5 rounded-2xl border border-dash-border dark:border-dash-darkborder">
            <h3 className="text-xs font-bold uppercase tracking-wider text-dash-orange mb-3">Education</h3>
            <div className="text-sm font-bold">Veermata Jijabai Technological Institute (VJTI)</div>
            <div className="text-xs text-dash-muted mt-0.5">Mumbai, India</div>
            <div className="text-xs text-dash-green font-medium mt-2">B.Tech in Electrical Engineering</div>
          </div>

          <div className="bg-dash-bg dark:bg-dash-darkbg p-5 rounded-2xl border border-dash-border dark:border-dash-darkborder">
            <h3 className="text-xs font-bold uppercase tracking-wider text-dash-orange mb-3">Core Domains</h3>
            <div className="flex flex-wrap gap-1.5">
              {coreDomains.map(skill => (
                <span key={skill} className="text-[11px] px-2.5 py-1 rounded bg-dash-card dark:bg-dash-darkcard border border-dash-border dark:border-dash-darkborder font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

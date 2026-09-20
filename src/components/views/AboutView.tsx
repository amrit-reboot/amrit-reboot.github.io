import { User, ArrowUpRight } from 'lucide-react';
import type { TabType } from '../../types';

interface AboutViewProps {
  setActiveTab: (tab: TabType) => void;
}

export function AboutView({ setActiveTab }: AboutViewProps) {
  const coreDomains = [
    'Digital Logic', 'RISC-V', 'Verilog', 'FPGA', 
    'KiCad', 'High-Speed PCB', 'Embedded C', 'Signal Integrity'
  ];

  return (
    <div className="shrink-0 bg-dash-card dark:bg-dash-darkcard p-6 md:p-10 rounded-[24px] border border-dash-border dark:border-dash-darkborder shadow-neumorphic dark:shadow-neumorphic-dark animate-[fadeIn_0.3s_ease-out] flex flex-col gap-8">
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
        <div className="md:col-span-2 space-y-4 text-sm leading-relaxed text-dash-muted dark:text-dash-darkmuted">
          <p>
            I'm a highly curious, naturally jovial guy who loves striking up conversations and hearing fresh perspectives.
          </p>
          <p>
            Lately, I've developed a serious focus on VLSI, digital design, and semiconductors.
          </p>
          <p>
            I love pulling apart the intricacies of hardware and bringing concepts to life using tools like Verilog and KiCad. But I'm equally passionate about building communities. I've headed up events and operations along with my academic journey.
          </p>
          <p>
            For me, it all comes down to learning quickly and building practical solutions—whether that's a PCB layout or a campus-wide initiative.
          </p>

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
export const AboutContent = AboutView;

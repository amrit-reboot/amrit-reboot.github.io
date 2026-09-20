import { ArrowUpRight } from 'lucide-react';

export function BlogView() {
  return (
    <div className="space-y-8 max-w-3xl">
      <div className="p-6 border-l-4 border-dash-orange bg-black/5 dark:bg-white/5 rounded-r-xl flex flex-col gap-4">
        <div className="text-xs font-mono text-dash-muted">LATEST ENTRY</div>
        <h2 className="text-2xl font-bold">Building SYNAPSE-32</h2>
        <p className="text-dash-muted dark:text-dash-darkmuted leading-relaxed">
          A comprehensive deep dive into designing a 32-bit RISC-V CPU core in Verilog. 
          This project covers the implementation of the RV32I base integer instruction set, 
          a 3-stage instruction pipeline (Fetch, Decode, Execute), and robust data hazard 
          management using Forwarding and Hazard Detection units.
        </p>
        <a 
          href="https://github.com/amrit-reboot/Reforge/blob/Amrit/Synapse32_blog.md" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold text-dash-orange hover:opacity-80 transition-opacity w-fit mt-2"
        >
          Read full article on GitHub <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}

export const BlogContent = BlogView;


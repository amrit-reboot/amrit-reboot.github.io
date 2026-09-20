import type { ReactNode } from 'react';

interface QuickLinkProps {
  icon: ReactNode;
  label: string;
  href?: string;
}

export function QuickLink({ icon, label, href = "#" }: QuickLinkProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto');
  return (
    <a 
      href={href} 
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="flex flex-col items-center gap-1 p-2 rounded-xl bg-dash-bg dark:bg-dash-darkbg border border-dash-border dark:border-dash-darkborder hover:border-dash-orange hover:text-dash-orange transition-colors"
    >
      <div className="text-dash-text dark:text-dash-darktext">{icon}</div>
      <span className="text-[9px] font-bold text-dash-muted">{label}</span>
    </a>
  );
}

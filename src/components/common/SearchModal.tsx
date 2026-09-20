import { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X, Home, Box, FileText, ExternalLink, Cpu, ArrowRight, Music } from 'lucide-react';
import type { TabType } from '../../types';
import { PLAYLIST } from '../../data/playlist';

export interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: TabType) => void;
}

interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Pages' | 'Projects' | 'Blog' | 'Skills' | 'Music' | 'Connect';
  tab?: TabType;
  url?: string;
}

export function SearchModal({ isOpen, onClose, onSelectTab }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const items: SearchItem[] = useMemo(() => {
    const baseItems: SearchItem[] = [
      // Navigation Pages
      { id: 'page-home', title: 'Home', subtitle: 'Overview, featured REFORGE card & current work', category: 'Pages', tab: 'Home' },
      { id: 'page-about', title: 'About Me', subtitle: 'Background, education at VJTI & personal journey', category: 'Pages', tab: 'About' },
      { id: 'page-projects', title: 'Projects', subtitle: 'Hardware designs, FPGA systems & PCB layouts', category: 'Pages', tab: 'Projects' },
      { id: 'page-blog', title: 'Blog', subtitle: 'Technical writeups and CPU engineering notes', category: 'Pages', tab: 'Blog' },
      { id: 'page-contact', title: 'Contact', subtitle: 'Reach out via Email, LinkedIn, X, or GitHub', category: 'Pages', tab: 'Contact' },

      // Projects & Technical Work
      { id: 'proj-reforge', title: 'REFORGE Development Board', subtitle: 'FPGA (iCE40) + ESP32 hybrid dev board with VGA', category: 'Projects', tab: 'Projects' },
      { id: 'proj-synapse', title: 'Building SYNAPSE-32', subtitle: '32-bit RISC-V CPU Core in Verilog (RV32I base)', category: 'Blog', tab: 'Blog' },

      // Core Domains & Skills
      { id: 'skill-digital', title: 'Digital Logic & VLSI', subtitle: 'RTL design, logic synthesis and verification', category: 'Skills', tab: 'About' },
      { id: 'skill-verilog', title: 'Verilog & Hardware Description', subtitle: 'RTL coding, testbenches, and FPGA implementation', category: 'Skills', tab: 'About' },
      { id: 'skill-fpga', title: 'FPGA Development', subtitle: 'iCE40 FPGA architecture, bitstream loading via SPI', category: 'Skills', tab: 'Projects' },
      { id: 'skill-kicad', title: 'KiCad & High-Speed PCB', subtitle: 'Multilayer PCB routing, power distribution, signal integrity', category: 'Skills', tab: 'About' },
      { id: 'skill-riscv', title: 'RISC-V Architecture', subtitle: '3-stage pipelining, hazard detection, forwarding unit', category: 'Skills', tab: 'Blog' },

      // External & Social Links
      { id: 'link-github', title: 'GitHub Profile', subtitle: 'github.com/amrit-reboot', category: 'Connect', url: 'https://github.com/amrit-reboot' },
      { id: 'link-reforge-repo', title: 'REFORGE Repository', subtitle: 'github.com/kishoriju-vrind/Reforge', category: 'Connect', url: 'https://github.com/kishoriju-vrind/Reforge' },
      { id: 'link-blog-article', title: 'SYNAPSE-32 Article on GitHub', subtitle: 'Reforge/blob/Amrit/Synapse32_blog.md', category: 'Connect', url: 'https://github.com/amrit-reboot/Reforge/blob/Amrit/Synapse32_blog.md' },
      { id: 'link-linkedin', title: 'LinkedIn', subtitle: 'linkedin.com/in/amrit-tiwari-at1010', category: 'Connect', url: 'https://www.linkedin.com/in/amrit-tiwari-at1010/' },
      { id: 'link-x', title: 'X (Twitter)', subtitle: '@amrit_reboot', category: 'Connect', url: 'https://x.com/amrit_reboot' },
      { id: 'link-email', title: 'Email Amrit', subtitle: 'atiwari.at07@gmail.com', category: 'Connect', url: 'mailto:atiwari.at07@gmail.com' },
    ];

    const musicItems: SearchItem[] = PLAYLIST.map((track, i) => ({
      id: `music-${i}`,
      title: track.title,
      subtitle: `${track.artist} • Playlist Track ${i + 1}`,
      category: 'Music',
      tab: 'Home',
    }));

    return [...baseItems, ...musicItems];
  }, []);

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return items.filter(it => it.category === 'Pages' || it.id === 'proj-reforge' || it.id === 'proj-synapse');
    }
    return items.filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  }, [items, query]);

  const handleClose = () => {
    setQuery('');
    setSelectedIndex(0);
    onClose();
  };

  const handleSelectItem = (item: SearchItem) => {
    handleClose();
    if (item.tab) {
      onSelectTab(item.tab);
    } else if (item.url) {
      window.open(item.url, '_blank', 'noreferrer');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        handleSelectItem(filteredItems[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleClose();
    }
  };

  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.children[selectedIndex] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  const getCategoryIcon = (category: SearchItem['category']) => {
    switch (category) {
      case 'Pages': return <Home size={16} className="text-dash-orange" />;
      case 'Projects': return <Box size={16} className="text-dash-green" />;
      case 'Blog': return <FileText size={16} className="text-dash-orange" />;
      case 'Skills': return <Cpu size={16} className="text-blue-500" />;
      case 'Music': return <Music size={16} className="text-purple-500" />;
      case 'Connect': return <ExternalLink size={16} className="text-dash-muted" />;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-12 sm:pt-20 px-3 sm:px-4 animate-[fadeIn_0.15s_ease-out]"
      onClick={handleClose}
    >
      <div 
        className="w-full max-w-xl bg-dash-card dark:bg-dash-darkcard rounded-2xl sm:rounded-3xl border border-dash-border dark:border-dash-darkborder shadow-2xl overflow-hidden flex flex-col max-h-[80vh] sm:max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <div className="flex items-center gap-3 px-4 sm:px-6 py-4 border-b border-dash-border dark:border-dash-darkborder">
          <Search size={20} className="text-dash-orange shrink-0" />
          <input 
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search pages, projects, blogs, skills, music..."
            className="w-full bg-transparent outline-none text-sm sm:text-base text-dash-text dark:text-dash-darktext placeholder:text-dash-muted"
          />
          {query && (
            <button 
              onClick={() => {
                setQuery('');
                setSelectedIndex(0);
              }}
              className="text-dash-muted hover:text-dash-text p-1 rounded-md cursor-pointer"
              aria-label="Clear query"
            >
              <X size={16} />
            </button>
          )}
          <button 
            onClick={handleClose}
            className="text-[11px] font-mono px-2 py-1 rounded bg-black/5 dark:bg-white/5 text-dash-muted border border-dash-border dark:border-dash-darkborder hover:text-dash-text cursor-pointer"
          >
            ESC
          </button>
        </div>

        <div ref={listRef} className="overflow-y-auto p-2 sm:p-3 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-dash-muted dark:text-dash-darkmuted text-sm">
              No results found for "<span className="font-semibold text-dash-orange">{query}</span>"
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectItem(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between gap-3 px-3 sm:px-4 py-3 rounded-xl cursor-pointer transition-colors ${
                    isSelected 
                      ? 'bg-black/5 dark:bg-white/10 text-dash-text dark:text-white' 
                      : 'hover:bg-black/5 dark:hover:bg-white/5 text-dash-text dark:text-dash-darktext'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-dash-bg dark:bg-dash-darkbg shrink-0">
                      {getCategoryIcon(item.category)}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-bold truncate flex items-center gap-2">
                        {item.title}
                        {item.category === 'Projects' && (
                          <span className="text-[9px] font-mono font-normal uppercase bg-dash-green/10 text-dash-green px-1.5 py-0.5 rounded">
                            Project
                          </span>
                        )}
                        {item.category === 'Blog' && (
                          <span className="text-[9px] font-mono font-normal uppercase bg-dash-orange/10 text-dash-orange px-1.5 py-0.5 rounded">
                            Article
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-dash-muted truncate">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono uppercase text-dash-muted hidden sm:inline px-2 py-0.5 rounded bg-black/5 dark:bg-white/5">
                      {item.category}
                    </span>
                    {isSelected && (
                      <ArrowRight size={14} className="text-dash-orange" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="px-4 py-2.5 bg-black/5 dark:bg-white/5 border-t border-dash-border dark:border-dash-darkborder flex items-center justify-between text-[11px] font-mono text-dash-muted">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1.5 py-0.5 rounded bg-dash-card dark:bg-dash-darkcard border border-dash-border dark:border-dash-darkborder">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-dash-card dark:bg-dash-darkcard border border-dash-border dark:border-dash-darkborder">↓</kbd> Navigate</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-dash-card dark:bg-dash-darkcard border border-dash-border dark:border-dash-darkborder">↵</kbd> Select</span>
          </div>
          <span><kbd className="px-1.5 py-0.5 rounded bg-dash-card dark:bg-dash-darkcard border border-dash-border dark:border-dash-darkborder">ESC</kbd> Close</span>
        </div>
      </div>
    </div>
  );
}

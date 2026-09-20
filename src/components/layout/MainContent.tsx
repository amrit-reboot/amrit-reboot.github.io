import { useState, useEffect } from 'react';
import { Search, Sun, Moon } from 'lucide-react';
import type { TabType } from '../../types';
import { HomeView } from '../views/HomeView';
import { AboutView } from '../views/AboutView';
import { ProjectsView } from '../views/ProjectsView';
import { BlogView } from '../views/BlogView';
import { ContactView } from '../views/ContactView';
import { SearchModal } from '../common/SearchModal';

interface MainContentProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}

export function MainContent({ 
  activeTab, 
  setActiveTab, 
  darkMode, 
  setDarkMode 
}: MainContentProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="flex-1 flex flex-col gap-4 overflow-y-auto pr-0 lg:pr-2 pb-10 min-w-0">
      <header className="shrink-0 flex justify-between items-center bg-dash-card dark:bg-dash-darkcard px-4 sm:px-6 py-3 sm:py-4 rounded-[24px] shadow-neumorphic dark:shadow-neumorphic-dark border border-dash-border dark:border-dash-darkborder">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-dash-muted dark:text-dash-darkmuted font-medium">
          <div className="w-2 h-2 rounded-full bg-dash-orange"></div>
          {activeTab === 'Home' ? 'Good evening, Explorer.' : `Section / ${activeTab}`}
        </div>
        <div className="flex gap-2 sm:gap-4 items-center">
          {/* Desktop Search Bar */}
          <div 
            onClick={() => setIsSearchOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-lg text-sm text-dash-muted hover:border-dash-orange border border-transparent transition-all cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label="Open search dialog"
          >
            <Search size={16} />
            <span className="w-32 md:w-48 text-left truncate select-none">Search anything...</span>
            <span className="text-[10px] border border-dash-border dark:border-dash-darkborder px-1.5 py-0.5 rounded font-mono">Ctrl K</span>
          </div>

          {/* Mobile Search Icon Button */}
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="sm:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-dash-muted hover:text-dash-text transition-colors cursor-pointer"
            aria-label="Open search"
          >
            <Search size={18} />
          </button>

          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      {activeTab === 'Home' && <HomeView setActiveTab={setActiveTab} />}
      {activeTab === 'About' && (
        <div className="w-full flex flex-col animate-[fadeIn_0.3s_ease-out]">
          <AboutView setActiveTab={setActiveTab} />
        </div>
      )}
      {activeTab === 'Projects' && (
        <div className="w-full flex flex-col animate-[fadeIn_0.3s_ease-out]">
          <ProjectsView />
        </div>
      )}
      {activeTab === 'Blog' && (
        <div className="w-full flex flex-col animate-[fadeIn_0.3s_ease-out]">
          <BlogView />
        </div>
      )}
      {activeTab === 'Contact' && (
        <div className="w-full flex flex-col animate-[fadeIn_0.3s_ease-out]">
          <ContactView />
        </div>
      )}

      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onSelectTab={setActiveTab} 
      />
    </main>
  );
}

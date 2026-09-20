import { useState, useEffect } from 'react';
import type { TabType } from './types';
import { Sidebar } from './components/layout/Sidebar';
import { MainContent } from './components/layout/MainContent';
import { RightWidgets } from './components/layout/RightWidgets';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('Home');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen w-full p-3 sm:p-4 gap-3 sm:gap-4 max-w-[1600px] mx-auto overflow-y-auto lg:overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <MainContent 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />
      <RightWidgets />
    </div>
  );
}

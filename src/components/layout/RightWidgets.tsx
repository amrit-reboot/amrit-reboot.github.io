import { useState, useEffect } from 'react';
import { Sun } from 'lucide-react';
import { MusicPlayer } from '../player/MusicPlayer';

export function RightWidgets() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <aside className="w-full lg:w-80 flex flex-col gap-4 h-full pr-0 lg:pr-2 pb-10">
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

      <div className="bg-[#1C252B] p-6 rounded-[24px] flex flex-col relative overflow-hidden border border-[#2D3A44] shadow-xl">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a5d?q=80&w=600')] bg-cover bg-center"></div>
        <div className="relative z-10 text-white font-mono text-xs opacity-80 leading-relaxed">
          Better<br/>Hardware.<br/>Brighter<br/>Tomorrow.<br/>—
        </div>
      </div>
    </aside>
  );
}

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat } from 'lucide-react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Example playlist - easily expandable
  const playlist = [
    {
      title: "Daft Punk - Get Lucky",
      subtitle: "Official Audio ft. Pharrell Williams",
      src: "Daft Punk - Get Lucky (Official Audio) ft. Pharrell Williams, Nile Rodgers.mp3"
    },
    // Add more tracks here if needed
    {
      title: "Second Track Placeholder",
      subtitle: "Update src to your local file",
      src: "track2.mp3" 
    }
  ];

  const currentTrack = playlist[currentTrackIndex];

  // Auto-play when skipping tracks IF it was already playing
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch((err) => console.log("Audio play interrupted:", err));
    }
  }, [currentTrackIndex, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  const updateProgress = () => {
    if (audioRef.current && audioRef.current.duration) {
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    }
  };

  // Format time in mm:ss
  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "00:00";
    const m = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const s = Math.floor(timeInSeconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="bg-dash-card dark:bg-dash-darkcard p-6 rounded-[24px] border border-dash-border dark:border-dash-darkborder shadow-neumorphic dark:shadow-neumorphic-dark">
      <div className="flex justify-between items-center mb-6 text-sm font-bold">
        Now Playing 
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </div>
      
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-16 h-16 rounded-full bg-[#111] shadow-[inset_0_0_0_4px_#333,0_4px_10px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 ${isPlaying ? 'animate-[spin_3s_linear_infinite]' : ''}`}>
          <div className="w-4 h-4 bg-dash-orange rounded-full border-[3px] border-[#111]"></div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-bold truncate">{currentTrack.title}</div>
          <div className="text-[10px] text-dash-muted mt-1 leading-tight truncate">
            {currentTrack.subtitle}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mb-4">
        <Repeat size={14} className="text-dash-muted cursor-not-allowed opacity-50" />
        <SkipBack size={16} onClick={handlePrev} className="text-dash-muted hover:text-dash-text cursor-pointer transition-colors" />
        <button onClick={togglePlay} className="w-10 h-10 rounded-full bg-dash-orange text-white flex items-center justify-center hover:opacity-90 shadow-lg transition-transform active:scale-95">
          {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-1" />}
        </button>
        <SkipForward size={16} onClick={handleNext} className="text-dash-muted hover:text-dash-text cursor-pointer transition-colors" />
      </div>

      <div>
        <div className="h-1 bg-dash-border dark:bg-dash-darkborder rounded-full overflow-hidden mb-1">
          <div className="h-full bg-dash-orange rounded-full transition-all duration-100" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="flex justify-between text-[9px] font-mono text-dash-muted">
          <span>{audioRef.current ? formatTime(audioRef.current.currentTime) : "00:00"}</span>
          <span>{audioRef.current ? formatTime(audioRef.current.duration) : "00:00"}</span>
        </div>
      </div>
      
      <audio 
        ref={audioRef} 
        src={currentTrack.src}
        onTimeUpdate={updateProgress} 
        onEnded={handleNext} // Auto-play next track when finished
      />
    </div>
  );
}

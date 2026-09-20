import { useState, useRef, type MouseEvent } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Heart } from 'lucide-react';
import { PLAYLIST } from '../../data/playlist';

export function MusicPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const [likedTracks, setLikedTracks] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('portfolio_liked_tracks');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = PLAYLIST[currentTrackIndex];
  const isCurrentLiked = !!likedTracks[currentTrack.src];

  const toggleLike = () => {
    setLikedTracks((prev) => {
      const next = { ...prev, [currentTrack.src]: !prev[currentTrack.src] };
      try {
        localStorage.setItem('portfolio_liked_tracks', JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs <= 0) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const playTrack = (index: number) => {
    setCurrentTrackIndex(index);
    if (audioRef.current) {
      audioRef.current.src = PLAYLIST[index].src;
      audioRef.current.load();
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err: Error) => {
        if (err.name !== 'AbortError') {
          console.error("Audio playback error:", err);
        }
      });
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err: Error) => {
        if (err.name !== 'AbortError') {
          console.error("Audio playback error:", err);
        }
      });
    }
  };

  const handleNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % PLAYLIST.length;
    playTrack(nextIndex);
  };

  const handlePrevTrack = () => {
    if (audioRef.current && audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
      setProgress(0);
      return;
    }
    const prevIndex = (currentTrackIndex - 1 + PLAYLIST.length) % PLAYLIST.length;
    playTrack(prevIndex);
  };

  const updateProgress = () => {
    if (audioRef.current) {
      const cur = audioRef.current.currentTime || 0;
      const dur = audioRef.current.duration || 0;
      setCurrentTime(cur);
      setDuration(dur);
      if (dur > 0) {
        setProgress((cur / dur) * 100);
      }
    }
  };

  const handleSeek = (e: MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !audioRef.current.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const fraction = Math.max(0, Math.min(1, clickX / rect.width));
    audioRef.current.currentTime = fraction * audioRef.current.duration;
    setProgress(fraction * 100);
    setCurrentTime(audioRef.current.currentTime);
  };

  const toggleLoop = () => {
    if (audioRef.current) {
      audioRef.current.loop = !isLooping;
      setIsLooping(!isLooping);
    }
  };

  const handleTrackEnded = () => {
    if (isLooping) return;
    handleNextTrack();
  };

  return (
    <div className="bg-dash-card dark:bg-dash-darkcard p-6 rounded-[24px] border border-dash-border dark:border-dash-darkborder shadow-neumorphic dark:shadow-neumorphic-dark">
      <div className="flex justify-between items-center mb-6 text-sm font-bold">
        <span>Now Playing</span>
        <button
          onClick={toggleLike}
          aria-label={isCurrentLiked ? "Unlike track" : "Like track"}
          title={isCurrentLiked ? "Unlike track" : "Like track"}
          className="p-1 rounded-full text-dash-muted hover:text-dash-text transition-transform active:scale-125 cursor-pointer focus:outline-none"
        >
          <Heart 
            size={16} 
            className={`transition-all duration-200 ${
              isCurrentLiked 
                ? 'fill-red-500 text-red-500 scale-110' 
                : 'fill-transparent text-dash-muted hover:text-red-400'
            }`} 
          />
        </button>
      </div>
      
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={togglePlay}
          className={`w-16 h-16 rounded-full bg-[#111] shadow-[inset_0_0_0_4px_#333,0_4px_10px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 cursor-pointer ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}
          aria-label={isPlaying ? "Pause audio" : "Play audio"}
        >
          <div className="w-4 h-4 bg-dash-orange rounded-full border-[3px] border-[#111]"></div>
        </button>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-bold truncate">{currentTrack.title}</div>
          <div className="text-[10px] text-dash-muted mt-0.5 truncate">{currentTrack.artist}</div>
          <div className="text-[9px] font-mono text-dash-orange mt-2 flex items-center gap-1.5 font-medium">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-dash-orange animate-pulse"></span>
            Track {currentTrackIndex + 1} of {PLAYLIST.length}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mb-4">
        <button 
          onClick={toggleLoop} 
          title={isLooping ? "Loop enabled" : "Loop disabled"}
          className={`p-1 rounded transition-colors ${isLooping ? 'text-dash-orange' : 'text-dash-muted hover:text-dash-text'}`}
        >
          <Repeat size={14} />
        </button>
        <button 
          onClick={handlePrevTrack} 
          title="Previous Track"
          className="text-dash-muted hover:text-dash-text cursor-pointer transition-colors p-1"
        >
          <SkipBack size={16} />
        </button>
        <button 
          onClick={togglePlay} 
          aria-label={isPlaying ? "Pause" : "Play"}
          className="w-10 h-10 rounded-full bg-dash-orange text-white flex items-center justify-center hover:opacity-90 shadow-lg transition-transform active:scale-95"
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-1" />}
        </button>
        <button 
          onClick={handleNextTrack} 
          title="Next Track"
          className="text-dash-muted hover:text-dash-text cursor-pointer transition-colors p-1"
        >
          <SkipForward size={16} />
        </button>
      </div>

      <div>
        <div 
          onClick={handleSeek} 
          title="Click to seek"
          className="h-1 bg-dash-border dark:bg-dash-darkborder rounded-full overflow-hidden mb-1 cursor-pointer"
        >
          <div className="h-full bg-dash-orange rounded-full transition-all duration-100" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="flex justify-between text-[9px] font-mono text-dash-muted">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      
      <audio 
        ref={audioRef}
        src={currentTrack.src}
        onTimeUpdate={updateProgress} 
        onLoadedMetadata={updateProgress}
        onEnded={handleTrackEnded} 
      />
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { AiFillPlayCircle, AiFillPauseCircle, AiOutlineSound } from "react-icons/ai";

export default function MusicPlayer({ src, persist = true }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    // optional: autoplay if you want, but we keep default off
    return () => {
      if (a) a.pause();
    };
  }, []);

  function toggle() {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play().catch(() => {
        // autoplay blocked on some browsers; user must click
      });
      setPlaying(true);
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-2 bg-white/90 p-2 rounded-full shadow-lg">
        <button onClick={toggle} aria-label="play-pause" className="focus:outline-none">
          {playing ? <AiFillPauseCircle size={28} className="text-pink-deep" /> : <AiFillPlayCircle size={28} className="text-pink-deep" />}
        </button>
        <div className="hidden sm:block text-xs text-gray-600">Musik Latar</div>
      </div>
      <audio ref={audioRef} src={src} loop />
    </div>
  );
}

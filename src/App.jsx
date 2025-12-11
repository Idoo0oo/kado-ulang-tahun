import { Routes, Route } from "react-router-dom";
import Opening from "./pages/Opening";
import Memories from "./pages/Memories";
import Closing from "./pages/Closing";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  return (
    <>
      {/* Pastikan file music ada di public/assets/music.mp3 */}
      <MusicPlayer src="/assets/music.mp3" />

      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/closing" element={<Closing />} />
      </Routes>
    </>
  );
}

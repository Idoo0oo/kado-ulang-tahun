import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Hearts from "../components/Hearts";

export default function Opening() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-pink-pastel">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 backdrop-blur-md px-8 py-10 rounded-3xl shadow-xl text-center max-w-lg"
      >
        <h1 className="text-4xl font-semibold text-pink-500 mb-4">Hai, Sayang 💖</h1>
        <p className="mt-4 text-gray-600">
          Hari ini, hari spesial kamu. Oiya sebelum mulai klik dulu lagunya yang ada di pojok kanan atas yh
        </p>

        <button
          onClick={() => navigate("/memories")}
          className="mt-8 px-6 py-3 bg-pink-deep text-gray rounded-full font-medium shadow hover:scale-105 transition"
        >
          Tap to Start ❤️
        </button>
      </motion.div>
    </div>
  );
}
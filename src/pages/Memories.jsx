import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import messages from "../data/messages";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/*
  We use images from /assets/photos/... placed under public folder.
  Example src: /assets/photos/foto1.jpg
*/

export default function Memories() {
  const [activeMsg, setActiveMsg] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const images = [
    "/assets/photos/foto1.jpg",
    "/assets/photos/foto2.jpg",
    "/assets/photos/foto3.jpg"
  ]; // tambah sesuai jumlah

  useEffect(() => {
    // reset message saat pindah slide
    setActiveMsg("");
  }, [currentIndex]);

  function handleImageClick(idx) {
    // munculkan pesan sesuai idx (fallback jika messages < images)
    const msg = messages[idx % messages.length];
    setActiveMsg(msg);
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-cream relative">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-heading text-pink-deep text-center mb-4">our memories</h2>
        <p className="text-center text-gray-600 mb-6">swipe fotonya sayanggggg</p>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={(s) => setCurrentIndex(s.activeIndex)}
          breakpoints={{
            640: { slidesPerView: 1.3 },
            1024: { slidesPerView: 2 },
          }}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="p-3">
                <div
                  onClick={() => handleImageClick(idx)}
                  className="cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition"
                >
                  <img src={img} alt={`moment-${idx}`} className="w-full h-64 object-cover" />
                  <div className="p-3">
                    <div className="text-sm font-medium"> #{idx + 1}</div>
                    <div className="text-xs text-gray-500">Klik fotonya untuk lihat pesannya</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 min-h-[72px] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: activeMsg ? 1 : 0, y: activeMsg ? 0 : 8 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-xl p-4 shadow text-center max-w-xl"
          >
            {activeMsg ? <p className="text-sm text-gray-700">{activeMsg}</p> : <p className="text-sm text-gray-400">Klik salah satu foto untuk lihat kata manisnya ✨</p>}
          </motion.div>
        </div>

        <div className="flex justify-center mt-8">
          <button onClick={() => navigate("/closing")} className="px-6 py-3 bg-pink-deep text-gray rounded-full shadow hover:scale-105 transition">
            Next Page ❤️
          </button>
        </div>
      </div>
    </div>
  );
}

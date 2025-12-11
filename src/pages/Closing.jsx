import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Closing() {
  const fullText = `HAPPY BIRTHDAYYY SAYANGGKUUUU🥳🥳
semoga di umur ke 18 tahun ini semoga kamu bahagia selalu dan sehat selalu, dan semoga kecapai semua mimpi-mimpi kamu. aku selalu ada di sisi kamu sayangggggg, i always support u sayanggggg. semoga panjangg umurrr selaluuuu sayanggkuuu, semoga di umur  ini kamu semakin sehat dan jarang sakit-sakitannnn. iloveeyouuu soomuchhhh sayaanggkuuuuuuu😻😽❤❤❤`;

  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx < fullText.length) {
      const t = setTimeout(() => {
        setDisplay((d) => d + fullText[idx]);
        setIdx((i) => i + 1);
      }, 18 + Math.random() * 40); // variasi kecepatan ketik
      return () => clearTimeout(t);
    }
  }, [idx, fullText]);

  return (
    <div className="min-h-screen flex items-start justify-center py-16 px-6 bg-pink-pastel relative">
      <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="bg-white/95 rounded-3xl shadow-xl max-w-3xl p-8">
        <h2 className="text-2xl font-heading text-pink-deep mb-4">Untukmu, yang istimewa ✨</h2>
        <div className="typing text-gray-700">{display}</div>

        <div className="mt-6 text-right">
        <button
            onClick={() => {
            const message = encodeURIComponent("i lovee u sayangg");
            const phone = "6283812938223"; // ganti nomor kamu (format internasional, tanpa +)
            window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
            }}
            className="px-4 py-2 bg-pink-deep text-gray rounded-full shadow hover:scale-105 transition"
        >
            Kirim Pesan Balik ❤️
        </button>
        </div>
      </motion.div>
    </div>
  );
}

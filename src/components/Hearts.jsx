import { useEffect, useState } from "react";

export default function Hearts({ amount = 6 }) {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: amount }).map((_, i) => ({
      id: i,
      left: Math.random() * 90 + "%",
      delay: Math.random() * 2 + "s",
      size: 16 + Math.floor(Math.random() * 24),
    }));
    setHearts(arr);
  }, [amount]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="heart"
          style={{
            left: h.left,
            bottom: "-10px",
            animationDelay: h.delay,
            fontSize: `${h.size}px`,
            color: "#ff6fa3",
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}
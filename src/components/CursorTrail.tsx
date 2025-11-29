import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CursorTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      setTrail((prevTrail) => {
        const newTrail = [
          ...prevTrail,
          { x: e.clientX, y: e.clientY, id: Date.now() }
        ].slice(-15); // Keep last 15 points
        return newTrail;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <svg className="w-full h-full">
        <motion.path
          d={`M ${trail.map((point, i) => `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ')}`}
          stroke="hsl(30 100% 60% / 0.3)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        {trail.map((point, index) => (
          <motion.circle
            key={point.id}
            cx={point.x}
            cy={point.y}
            r={3 - (index / trail.length) * 2}
            fill="hsl(30 100% 60% / 0.4)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 - (index / trail.length) }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </svg>
    </div>
  );
};

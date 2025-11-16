import { motion } from "framer-motion";
import React from "react";

const colors = [
  "#1a202c",
  "#2d3748",
  "#4a5568",
  "#718096",
  "#a0aec0",
  "#cbd5e0",
];

const DURATION = 0.9;
const STAGGER = 0.06;

const Transition = () => {
  return (
    <>
      <div className="fixed inset-0 flex pointer-events-none z-[9999]">
        {colors.map((color, i) => (
          <motion.div
            key={`exit-${i}`}
            className="flex-1 h-full"
            style={{ backgroundColor: color }}
            initial={{ scaleY: 0, y: 40, originY: 1 }}
            animate={{ scaleY: 0, y: 40 }}
            exit={{ scaleY: 1, y: 0 }}
            transition={{
              duration: DURATION,
              delay: i * STAGGER,
              ease: [0.22, 1, 0.36, 1], 
            }}
          />
        ))}
      </div>

      <div className="fixed inset-0 flex pointer-events-none z-[9999]">
        {colors.map((color, i) => (
          <motion.div
            key={`enter-${i}`}
            className="flex-1 h-full"
            style={{ backgroundColor: color }}
            initial={{ scaleY: 1, y: 0, originY: 0 }}
            animate={{ scaleY: 0, y: -40 }}
            exit={{ scaleY: 1 }}
            transition={{
              duration: DURATION,
              delay: (colors.length - i) * STAGGER,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Transition;

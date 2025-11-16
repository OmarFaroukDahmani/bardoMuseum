import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Fisher–Yates shuffle
const shuffle = (array) => {
  let arr = [...array];
  let currentIndex = arr.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }

  return arr;
};

const squareData = [
  { id: 1, src: "/gallery/appolon.jpg" },
  { id: 2, src: "/gallery/bardo300.jpg" },
  { id: 3, src: "/gallery/lion.jpg" },
  { id: 4, src: "/gallery/maison_maitre.jpg" },
  { id: 5, src: "/gallery/virgile.jpg" },
  { id: 6, src: "/gallery/SeignorJulius.jpg" },
  { id: 7, src: "/gallery/new_musee.png" },
  { id: 8, src: "/gallery/101pieces.png" },
];

// Generate the animated tiles
const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 120, damping: 20 }}
      className="w-full h-full rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.25)] overflow-hidden"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      whileHover={{ scale: 1.03 }}
    />
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3500);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-4 
        grid-rows-4 
        gap-3 
        max-w-5xl 
        w-full 
        h-[420px] 
        sm:h-[500px] 
        md:h-[550px]"
      >
        {squares}
      </div>
    </div>
  );
};

export default ShuffleGrid;

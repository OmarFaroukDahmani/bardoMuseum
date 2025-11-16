import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
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

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-lg shadow-md"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
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
    timeoutRef.current = setTimeout(shuffleSquares, 4000);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-4 h-[400px] sm:h-[500px] gap-2">
      {squares}
    </div>
  );
};

export default ShuffleGrid;

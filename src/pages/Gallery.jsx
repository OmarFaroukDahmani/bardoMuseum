import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';
import Transition from '../components/Transition'; 

const images = [
  { id: 2, src: "/gallery/bardo300.jpg" },
  { id: 3, src: "/gallery/bardo301.jpg" },
  { id: 4, src: "/gallery/bardo312.jpg" },
  { id: 5, src: "/gallery/bardo305.jpg" },
];

const pageVariants = {
  initial: {
    opacity: 0,
    x: "10vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-10vw",
  }
};

const pageTransition = {
  duration: 0.8,
  ease: "easeInOut"
};

export default function Gallery() {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100%"]);
  const y2 = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >


      <Transition />
      
      <section className='relative h-[200vh] w-full'>
        <div className='sticky top-0 h-screen w-full overflow-hidden'>

          <div className='relative h-screen w-full'>

            <div className="absolute inset-0 z-10 grid place-content-center bg-gray-900">
              <motion.h1 className='relative text-5xl font-black uppercase text-white'>
                Show me on scroll
              </motion.h1>
            </div>

            <div className="absolute inset-0 z-20 grid grid-cols-4">
              {images.map((image, index) => (                <div key={image.id} className="relative h-full w-full overflow-hidden">
                  <motion.img
                    src={image.src}
                    alt={`Gallery image ${image.id}`}

                    style={{ y: index % 2 === 0 ? y1 : y2 }}
                    className='absolute inset-0 h-full w-full object-cover'
                  />
                  <div className='absolute inset-0 bg-black opacity-30'></div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
}
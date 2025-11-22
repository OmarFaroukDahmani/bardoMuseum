import React, { useRef } from 'react'; 
import { motion } from "framer-motion";
import { useScrollAnimation } from '../../useScrollAnimation'; // Adjust path if needed

function Parallax({ children, curtainText, animationDistance = 600, fullScreen = false }) {
  const containerRef = useRef(null);

  const { 
    curtainTranslate, 
    textOpacity, 
    parallaxOffset,
    animationProgress
  } = useScrollAnimation({ ref: containerRef, animationDistance });

  return (
    <div className="relative" ref={containerRef}>
      
      /* .sticky-animation-container */
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        <div className="absolute inset-0 bg-white z-10 flex justify-center items-center">
          <div
            className={`relative w-full will-change-transform ${
              fullScreen 
                ? 'max-w-full p-0 h-full' 
                : 'max-w-[1100px] px-5'
            }`}
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          >
            <motion.div
              style={{
                opacity: animationProgress,
                y: (1 - animationProgress) * 50,
                height: '100%' 
              }}
            >
              {children}
            </motion.div>
          </div>
        </div>

        <div 
          className="absolute top-0 left-0 w-full h-[50vh] bg-black z-20 flex justify-center items-end overflow-hidden will-change-transform"
          style={{ transform: `translateY(-${curtainTranslate}vh)` }}
        >
          <div 
            className="font-mono text-white select-none text-center max-w-[800px]  px-5 flex flex-col items-center justify-center translate-y-[50%]" 
            style={{ opacity: textOpacity }}
          >
            {curtainText}
          </div>
        </div>
        

        <div 
          className="absolute bottom-0 left-0 w-full h-[50vh] bg-black z-20 flex justify-center items-start overflow-hidden will-change-transform"
          style={{ transform: `translateY(${curtainTranslate}vh)` }}
        >
          <div 
            className="font-mono text-white select-none text-center max-w-[800px] px-5 flex flex-col items-center justify-center -translate-y-[50%]" 
            style={{ opacity: textOpacity }}
          >
            {curtainText}
          </div>
        </div>

      </div>
      
      <div style={{ height: `${animationDistance}px` }}></div>
    </div>
  );
}

export default Parallax;
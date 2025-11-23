import { motion } from 'framer-motion';
import Transition from '../components/Transition';
import Parallax from '../components/Parallax';
import { gsap } from 'gsap';
import { Helmet } from 'react-helmet';

export default function Visit() {
  const curtainContent = (
    <div className="text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onMouseEnter={() => gsap.to("#cursor", { scale: 5, duration: 0.3 })}
        onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
        className="text-7xl md:text-6xl font-extrabold mb-6 tracking-tight "
      >
        Come Visit Us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-gray-200"
      >
        Carthage, founded by Alyssa, rose as a hub of explorers and merchants
        whose purple ships sailed across the Mediterranean. Revived by Rome,
        it flourished with olive oil, aqueducts, theatres, and mosaics.
        <br /><br />
        At the Bardo Museum, visitors journey through mosaics, sculptures,
        and manuscripts—masterpieces revealing Tunisia’s layered history.
      </motion.p>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Visit Us & Opening Hours | National Bardo Museum</title>
        <meta 
          name="description" 
          content="Plan your visit to the National Bardo Museum. View our opening hours for Summer and Winter, and information on admissions." 
        />
      </Helmet>
      
      <Transition />

      <Parallax curtainText={curtainContent} animationDistance={800} fullScreen={true}>
        <motion.section className='h-screen w-full bg-[url("/museum/inside.jpg")] bg-cover' >
          <motion.div className='h-screen w-full bg-[rgba(0,0,0,0.5)] text-white' >
            <div className='flex flex-col justify-center items-center h-screen w-full gap-10 '>
              <motion.h1
                onMouseEnter={() => gsap.to("#cursor", { scale: 5, duration: 0.3 })}
                onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
                className='text-7xl text-center font-extrabold' >
                OPENING HOURS
                <motion.span animate={{ rotate: [5, -5, 5, -5, 5] }} transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }} className='absolute text-3xl '>🕝</motion.span>
              </motion.h1>
              <div className=' flex gap-5 '>
                <motion.div animate={{ rotate: [2, -2, 2] }} transition={{ duration: 3, ease: "easeOut", repeat: Infinity }} className='text-center w-50 h-30 rounded-2xl bg-[rgba(0,0,0,0.5)] p-4 ml-4'>
                  <h2 className=' font-bold '>Winter</h2>
                  <p>from 16/09 to 30/05</p>
                  <p>from 9:30 to 16:30 </p>
                </motion.div>
                <motion.div animate={{ rotate: [-2, 2, -2] }} transition={{ duration: 3, ease: "easeIn", repeat: Infinity }} className='text-center w-50 h-30 rounded-2xl bg-[rgba(0,0,0,0.5)] p-4 mr-4'>
                  <h2 className=' font-bold '>Summer</h2>
                  <p>from 01/06 to 15/09 </p>
                  <p>from 9:00 to 17:00</p>
                </motion.div>
              </div>
              <motion.h3 animate={{ scale: [1.1, 1, 1.1] }} transition={{ duration: 5, ease: "easeIn", repeat: Infinity }} className=' w-fit h-fit bg-[rgba(0,0,0,0.5)] rounded-xl p-3' >museum closed on monday</motion.h3>
            </div>
          </motion.div>
        </motion.section>
      </Parallax>
    </>
  )
}
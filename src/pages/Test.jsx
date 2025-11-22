import { motion } from 'framer-motion'
import Parallax from '../components/Parallax'

export default function Test() {
  const curtainContent = (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', margin: '0 0 20px 0' }}>Come Visit Us</h1>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '600px' }}>
        Carthage, founded by Alyssa, rose as a hub of explorers and merchants 
        whose purple ships sailed across the Mediterranean. Revived by Rome, 
        it flourished with olive oil, aqueducts, theatres, and mosaics.
        <br /><br />
        At the Bardo Museum, visitors journey through mosaics, sculptures, 
        and manuscripts—masterpieces revealing Tunisia’s layered history.
      </p>
    </div>
  );
  return (
    <>
      <Parallax curtainText={curtainContent} animationDistance={800} fullScreen={true}>
        {/* This is the 'children' prop */}
      <motion.section className='h-screen w-full bg-[url("/museum/inside.jpg")] bg-cover' >
        <div className=' flex flex-col justify-center items-center h-screen w-full bg-[rgba(0,0,0,0.5)] text-white gap-10 ' >
            <h1 className='text-7xl  font-extrabold' >OPENING HOURS</h1>
            {/*  */}
            <div className=' flex gap-10'>
              <div className='text-center w-50 h-30 rounded-2xl bg-[rgba(0,0,0,0.5)] p-4'>
                <h2 className=' font-bold  ' >Winter</h2>
                <p>from 16/09 to 30/05</p>
                <p>from 9:30 to 16:30 </p>
              </div>
              <div className='text-center w-50 h-30 rounded-2xl bg-[rgba(0,0,0,0.5)] p-4'>
                <h2 className=' font-bold '>Summer</h2>
                <p>from 01/06 to 15/09 </p>
                <p>from 9:00 to 17:00</p>
              </div>
            </div>
            <h3 className=' w-fit h-fit bg-[rgba(0,0,0,0.5)] rounded-xl p-3' >museum closed on monday</h3>

        </div>
      </motion.section>
      </Parallax>
    </>
  )
}

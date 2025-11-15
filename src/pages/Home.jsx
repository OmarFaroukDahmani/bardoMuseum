import Navbar from '../components/Navbar'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {gsap} from 'gsap'
import Cursor from '../components/Cursor'
import bardoBg from '/BardoMuseum.mp4'

export default function Home() {
  const images = [
    { title: "appolon", src: "/gallery/appolon.jpg" },
    { title: "bardo300", src: "/gallery/bardo300.jpg" },
    { title: "lion", src: "/gallery/lion.jpg" },
    { title: "maison_maitre", src: "/gallery/maison_maitre.jpg" },
    { title: "virgile", src: "/gallery/virgile.jpg" },
    { title: "SeignorJulius", src: "/gallery/SeignorJulius.jpg" }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const boxVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -20 : direction === "right" ? 20 : 0,
      y: direction === "up" ? -20 : direction === "down" ? 20 : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1.6, ease: "easeInOut" },
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      transition: { duration: 1.6, ease: "easeInOut" },
    }),
  }

  return (
    <>
      <Navbar />

      <Cursor/>

      <section className="relative h-screen w-full bg-black overflow-hidden">

        <div className="absolute inset-0 grid grid-cols-2 grid-rows-3 gap-2 p-4 md:grid-cols-3 md:grid-rows-2 md:gap-3 md:p-5">
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img.src}
              alt={img.title}
              title={img.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 0.5, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{
                scale: 1.05,
                opacity: 1
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              className="w-full h-full object-cover rounded-xl shadow-lg z-5"
            />
          ))}
        </div>


        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

        <div className="relative flex items-center justify-center h-full p-4">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 3, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-white font-extrabold text-center text-3xl sm:text-4xl md:text-5xl tracking-normal md:tracking-wide uppercase z-20"
            onMouseEnter={()=> gsap.to("#cursor", {scale: 5 , duration: 0.3 })}
            onMouseLeave={()=> gsap.to("#cursor", {scale: 1 , duration: 0.3 })}
          >
            The National Bardo Museum
          </motion.h1>
        </div>
      </section>

      <AnimatePresence>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="w-full p-4 grid grid-cols-1 gap-4 lg:h-screen lg:p-10 lg:grid-cols-6 lg:grid-rows-7 lg:gap-2"
        >

          <motion.div
            custom="left"
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false }}
            className="relative flex flex-col justify-end rounded-2xl col-span-1 row-span-1 h-[70vh] lg:h-auto lg:col-span-3 lg:row-span-3 overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }} 
          >
            <img
              src="/gallery/new_musee.png"
              alt="new_museum"
              className="h-full w-full object-cover rounded-2xl absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            <div className="relative z-10 p-6 md:p-10 text-white max-w-lg">
              <Link to={'/museum'}>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4">THE NEW MUSEUM</h1>
              </Link>
              <p className="text-sm md:text-base leading-relaxed">
                The arrangements of the Bardo Museum were thought and resolved with the aim of increasing and reorganizing spaces for a better redistribution and a new presentation of the collections.
              </p>
            </div>
          </motion.div>


          <motion.div
            custom="right"
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false }}
            className="relative flex flex-col justify-end col-span-1 row-span-1 h-[70vh] lg:h-auto lg:col-start-5 lg:row-start-2 lg:col-span-2 lg:row-span-3 rounded-2xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/gallery/101pieces.png"
              alt="101pieces"
              className="h-full w-full object-cover rounded-2xl absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            <div className="relative z-10 p-6 md:p-8 text-white max-w-sm">
              <Link to={"/gallery"}>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">THE 101 MASTERPIECES</h2>
              </Link>
              <p className="text-sm md:text-base leading-relaxed">
                The biggest Tunisian museum derives its reputation from its countless pieces coming from the excavations undertaken in the country since the XIXth Century. The quality and the rarity of many of these pieces bear witness to the country’s historical richness and uniqueness.
              </p>
            </div>
          </motion.div>


          <motion.div
            custom="down"
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false }}
            className="relative flex flex-col justify-end col-span-1 row-span-1 h-[70vh] lg:h-auto lg:col-start-2 lg:row-start-5 lg:col-span-2 lg:row-span-3 rounded-2xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/gallery/virgile.jpg"
              alt="Virgile"
              className="h-full w-full object-cover rounded-2xl absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            <div className="relative z-10 p-6 md:p-8 text-white max-w-sm">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">EVENTS</h2>
              <p className="text-sm md:text-base leading-relaxed">
                The commemoration of the Bardo Museum’s Centennial in 1988 was a major event in its history. Starting from this date and following the efforts of the successive curators, many renovations were realised with a new didactic museographic presentation and in compliance with modern standards of conservation.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="relative h-screen flex flex-col items-center justify-center text-3xl font-bold overflow-hidden p-4">
        <video
          src={bardoBg}
          autoPlay
          muted
          loop
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h1
            className="text-white text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-5"
            onMouseEnter={() => gsap.to("#cursor", { scale: 5, duration: 0.3 })}
            onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
          >
            Contact
          </h1>
          <hr className="bg-white w-[50vw] md:w-[20vw] h-0.5 mb-6 md:mb-10" />

          <p className="text-white text-base md:text-lg max-w-xl text-center">
            Reach out to us for more information about the National Bardo Museum.
          </p>
        </div>
      </div>
    </>
  )
}
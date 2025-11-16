import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import bardoBg from '/BardoMuseum.mp4'
import Transition from '../components/Transition' 


const pageVariants = {
  initial: {
    opacity: 0,
    x: "20vw", 
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-20vw",
  }
};

const pageTransition = {
  duration: 0.8, 
  ease: "easeInOut"
};


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
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      
      <Transition />

      <section className="relative min-h-screen w-full bg-black overflow-hidden">

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

        <div className="relative flex items-center justify-center h-full min-h-screen p-4">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 3, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-white font-extrabold text-center  sm:text-4xl md:text-6xl tracking-normal md:tracking-wide uppercase z-20"
            onMouseEnter={() => gsap.to("#cursor", { scale: 5, duration: 0.3 })}
            onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
          >
            The National Bardo Museum
          </motion.h1>
        </div>
      </section>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="w-full p-4 grid grid-cols-1 gap-4 lg:min-h-screen lg:p-10 lg:grid-cols-6 lg:grid-rows-7 lg:gap-2"
      >

        <motion.div
          custom="left"
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false }}
          className="relative flex flex-col justify-end rounded-2xl col-span-1 row-span-1 h-auto aspect-[3/4] lg:h-auto lg:aspect-auto lg:col-span-3 lg:row-span-3 overflow-hidden shadow-lg"
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
          className="relative flex flex-col justify-end col-span-1 row-span-1 h-auto aspect-[3/4] lg:h-auto lg:aspect-auto lg:col-start-5 lg:row-start-2 lg:col-span-2 lg:row-span-3 rounded-2xl overflow-hidden shadow-lg"
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
          className="relative flex flex-col justify-end col-span-1 row-span-1 h-auto aspect-[3/4] lg:h-auto lg:aspect-auto lg:col-start-2 lg:row-start-5 lg:col-span-2 lg:row-span-3 rounded-2xl overflow-hidden shadow-lg"
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

      <div className="relative min-h-screen flex flex-col items-center justify-center p-6 md:p-10 lg:p-16 overflow-hidden">
        <video src={bardoBg} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl text-center flex flex-col items-center">
          <h1
            className="text-white text-4xl md:text-6xl font-bold mb-3"
            onMouseEnter={() => gsap.to("#cursor", { scale: 5, duration: 0.3 })}
            onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
          >
            Contact
          </h1>
          <hr className="bg-white w-1/3 md:w-1/5 h-0.5 mb-6" />

          <p className="text-white text-sm md:text-lg max-w-xl mb-6 leading-relaxed">
            Reach out to us for more information about the National Bardo Museum.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-white text-sm md:text-base mb-10">
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-lg">
              <p>Email:</p>
              <p className="font-semibold break-all">info@bardomuseum.tn</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-lg">
              <p>Phone:</p>
              <p className="font-semibold">+216 71 123 456</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-lg">
              <p>Address:</p>
              <p className="font-semibold">Bardo, Tunis, Tunisia</p>
            </div>
          </div>

          <div className="w-full max-w-2xl h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.3822575762515!2d10.131634175630516!3d36.80935896718346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3339886d4765%3A0x15530be2e4a95a67!2sBardo%20National%20Museum!5e0!3m2!1sen!2stn!4v1763232588298!5m2!1sen!2stn"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
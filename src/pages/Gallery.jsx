import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Transition from '../components/Transition';

const images = [
  { id: 2, src: "/gallery/bardo300.jpg" },
  { id: 3, src: "/gallery/bardo301.jpg" },
  { id: 4, src: "/gallery/bardo312.jpg" },
  { id: 5, src: "/gallery/bardo305.jpg" },
];

const collection = [
  { id: 1, src: "/gallery/baptistere.jpg", title: "Baptistère" },
  { id: 2, src: "/gallery/cuirasse.jpg", title: "Cuirasse" },
  { id: 3, src: "/gallery/fresque.jpg", title: "Fresque" },
  { id: 4, src: "/gallery/lampe.jpg", title: "Lampe" },
  { id: 5, src: "/gallery/masque2.jpg", title: "Masque" },
  { id: 6, src: "/gallery/monnaies.jpg", title: "Monnaies" },
  { id: 7, src: "/gallery/saisons.jpg", title: "Saisons" },
  { id: 8, src: "/gallery/septime.jpg", title: "Septime" },
  { id: 9, src: "/gallery/tanit.jpg", title: "Tanit" },
  { id: 10, src: "/gallery/virgile.jpg", title: "Virgile" },
  { id: 11, src: "/gallery/appolon.jpg", title: "Apollon" },
  { id: 12, src: "/gallery/SeignorJulius.jpg", title: "Seignor Julius" },
];

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Gallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full bg-neutral-900"
    >
      <Helmet>
        <title>Gallery & Masterpieces | National Bardo Museum</title>
        <meta 
          name="description" 
          content="Browse the world's largest collection of mosaics and the 101 Masterpieces of the Bardo Museum, featuring Virgil, Seignor Julius, and more." 
        />
      </Helmet>

      <Transition />

      <div ref={containerRef} className="relative h-[150vh] bg-neutral-900 overflow-hidden">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="grid grid-cols-4 gap-2 h-[120%] -mt-[10%]">
            {images.map((image, index) => (
              <div key={image.id} className="relative h-full w-full overflow-hidden">
                <motion.div
                  style={{ y: index % 2 === 0 ? y1 : y2 }}
                  className="absolute inset-0 w-full h-[140%]"
                >
                  <img
                    src={image.src}
                    alt={`Gallery ${image.id}`}
                    className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                  />
                </motion.div>
              </div>
            ))}
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none" />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h1 className="text-5xl md:text-8xl font-serif text-white tracking-widest uppercase mix-blend-overlay opacity-90">
              The Bardo
            </h1>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold  font-serif text-center text-white m-4">
            The Tunisia Museum
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-5" />
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 max-w-3xl mx-auto text-center p-5">
            The Bardo Museum, housed in a 19th‑century Beylic palace, showcases Tunisia’s history from Prehistory to modern times. It holds the world’s largest mosaic collection, treasures from Punic, Roman, and Christian eras, and artifacts from a shipwreck off Mahdia. UNESCO‑listed sites like Carthage, Dougga, El Djem, and the Arab Medinas are represented, alongside testimonies of regional creativity dating back 40,000 years.
          </p>
        </motion.div>
      </div>

      <section className="relative z-10 w-full bg-amber-50 py-24 px-6 md:px-20">

        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 mb-6 font-serif">
              Our Collection
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8" />
          </motion.div>

          <motion.div
            className="text-lg md:text-xl text-neutral-700 leading-relaxed space-y-8 text-justify"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p>
              Since 2004, a computer-based inventory programme was initiated based
              on the “Virgil” database provided by the Museographic Development
              Division (I.N.P.). The digitization of the glass-plate negatives
              collection—the main proof of the museum’s history and the state of
              Tunisia’s cultural sites—is nearing completion.
            </p>
            <p>
              Between 2009 and 2014, a historic partnership with the Louvre Museum
              focused on the restoration and presentation of the Bardo's Roman
              sculptures. This agreement laid the groundwork for cultural exchange
              and exhibitions like "Memory à la carte" and "Amber Magic," celebrating
              the museum's 120th anniversary.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 min-h-screen w-full bg-neutral-900 py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-6xl font-extrabold text-amber-50 tracking-tight uppercase">
            101 Masterpieces
          </h2>
          <p className="text-amber-200/60 mt-4 font-serif italic">Curated from the archives</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {collection.map((img) => (
            <motion.div
              key={img.id}
              className="group relative bg-neutral-800 rounded-xl overflow-hidden shadow-xl"
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="overflow-hidden h-64 w-full relative">
                <motion.img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              <div className="p-5 text-center border-t border-neutral-700">
                <h3 className="text-lg font-medium text-amber-50 tracking-wide group-hover:text-amber-400 transition-colors">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}
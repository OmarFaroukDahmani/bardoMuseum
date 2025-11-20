import { motion, useScroll, useTransform } from 'framer-motion';
import Transition from '../components/Transition'; 

const images = [
  { id: 2, src: "/gallery/bardo300.jpg" },
  { id: 3, src: "/gallery/bardo301.jpg" },
  { id: 4, src: "/gallery/bardo312.jpg" },
  { id: 5, src: "/gallery/bardo305.jpg" },
];

const collection = [
  {id : 1, src : "/gallery/baptistere.jpg", title : "baptistere"  },
  {id : 2, src : "/gallery/cuirasse.jpg", title : "cuirasse"  },
  {id : 3, src : "/gallery/fresque.jpg", title : "fresque"  },
  {id : 4, src : "/gallery/lampe.jpg", title : "lampe"  },
  {id : 5, src : "/gallery/masque2.jpg", title : "masque"  },
  {id : 6, src : "/gallery/monnaies.jpg", title : "monnaies"  },
  {id : 7, src : "/gallery/saisons.jpg", title : "saisons"  },
  {id : 8, src : "/gallery/septime.jpg", title : "septime"  },
  {id : 9, src : "/gallery/tanit.jpg", title : "tanit"  },
  {id : 10, src : "/gallery/virgile.jpg", title : "virgile"  },
  {id : 11, src : "/gallery/appolon.jpg", title : "appolon"  },
  {id : 12, src : "/gallery/SeignorJulius.jpg", title : "Seignor Julius"  },
];

const cards = [
  { id: 1, url: "/gallery/appolon.jpg", title: "Apollon" },
  { id: 2, url: "/gallery/bardo300.jpg", title: "Bardo" },
  { id: 3, url: "/gallery/lion.jpg", title: "Lion" },
  { id: 4, url: "/gallery/maison_maitre.jpg", title: "Maison" },
  { id: 5, url: "/gallery/virgile.jpg", title: "Virgile" },
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1 
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
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
      
      <section className='relative h-[300vh] w-full'>
        <div className='sticky top-0 h-screen w-full overflow-hidden'>

          <div className='relative h-screen w-full'>

          <div className="bg-black">

          </div>
            <div className="absolute inset-0 z-20 grid grid-cols-4">
              {images.map((image, index) => (                
                <div key={image.id} className="relative h-full w-full overflow-hidden">
                  <motion.img
                    src={image.src}
                    alt={`Gallery image ${image.id}`}

                    style={{ y: index % 2 === 0 ? y1 : y2 }}
                    className='absolute inset-0 h-full w-full object-cover'
                  />
                  
                </div>
              ))}
            </div>
            <motion.section 
              className="flex flex-col items-center p-10 gap-10 h-screen w-full bg-amber-50">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center">
                Our Collection
              </h1>
              <p className="text-base sm:text-lg md:text-xl max-w-4xl text-center leading-relaxed">
                Since 2004, a computer-based inventory programme was initiated based
                on the “Virgil” database provided by the Museographic Development
                Division (I.N.P.). The digitization of the glass-plate negatives
                collection which constitutes the main proof of the museum’s history
                and the state of Tunisia’s cultural sites is nearing completion.
                <br />
                <br />
                During this historical phase of the museum, a partnership with the
                Louvre museum was concluded for the period between 2009 and 2014. It
                concerns the restoration and the presentation of the Roman sculptures
                collection of the Bardo museum. This agreement provides for the
                exchange of exhibitions between the two institutions.
                <br />
                <br />
                Exhibitions entitled "Memory à la carte" and "Amber Magic" were
                presented to the public on the occasion of the commemoration of the
                120th anniversary of the Bardo national museum in May 2008.
              </p>
            </motion.section>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center p-5 gap-10 min-h-screen w-full bg-black">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-amber-50">
          THE 101 MASTERPIECES
        </h1>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {collection.map((img) => (
            <motion.div
              key={img.id}
              className="flex flex-col items-center bg-white rounded shadow-md p-3"
              variants={cardVariants}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-auto object-cover rounded"
              />
              <h3 className="mt-2 text-lg font-semibold">{img.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}
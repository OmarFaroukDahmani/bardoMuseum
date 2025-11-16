import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {gsap} from 'gsap'
import Transition from '../components/Transition'; 

const sections = [
  {
    id: 1,
    title: "The Mission of Bardo Museum",
    desc: `In general, a museum’s policy consists not only in preserving heritage, but also in trying to enrich and spread it within the framework of a cultural policy that is fair and adapted to the needs and demands. Thus, the museal institution’s major mission has always been to preserve collections subject to public interest within a public service, or at least public utility, mission. The main objective is to ensure accessibility for the larger public and the equal access of everybody to education and culture. As A. Malraux put it in his The Imaginary Museum (Le Musée Imaginaire), "the role of museums in our relationship with the works of art is so important that we hardly think that it does not exist; that it has never existed."

Thus, the objective of the redevelopment project of the Bardo Museum, a national museum which is the first in the country to exist for more than a century, is to make of it a major pole for a high quality cultural development. With the expansion of its premises, the redeployment of its collections, their suitable, attractive, and didactic exposure the visitor will be able to better appreciate, understand, and finally appropriate the exposed pieces of art to himself regardless of his intellectual level or age.

The expected role of the educational services and workshops within the programme of the new Bardo Museum will be decisive. It will lead to:

A direct rapport with works (shows, permanent and temporary exhibitions)
An analytic approach to works (conferences, political debates, meetings with the scientific and technical staff)
An effective practice through workshops and seminars.`,
    imgUrl: "/museum/outside.jpg",
    subheading: "The Museum",
  },
  {
    id: 2,
    title: "The Architectural Legacy of Bardo",
    desc: `The fortified military city of Bardo which is the centre of the Husseini power since 1705, witnessed the edification of sumptuous buildings within its walls.

Ali Pacha, the second sovereign of the dynasty between 1735 and 1756, built a first palace with a monumental entrance staircase guarded by lion statues.
Between 1824 and 1835, Hussein Bey built the "Small Tunisian Palace" characterized by Moorish Andalousian style.
Between 1859 and 1864, Mhammed Bey built the harem called “Qasr Al-Badii” which was characterized by an Italianist style.
These latter two residences, which are close to each other, remained the Bey’s residences until 1879. Sadok Bey, who was responsible for the bankruptcy of the kingdom, was obliged to restrain his lifestyle and move to Ksar Said where he had a much more modest residence.`,
    imgUrl: "/museum/fosfos.jpg",
    subheading: "Bardo",
  },
  {
    id: 3,
    title: "A Legacy Reimagined: The Curator’s Vision for the Bardo Museum",
    desc: `The National Bardo Museum stands as a living testament to Tunisia’s rich cultural heritage. Housed in the historic El Qasr El Badii palace—an architectural gem blending Andalousian-Moorish and Italian influences—the museum’s collections have grown through decades of acquisitions and donations.

Since its founding in 1888, following a decree by Prime Minister Kheireddine Pacha, the museum evolved from private collection to public institution. The 1913 integration of the Small Palace expanded its ethnographic scope, and the 2009 renovation elevated its international stature.

Today, the museum offers six thematic departments—from Prehistory to Islamic civilization—designed for universal accessibility. Highlights include the Carthage Gallery’s Roman-era works, Virgil’s mosaic, and Hannibal’s Campanian armour.

As a center for knowledge and cultural dialogue, the Bardo Museum continues to preserve and share Tunisia’s legacy with the world.

Taher Ghalia  
Chief Curator, National Bardo Museum`,
    imgUrl: "/museum/inside.jpg",
    subheading: "Since 1888",
  },
];

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

export default function Museum() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Transition />

      <div className="bg-black">
        {sections.map((section) => (
          <TextParallaxContent
            key={section.id}
            imgUrl={section.imgUrl}
            subheading={section.subheading}
            heading={section.title}
          >
            <SectionContent desc={section.desc} />
          </TextParallaxContent>
        ))}
      </div>
    </motion.div>
  );
}

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{ opacity }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl"
      onMouseEnter={() => gsap.to("#cursor", { scale: 5, duration: 0.3 })}
      onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })} 
>
        {heading}
      </p>
    </motion.div>
  );
};

const SectionContent = ({ desc }) => (
  <div className="mx-auto max-w-5xl px-4 pb-24 pt-12 text-white text-lg md:text-xl whitespace-pre-line"
      onMouseEnter={() => gsap.to("#cursor", { scale: 2, duration: 0.3 })}
      onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })} 
>
    {desc}
  </div>
);
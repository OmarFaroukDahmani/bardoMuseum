import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Home,
  Landmark,
  Image as GalleryIcon,
  Ticket,
  Mail
} from 'lucide-react';

const navLinks = [
  { title: 'Home', to: '/', icon: <Home size={18} /> },
  { title: 'Museum', to: '/museum', icon: <Landmark size={18} /> },
  { title: 'Gallery', to: '/gallery', icon: <GalleryIcon size={18} /> },
  { title: 'Visit', to: '/visit', icon: <Ticket size={18} /> },
  { title: 'Contact', to: '/contact', icon: <Mail size={18} /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren", 
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren", 
        staggerChildren: 0.1,  
      },
    },
  };

  const mobileLinkVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.2 }}
        className="absolute top-4 left-4 right-4 z-50 w-[70vw] m-auto flex justify-between items-center p-5 rounded-xl shadow-lg
                   bg-white/30 backdrop-blur-lg border border-white/20"
      >
        <Link to="/" className="text-xl font-bold text-gray-500">
          The National <span className='text-gray-900'>Bardo</span> Museum
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.to}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700
                         hover:bg-white/50 hover:text-black transition-colors"
            >
              {link.icon}
              <span>{link.title}</span>
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-lg bg-white/30 hover:bg-white/50"
          >
            <Menu className="text-gray-900" />
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)} 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm z-[98]"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 400, damping: 40 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[calc(100vw-40px)] bg-white shadow-2xl z-[99] p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold">Menu</span>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9, rotate: 0 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <X className="text-gray-700" />
                </motion.button>
              </div>

              <motion.ul
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col gap-4"
              >
                {navLinks.map((link) => (
                  <motion.li key={link.title} variants={mobileLinkVariants}>
                    <Link
                      to={link.to}
                      onClick={() => setIsOpen(false)} 
                      className="flex items-center gap-4 p-4 rounded-lg text-lg font-semibold text-gray-700
                                 hover:bg-gray-100 transition-colors w-full"
                    >
                      {link.icon}
                      <span>{link.title}</span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
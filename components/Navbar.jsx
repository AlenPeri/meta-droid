'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import MenuOverlay from './MenuOverlay';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-6 fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10`}
    >
      {/* background gradient */}
      <div className="absolute w-[50%] inset-0 gradient-01" />

      <div className={`${styles.innerWidth} mx-auto flex items-center justify-between`}>

        <div className="flex items-center gap-3">
          <img
            src="/cyberspace.jpeg"
            alt="Cyberspace Legion Logo"
            className="w-[36px] h-[36px] object-contain"
          />
          <h2 className="font-extrabold text-[18px] md:text-[22px] text-white tracking-wide">
            CYBERSPACE&nbsp;LEGION
          </h2>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="text-white text-[24px] md:text-[26px] focus:outline-none"
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

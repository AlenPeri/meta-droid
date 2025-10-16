'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';
import CursorEffect from '../components/CursorEffect';

const Hero = () => (
  <section
    className={`${styles.yPaddings} sm:pl-16 pl-6 relative min-h-screen flex items-center justify-center`}
    style={{ paddingTop: '100px' }} 
  >
    {/* Tubes Cursor Background */}
    <CursorEffect />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="relative z-10 text-center flex flex-col items-center justify-center"
    >
      <motion.h1
        variants={textVariant(1.1)}
        className="text-white text-[80px] sm:text-[100px] font-[700] uppercase tracking-wide leading-[1] font-['Montserrat',serif]"
      >
        CYBER SPACE
      </motion.h1>

      <motion.div
        variants={textVariant(1.2)}
        className="flex flex-row items-center justify-center"
      >
        <h1 className="text-white text-[80px] sm:text-[100px] font-[700] uppercase leading-[1] font-['Montserrat',serif]">
          LEG
        </h1>
        <h1 className="text-white text-[80px] sm:text-[100px] font-[700] uppercase leading-[1] font-['Montserrat',serif]">
          ION
        </h1>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;

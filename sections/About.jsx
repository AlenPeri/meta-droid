'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      {/* Section heading */}
      <TypingText
        title="| About Cyberspace Legion"
        textStyles="text-center"
      />

      {/* About text */}
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Cyberspace Legion (CSL)</span> is the leading{' '}
        <span className="font-extrabold text-white">cybersecurity society</span> at{' '}
        <span className="font-extrabold text-white">FAST NUCES, Islamabad</span> - the top
        university for Computer Science in Pakistan. Established on{' '}
        <span className="font-extrabold text-white">November 9th, 2021</span>, CSL is dedicated
        to promoting awareness, education, and innovation in digital security and ethical hacking. <br /><br />
        We provide students a platform to{' '}
        <span className="font-extrabold text-white">learn, collaborate, and lead</span> through
        hands-on trainings, national-level events, and mentorship from industry professionals.{' '}
        Our mission is to shape the next generation of{' '}
        <span className="font-extrabold text-white">cyber defenders</span> — individuals who are
        ready to safeguard the digital frontier of tomorrow.
      </motion.p>

      {/* Arrow */}
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;

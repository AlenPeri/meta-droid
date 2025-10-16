'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText, ExploreCard, TitleText } from '../components';
import { staggerContainer } from '../utils/motion';
import { exploreWorlds } from '../constants';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        {/* Section Header */}
        <TypingText title="| Explore CSL Domains" textStyles="text-center" />

        <TitleText
          title={(
            <>
              Dive into the core areas of{' '}
              <span className="text-cyan-400">CSL</span>
              <br className="md:block hidden" /> -
              Where students evolve into cybersecurity professionals!
            </>
          )}
          textStyles="text-center"
        />

        {/* Explore Cards */}
        <div
          className="
            mt-10
            flex flex-col lg:flex-row
            justify-center lg:justify-between
            items-stretch
            gap-6
            min-h-[60vh] sm:min-h-[70vh]
            px-4
          "
        >
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;

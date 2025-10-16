'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.3, 0.75)}
    className={`
      relative
      ${active === id ? 'lg:flex-[3.5] flex-[1]' : 'lg:flex-[0.5] flex-[1]'}
      flex items-center justify-center w-full
      h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]
      transition-[flex] duration-[0.7s] ease-out-flex
      cursor-pointer overflow-hidden rounded-[24px] group
    `}
    onClick={() => handleClick(id)}
  >
    {/* Background image */}
    <img
      src={imgUrl}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover object-center rounded-[24px]"
    />

    {/* Mobile (Always Show Details) */}
    <div
      className="
        absolute inset-0 lg:hidden
        flex flex-col justify-end
        bg-gradient-to-t from-black/90 via-black/60 to-transparent
        p-5 sm:p-6 rounded-[24px]
      "
    >
      <h2 className="font-semibold text-white text-[22px] sm:text-[26px] mb-2">
        {title}
      </h2>
      <p className="text-white/80 text-[14px] sm:text-[15px] leading-[22px]">
        Dive deep into {title} — understand core principles, tools, and
        real-world cybersecurity use cases guided by CSL experts.
      </p>
    </div>

    {/* Desktop Interaction */}
    {active !== id ? (
      <h3
        className="
          hidden lg:block
          font-semibold sm:text-[26px] text-[18px] text-white
          absolute z-10 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]
          tracking-wide drop-shadow-md
        "
      >
        {title}
      </h3>
    ) : (
      <div
        className="
          hidden lg:flex absolute bottom-0 p-8 justify-start
          w-full flex-col
          bg-gradient-to-t from-black/90 via-black/60 to-transparent
          rounded-b-[24px]
        "
      >
        {/* Icon */}
        <div
          className={`
            ${styles.flexCenter}
            w-[60px] h-[60px]
            bg-cyan-500/10 border border-cyan-400/40 backdrop-blur-md
            mb-[16px] rounded-[12px] overflow-hidden
          `}
        >
          <img
            src="/shield.jpg"
            alt="shield icon"
            className="w-full h-full object-cover rounded-[10px]"
          />
        </div>

        {/* Subtitle */}
        <p className="font-medium text-[15px] text-cyan-400 uppercase tracking-wider">
          Explore Domain
        </p>

        {/* Title */}
        <h2 className="mt-[16px] font-semibold sm:text-[32px] text-[24px] text-white leading-tight drop-shadow-lg">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-[10px] text-[15px] text-white/80 leading-[22px] max-w-[85%]">
          Dive deep into {title} - understand core principles, tools, and
          real-world cybersecurity use cases guided by CSL experts.
        </p>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;

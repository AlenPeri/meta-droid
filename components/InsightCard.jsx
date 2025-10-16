'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ index, imgUrl, title, subtitle, link }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.4, 0.9)}
    className="flex flex-col md:flex-row gap-5 md:gap-6 items-center md:items-start cursor-pointer w-full"
  >
    {/* Image section */}
    <div
      className="
        relative flex-shrink-0
        w-[90%] xs:w-[85%] sm:w-[80%] md:w-[280px] lg:w-[320px]
        h-[200px] xs:h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px]
        rounded-[18px] overflow-hidden
        border border-blue-400/40 hover:border-purple-400/50
        shadow-[0_0_12px_rgba(59,130,246,0.25)]
        hover:shadow-[0_0_18px_rgba(147,51,234,0.35)]
        transition-all duration-300 ease-in-out
      "
    >
      <img
        src={imgUrl}
        alt={title}
        className="
          absolute inset-0 w-full h-full
          object-contain sm:object-cover
          rounded-[18px]
          transition-transform duration-500 ease-out
          group-hover:scale-105
        "
      />
    </div>

    {/* Text + Link section */}
    <div className="w-full flex justify-between items-center md:items-start gap-4 md:gap-6 px-2 sm:px-0">
      <div className="flex-1 md:ml-[20px] flex flex-col max-w-[600px] text-center md:text-left">
        <h4 className="font-semibold text-[20px] xs:text-[22px] sm:text-[26px] lg:text-[34px] text-white leading-tight">
          {title}
        </h4>
        <p className="mt-2 sm:mt-3 font-normal text-[13px] xs:text-[14px] sm:text-[16px] lg:text-[18px] text-secondary-white leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Arrow Button (always visible, scales by screen) */}
      <Link href={link || '#'} passHref>
        <div
          className="
            flex items-center justify-center
            w-[50px] h-[50px] xs:w-[55px] xs:h-[55px]
            sm:w-[65px] sm:h-[65px] lg:w-[80px] lg:h-[80px]
            rounded-full border border-white/50
            bg-transparent hover:bg-white/10
            transition-all duration-300 flex-shrink-0
          "
        >
          <img
            src="/arrow.svg"
            alt="arrow"
            className="w-[45%] h-[45%] object-contain"
          />
        </div>
      </Link>
    </div>
  </motion.div>
);

export default InsightCard;

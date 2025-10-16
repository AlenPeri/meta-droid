'use client';

import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';
import styles from '../styles';
import { footerVariants } from '../utils/motion';
import { socials } from '../constants/socials';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      {/* Main Heading + Email Button */}
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white leading-tight">
          Join the Cyber Frontier
        </h4>

        <a
          href="mailto:cyberspacelegion@fast.isb.edu"
          className="relative flex items-center h-fit py-4 px-8 bg-gradient-to-r from-[#25618B] to-[#3A8BC2] rounded-[32px] gap-3 shadow-lg border border-[#4A9BD5] overflow-hidden group"
        >
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-all duration-500 ease-out transform -translate-y-full group-hover:translate-y-0" />
          
          <MdEmail className="w-6 h-6 text-white relative z-10 group-hover:rotate-[-12deg] transition-transform duration-300" />
          <span className="font-semibold text-[16px] text-white relative z-10">
            Email Us
          </span>
        </a>
      </div>

      {/* Divider + Footer Info */}
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white tracking-wide">
            CYBER SPACE LEGION
          </h4>

          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © {new Date().getFullYear()} Cyberspace Legion. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
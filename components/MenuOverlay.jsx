'use client';

import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { FaTimes, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const overlayVariants = {
  hidden: { scale: 0, opacity: 0, borderRadius: '50%' },
  show: {
    scale: 1,
    opacity: 1,
    borderRadius: '0%',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    scale: 0,
    opacity: 0,
    borderRadius: '50%',
    transition: { duration: 0.4, ease: [0.55, 0, 0.55, 0.2] },
  },
};

const linkList = [
  { id: 'home', label: 'Home' },
  { id: 'events', label: 'Previous Events' },
  { id: 'trainings', label: 'Trainings' },
  { id: 'mentors', label: 'Mentors' },
  { id: 'exec', label: 'Executive Council' },
  { id: 'team', label: 'Team' },
];

const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/', icon: FaLinkedin },
  { name: 'Twitter', url: 'https://twitter.com/', icon: FaTwitter },
  { name: 'Instagram', url: 'https://instagram.com/', icon: FaInstagram },
];

const MenuOverlay = ({ onClose = () => {} }) => {
  const overlay = (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col justify-between font-[500] text-white pointer-events-auto overflow-hidden"
      variants={overlayVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{
        fontFamily: '"Bricolage Grotesque", sans-serif',
        background: `
          radial-gradient(circle at 30% 20%, rgba(90, 45, 150, 0.8) 0%, rgba(15, 5, 46, 1) 80%),
          radial-gradient(circle at 70% 80%, rgba(50, 20, 80, 0.8) 0%, rgba(0, 0, 0, 0.9) 80%)
        `,
      }}
    >
      {/* Subtle circular patterns overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Close button */}
      <div className="relative w-full flex items-center justify-end px-6 py-6 z-10">
        <button
          onClick={onClose}
          className="text-white text-[28px] cursor-pointer hover:text-cyan-400 transition-colors focus:outline-none"
          aria-label="Close menu"
        >
          <FaTimes />
        </button>
      </div>

      {/* Center: nav links */}
      <div className="relative flex-1 flex flex-col items-center justify-center space-y-4 z-10">
        {linkList.map((link) => (
          <button
            key={link.id}
            onClick={() => {
              console.log('Clicked menu link:', link.id);
              onClose();
            }}
            className="text-white text-[32px] md:text-[56px] leading-tight font-medium cursor-pointer hover:text-cyan-400 transition-colors"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Bottom: socials + location */}
      <div className="relative w-full border-t border-white/10 py-6 px-8 flex flex-col md:flex-row items-center justify-between gap-4 z-10">
        <p className="text-white/80 text-[16px] tracking-wide m-0">
          Islamabad, PK
        </p>

        <div className="flex items-center gap-6">
          {socialLinks.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="text-white/90 hover:text-cyan-400 transition-colors text-[22px] cursor-pointer"
                aria-label={s.name}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );

  return typeof window !== 'undefined'
    ? createPortal(overlay, document.body)
    : null;
};

export default MenuOverlay;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNav = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', hash);
      }
    }, 300);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 z-50 w-full bg-surface-alt/80 backdrop-blur-md border-b border-border-subtle transition-all duration-300"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <img src="/assets/hanabusa_logo.png" alt="Hanabusa Logo" className="h-10 w-auto" />
          <div className="flex items-baseline gap-3">
            <h1 className="font-sans text-xl font-medium tracking-wide text-text-primary uppercase">Hanabusa</h1>
            <span className="h-3 w-[1px] bg-border-subtle hidden lg:block"></span>
            <span className="text-[10px] text-text-secondary uppercase tracking-[0.1em] hidden lg:block">Auténtica pastelería japonesa</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, staggerChildren: 0.1 }}
          className="hidden md:flex items-center gap-10"
        >
          <motion.a whileHover={{ y: -2 }} className="text-sm font-light text-text-secondary hover:text-primary transition-colors tracking-widest uppercase" href="#hero">Inicio</motion.a>
          <motion.a whileHover={{ y: -2 }} className="text-sm font-light text-text-secondary hover:text-primary transition-colors tracking-widest uppercase" href="#historia">Filosofía</motion.a>
          <motion.a whileHover={{ y: -2 }} className="text-sm font-light text-text-secondary hover:text-primary transition-colors tracking-widest uppercase" href="#menu">Menú</motion.a>
          <motion.a whileHover={{ y: -2 }} className="text-sm font-light text-text-secondary hover:text-primary transition-colors tracking-widest uppercase" href="#voces">Voces</motion.a>
          <motion.a whileHover={{ y: -2 }} className="text-sm font-light text-text-secondary hover:text-primary transition-colors tracking-widest uppercase" href="#ubicacion">Visítanos</motion.a>
        </motion.div>


        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-text-primary p-2">
          <span className="material-symbols-outlined font-light">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-surface/95 backdrop-blur-md border-t border-border-subtle"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              <a onClick={(e) => handleMobileNav(e, '#hero')} className="text-base font-medium text-text-secondary hover:text-primary tracking-widest uppercase" href="#hero">Inicio</a>
              <a onClick={(e) => handleMobileNav(e, '#historia')} className="text-base font-medium text-text-secondary hover:text-primary tracking-widest uppercase" href="#historia">Filosofía</a>
              <a onClick={(e) => handleMobileNav(e, '#menu')} className="text-base font-medium text-text-secondary hover:text-primary tracking-widest uppercase" href="#menu">Menú</a>
              <a onClick={(e) => handleMobileNav(e, '#voces')} className="text-base font-medium text-text-secondary hover:text-primary tracking-widest uppercase" href="#voces">Voces</a>
              <a onClick={(e) => handleMobileNav(e, '#ubicacion')} className="text-base font-medium text-text-secondary hover:text-primary tracking-widest uppercase" href="#ubicacion">Visítanos</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

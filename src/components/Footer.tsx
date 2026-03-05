import React from 'react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-surface-alt pt-20 pb-10 border-t border-border-subtle">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-4 md:grid-cols-2 mb-16"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-jp font-bold text-lg text-text-primary">はなぶさ</span>
            </div>
            <p className="text-xs text-text-secondary font-light leading-relaxed max-w-xs">
              Pastelería japonesa artesanal.<br />Tradición, cariño y sabor en Madrid.
            </p>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-text-primary">Explorar</h4>
            <ul className="space-y-3 text-xs text-text-secondary font-light">
              <li><a className="hover:text-primary transition-colors" href="#hero">Inicio</a></li>
              <li><a className="hover:text-primary transition-colors" href="#historia">Filosofía</a></li>
              <li><a className="hover:text-primary transition-colors" href="#menu">Menú</a></li>
              <li><a className="hover:text-primary transition-colors" href="#voces">Voces</a></li>
              <li><a className="hover:text-primary transition-colors" href="#ubicacion">Visítanos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-text-primary">Social</h4>
            <div className="flex gap-4">
              <a className="text-text-secondary hover:text-primary transition-colors" href="https://www.instagram.com/hanabusamadrid" target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.06h.63zm1.673 5.378c-.845 0-1.54.695-1.54 1.543 0 .845.695 1.54 1.54 1.54.845 0 1.54-.695 1.54-1.54 0-.845-.695-1.543-1.54-1.543zm-4.678 1.76A6.776 6.776 0 1012 9.135a6.776 6.776 0 00-7.362 7.362 6.776 6.776 0 007.362-7.362zM12 10.93a5.035 5.035 0 110 10.07 5.035 5.035 0 010-10.07z" fillRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </motion.div>
        <div className="border-t border-border-subtle pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-text-secondary">© 2026 Hanabusa Pastelería</p>
          <div className="flex gap-2">
            <span className="h-1 w-1 rounded-full bg-border-subtle"></span>
            <span className="h-1 w-1 rounded-full bg-border-subtle"></span>
            <span className="h-1 w-1 rounded-full bg-border-subtle"></span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { motion } from 'motion/react';

export default function Location() {
  return (
    <section className="relative py-32 bg-surface" id="ubicacion">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-surface-alt rounded-bento shadow-xl border border-border-subtle overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
              <div className="mb-10 flex flex-col items-center sm:items-start">
                <h2 className="font-sans text-3xl font-light text-text-primary mb-2">Te esperamos</h2>
                <span className="h-[1px] w-12 bg-primary block mb-1"></span>
              </div>
              <div className="space-y-10 w-full flex flex-col items-center sm:items-start">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 group items-center sm:items-start w-full max-w-sm sm:max-w-none">
                  <div className="flex-shrink-0 sm:mt-1">
                    <span className="material-symbols-outlined text-text-secondary font-light group-hover:text-primary transition-colors group-hover:animate-bounce">location_on</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-text-primary mb-2">Ubicación</h4>
                    <p className="text-text-secondary font-light">
                      Mercado Antón Martín<br />
                      C. de Sta. Isabel, 5, Puesto 42 Planta Baja<br />
                      Centro, 28012 Madrid
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 group items-center sm:items-start w-full max-w-sm sm:max-w-none">
                  <div className="flex-shrink-0 sm:mt-1">
                    <span className="material-symbols-outlined text-text-secondary font-light group-hover:text-primary transition-colors">schedule</span>
                  </div>
                  <div className="w-full">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-text-primary mb-2">Horario</h4>
                    <div className="space-y-1 text-text-secondary font-light text-sm">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-border-subtle/30 pb-2 mb-1 gap-1 sm:gap-0">
                        <span>Martes a Viernes</span>
                        <div className="text-center sm:text-right">
                          <span>11:30 - 14:30</span><span className="hidden sm:inline"> | </span><br className="sm:hidden" />
                          <span>17:30 - 20:00</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-border-subtle/30 py-2 mb-1 gap-1 sm:gap-0">
                        <span>Sábados</span>
                        <span className="text-center sm:text-right">11:30 - 17:00</span>
                      </div>
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center py-2 text-text-secondary/60 italic gap-1 sm:gap-0">
                        <span>Domingo y Lunes</span>
                        <span className="text-center sm:text-right">Cerrado</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 group items-center sm:items-start w-full max-w-sm sm:max-w-none">
                  <div className="flex-shrink-0 sm:mt-1">
                    <span className="material-symbols-outlined text-text-secondary font-light group-hover:text-primary transition-colors">call</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-text-primary mb-2">Contacto</h4>
                    <p className="text-text-secondary font-light">+34 689 468 019<br />hanabusamadrid@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <a
                  href="https://maps.app.goo.gl/ouGPuujETN5GfqyW8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-text-primary text-white text-xs uppercase tracking-widest hover:bg-primary transition-colors rounded-sm"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>
            <div className="relative h-96 w-full lg:h-auto bg-gray-100 group">
              <img alt="Map of Hanabusa at Mercado Antón Martín" className="h-full w-full object-cover grayscale opacity-80 mix-blend-multiply transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5bye-lyRkaaeiagFvsoKlY4AX7JqBmywBbi61Ts2oIYXJiEPoakcUoYTzpP13v2T0j6A8yKpLIFkGGZcWFhmbakopqrq6CCT-YB7_LyJ1dbTJsff0T3X7mHjqww1iyM3INe1el8rr9ce_cmf5jQ9bkgBrr0jbNx7mTYTJiwIaQajZ5XBe7I2YQJ3Tj4vpbTyFfE3RxuBQd4wBf8o8gNKtUQwTseZ6xV85HUAQC0VW8s_zg2IyBHsDiWOLY5Iv3ePULkVsxZUEYto" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-4 w-4 bg-primary rounded-full animate-ping absolute"></div>
                <div className="h-8 w-8 bg-primary/20 rounded-full animate-pulse absolute delay-75"></div>
                <div className="h-4 w-4 bg-primary rounded-full border-2 border-white relative z-10 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';

export default function Philosophy() {
  return (
    <section className="relative py-32 bg-surface overflow-hidden" id="historia">
      <div className="wash-bg" style={{ '--wash-color': '#F0F4F0', opacity: 0.8, background: 'linear-gradient(120deg, #F9F9F7 0%, #F0F4F0 100%)' } as React.CSSProperties}></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="relative mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          <div className="lg:col-span-1 hidden lg:block">
            <h2 className="vertical-text text-5xl text-text-secondary/10 font-jp font-bold select-none absolute top-0 -left-4">歴史</h2>
          </div>
          <div className="lg:col-span-11 pl-4 lg:pl-0">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs block mb-4">Filosofía</span>
            <h2 className="font-sans text-3xl md:text-4xl font-light text-text-primary mb-6">
              La belleza de cada <span className="font-normal border-b-2 border-primary/30">encuentro</span>
            </h2>
            <p className="max-w-2xl text-text-secondary font-light leading-relaxed text-lg">
              En Hanabusa creemos que un postre puede cambiarte el día. Nos inspira el concepto japonés de "Ichigo Ichie" (一期一会), cada encuentro es único y merece ser vivido con atención. Por eso cuidamos cada detalle, desde la elaboración hasta el trato con cada persona que servimos.
            </p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="grid grid-cols-2 gap-4 lg:gap-8">
            <div className="space-y-4 lg:space-y-8 mt-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="overflow-hidden rounded-bento bg-surface relative aspect-[4/5] group"
              >
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img alt="Traditional Japanese tea ceremony whisk" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfejkdrWzX5vnlIJp_kaUtb4DsKip9Kacvrpk2DRroIRzcGrjDsVIvDv7eME2CFfFHXbNtyidiCDtFrgVBbvBCj2NLlWdyPHqUQR6aaSmj3JeXDAwOcYZST4Za9_71d9QA0NaMBLebiam_mnkjFzdTkMA0XCiHAIyUW8JwuyPgFfuejBL4Zj9ROuCIBWtEyGDqz_6QvMwNq76qCDRwWNdMAQmnc62EMyyYw3J-YhdFiKzG7DN9mIRh68qT7PfCvkv-3lMgahYB4sk" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 bg-surface/80 backdrop-blur-sm rounded-bento border border-border-subtle"
              >
                <p className="font-jp text-sm text-text-secondary mb-2">素材</p>
                <h3 className="font-medium text-lg text-text-primary mb-2">Ingredientes</h3>
                <p className="text-xs text-text-secondary font-light leading-relaxed">La base de nuestros dulces está en ingredientes genuinos.</p>
              </motion.div>
            </div>
            <div className="space-y-4 lg:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 bg-surface/80 backdrop-blur-sm rounded-bento border border-border-subtle"
              >
                <p className="font-jp text-sm text-text-secondary mb-2">技術</p>
                <h3 className="font-medium text-lg text-text-primary mb-2">Técnica</h3>
                <p className="text-xs text-text-secondary font-light leading-relaxed">Elaboraciones artesanales con atención al detalle.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="overflow-hidden rounded-bento bg-surface relative aspect-[4/5] group"
              >
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img alt="Madrid street aesthetic" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5sQu_3cq1F9ayQzqf-699wEA6AX1c5NOH91zRYIP4X3rpfOKWspxVSlUtQN3TsGoN2wEzP0AlAFuUeTf-pBL_DVhF6etc8jw9Xy2fbmuEikCeuiD-z0cuYRKqfg9Q19zXMiiY1nYdAJkHhKqulrV1AG7l50teUvTbp0MEBXdo5SVqh_HtqPUQw0KnRNaRp9E3yVRsuv2bwilC3VqG8-TPWMP-W1FvW9qYcIEGwMOE86FXbYazOYfCnK632viFwAVL4L3aDfFsaos" />
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center h-full space-y-12 py-12"
          >
            <div className="border-l border-primary/30 pl-8 ml-4">
              <p className="text-sm font-jp tracking-widest text-text-secondary mb-4 uppercase">Concepto</p>
              <h3 className="text-2xl font-light text-text-primary mb-6 leading-snug">
                Tradición que se saborea<br /> de Kyoto a Madrid
              </h3>
              <p className="text-text-secondary font-light leading-loose  text-balance">
                Nuestra pastelería nace por la pasión de compartir los sabores auténticos de nuestra tierra. Todos nuestros dulces son caseros, frescos y hechos con mucho cariño, para que cada bocado lo disfrutes de verdad y sientas la tradición japonesa en cada detalle.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

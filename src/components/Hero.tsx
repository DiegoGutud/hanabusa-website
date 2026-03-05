import React from 'react';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-36 lg:pt-32" id="hero">
      <div className="absolute inset-0 z-0 bg-surface overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-seigaiha opacity-40"></div>
        <div className="particle-layer absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" data-speed="-20"></div>
        <div className="particle-layer absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-soft" data-speed="30" style={{ animationDelay: '1s' }}></div>
        <div className="particle particle-sakura top-1/4 left-1/4 animate-drift"></div>
        <div className="particle particle-matcha top-1/3 right-1/3 animate-drift-reverse"></div>
        <div className="particle particle-sakura bottom-1/4 right-1/4 animate-drift" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.04] select-none overflow-hidden">
        <span className="font-jp font-bold text-[30vh] md:text-[30vw] whitespace-nowrap text-text-primary leading-none tracking-tighter [writing-mode:vertical-rl] md:[writing-mode:horizontal-tb]">はなぶさ</span>
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 px-6 lg:px-12 h-full items-center pb-20 lg:pb-0">
        <div className="md:col-span-1 lg:col-span-5 flex flex-col justify-center gap-6 lg:gap-8 text-left order-1 lg:order-1 animate-fade-in-up mt-8 lg:mt-0">
          <div className="flex items-center gap-4">
            <span className="h-[1px] w-12 bg-primary"></span>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">Madrid</span>
          </div>
          <h1 className="font-sans text-5xl lg:text-7xl font-light leading-tight text-text-primary tracking-tight">
            <span className="block font-medium">Hanabusa</span>
            <span className="block text-3xl lg:text-4xl text-text-secondary mt-2 font-light">Pastelería Japonesa</span>
          </h1>
          <p className="max-w-md text-base text-text-secondary leading-loose font-light animate-staggered-text" style={{ animationDelay: '0.2s' }}>
            Tradición japonesa en el corazón de Madrid.
            <br />Sabores auténticos, elaborados con cariño y amor.
          </p>
          <div className="flex flex-wrap gap-6 pt-4 animate-staggered-text" style={{ animationDelay: '0.4s' }}>
            <a className="group flex items-center gap-2 border-b border-primary pb-1 text-sm font-medium text-text-primary transition-all hover:text-primary" href="#menu">
              Descubrir Menú
              <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
            </a>
          </div>
        </div>
        <div className="md:col-span-1 lg:col-span-6 relative flex items-center justify-center lg:justify-end order-2 lg:order-2 mt-4 lg:mt-0">
          <div className="relative w-full max-w-sm lg:max-w-md aspect-[3/4] overflow-hidden rounded-bento shadow-xl bg-surface-alt animate-blur-in">
            <img alt="Artisanal matcha layered cake close up" className="h-full w-full object-cover transition-transform duration-[2s] hover:scale-105 opacity-90" src="/assets/hero_cake.png" />
            <div className="absolute top-8 right-6 z-20 pointer-events-none mix-blend-difference text-white/80">
              <div className="vertical-text text-4xl font-jp font-light tracking-widest opacity-80">
                和の心
              </div>
            </div>
          </div>
          <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full border border-primary/20 z-0 hidden lg:block animate-[spin_30s_linear_infinite]"></div>
        </div>
        <div className="lg:col-span-1 hidden lg:flex h-full items-center justify-center order-3">
          <div className="vertical-text text-xs text-text-secondary uppercase tracking-[0.3em] flex items-center gap-4">
            <span>Est. 2020</span>
            <span className="h-12 w-[1px] bg-text-secondary"></span>
            <span>Japanese Tradition</span>
          </div>
        </div>
      </div>
    </section>
  );
}

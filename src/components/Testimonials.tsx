import React from 'react';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section className="py-32 bg-surface-alt relative overflow-hidden" id="voces">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-surface to-transparent z-10"></div>
      <div className="absolute inset-0 z-0 bg-surface-alt">
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-blue-100 rounded-full animate-float"></div>
        <div className="absolute top-1/4 right-20 w-3 h-3 bg-blue-50 rounded-full animate-float-delayed"></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-sans text-3xl font-light text-text-primary">Voces</h2>
          <p className="mt-4 text-text-secondary font-light font-jp">お客様の声</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-surface p-8 rounded-bento border border-transparent hover:border-border-subtle transition-all duration-300 animate-float shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-10 w-10 rounded-full bg-slate-200 bg-cover bg-center grayscale opacity-80" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_Op-4YKSxmT0mi8Pzap-1Rh5FMOVuyv7jeW1n0jrDYISRn1nYNpm2RKYyMGI78NVNDG_8v0ml21JeKc2-mL1elQbZUsZTDmWqmjQhkNOq5ouEMAmWHCwX46zjW2FoGwQjp2kIRZmok3diOIOdCpAmulXYqC0Fs3-UGtKrrVOoVVibxzLaGTyp2Lfcxhyo7hY_RIQvyvwTrwXgpX2QIONdpvhQP1iclD1hSqoWgkLHHHxV3bBLolwHR5aUyAIbIVV6HLX7xXGUFxc')" }}></div>
              <div>
                <p className="font-medium text-text-primary text-sm">Nuria M.</p>
                <div className="flex text-primary text-[10px] gap-0.5">
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                </div>
              </div>
            </div>
            <p className="text-text-secondary text-sm font-light leading-loose italic">
              "Es una parada obligatoria en Madrid. Me encantan los mochis y descubrir este sitio fue genial. Son los mejores mochis que he probado, naturales. En cada bocado notas el sabor de cada ingrediente. Mis sabores favoritos son dos: el de castaña y el de te matcha. Algunas veces puedes ver como los hace en directo. La señora que los hace es muy amable y atenta. Lo recomiendo sin duda."
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface p-8 rounded-bento border border-transparent hover:border-border-subtle transition-all duration-300 md:-translate-y-4 animate-float-delayed shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-10 w-10 rounded-full bg-slate-200 bg-cover bg-center grayscale opacity-80" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7l-cBAgPMRG2lz8gSuJqk2U7AIhc4Hq3QijlhaZEoCizv33rgQBcMUHAv3hkR9Ib6PR2fc70Sd2Cg6I8N1IlFCzYR3EAZzFe81xG59qo2dgYb9lERy_wnAyG3LnxokQBeFXq0fC01yBf6v13VhdgyaQUbe7A5_sZUUddq4UKZQrsk9dqEt8on7N548kO1HxdQq2MKaAer38uYWIhcvSgYufwZO0obpsiaHD0QiGGfEbZf-7WRlptgQfmjPPhB0MrlzCSS5sCNyFA')" }}></div>
              <div>
                <p className="font-medium text-text-primary text-sm">Lendar</p>
                <div className="flex text-primary text-[10px] gap-0.5">
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                </div>
              </div>
            </div>
            <p className="text-text-secondary text-sm font-light leading-loose italic">
              "He estado 4 veces en Japón. Y esta pastelería hace los mejores mochis que he comido en mi vida. Las dueñas son ENCANTADORAS, y el sabor de los mochis no tiene sentido de lo buenos que estan. El precio, totalmente justificado. Ya digo, no soy de Madrid, visité el mercado, por casualidad probe los mochis y al dia siguiente fui EXPRESAMENTE a desayunar mochis. En serio, son un 10. Probe el de castaña, el de sésamo y el de fresa con chocolate blanco (que para los golosos es una perdición). Todos buenísimos!"
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-surface p-8 rounded-bento border border-transparent hover:border-border-subtle transition-all duration-300 animate-float shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-10 w-10 rounded-full bg-slate-200 bg-cover bg-center grayscale opacity-80" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBAVTvgjxeZ7518d7sBKLc2JGONgRDS51ydRUCcvi6pIfG9LW8BtvcyiDcL-OD_qPVZtK7UrwnrJMWopLryToeaqDaebezxQx90ANle8at8MvTGrzRxOxUETVRaVqOUmTFN7oOXTld3tSX8LS33URRI3-3q5_dcWyqzVStZTwekbqZO6wBnA2M2_8lAPZFQ_qwwTCtbM5N9tqhBbYd7MWxIMw4X9108UY5b_Dt-F4q0fymjeduUxpkVUQ8kKnKHu_wO7gLy939Y4gE')" }}></div>
              <div>
                <p className="font-medium text-text-primary text-sm">Alejandra C.</p>
                <div className="flex text-primary text-[10px] gap-0.5">
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="material-symbols-outlined text-sm">star_half</span>
                </div>
              </div>
            </div>
            <p className="text-text-secondary text-sm font-light leading-loose italic">
              "Para mí esta pastelería es el descubrimiento del siglo. Deberían ponerle un monumento a esta mujer en la entrada del mercado. Mochis caseros hechos casi al momento por ella, al igual que los dorayakis. Además, la mujer es encantadora y siempre te atiende con una sonrisa. Tienen de muchos sabores, pero mi favorito es el mochi de fresa."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

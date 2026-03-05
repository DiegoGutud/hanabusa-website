import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const categories = ["Todos", "Mochis", "Mochis helados", "Pasteles", "Dorayakis", "Otros"];

  const items = [
    {
      id: 1,
      title: "Mochi tricolores",
      desc: "Un mochi de cada sabor.",
      price: "9.80€",
      img: "/assets/mochi_trio.png",
      type: "sakura",
      category: "Mochis",
      delay: "0s"
    },
    {
      id: 2,
      title: "Mochi de fresa",
      desc: "Mochi relleno de anko y fresa natural.",
      price: "3.50€",
      img: "/assets/mochi_fresa.jpeg",
      type: "sakura",
      category: "Mochis",
      delay: "0.1s"
    },
    {
      id: 3,
      title: "Mochi de castaña",
      desc: "Mochi relleno de anko y castaña en almíbar.",
      price: "3.50€",
      img: "/assets/mochi_castaña.jpeg",
      type: "gold",
      category: "Mochis",
      delay: "0.2s"
    },
    {
      id: 4,
      title: "Mochi de matcha",
      desc: "Mochi relleno de anko, chocolate blanco con té verde, frambuesa y nueces.",
      price: "3.50€",
      img: "/assets/mochi_matcha.png",
      type: "matcha",
      category: "Mochis",
      delay: "0.3s"
    },
    {
      id: 5,
      title: "Mochi de chocolate",
      desc: "Pastel de arroz (mochi) relleno de 2 chocolates.",
      price: "3.50€",
      img: "/assets/mochi_chocolate.jpeg",
      type: "gold",
      category: "Mochis",
      delay: "0.4s"
    },
    {
      id: 6,
      title: "Mochi de frambuesa",
      desc: "Mochi helado relleno de frambuesas.",
      price: "3.50€",
      img: "/assets/mochi_ice_frambuesa.jpeg",
      type: "sakura",
      category: "Mochis helados",
      delay: "0.5s"
    },
    {
      id: 7,
      title: "Mochi de matcha",
      desc: "Mochi helado sabor a matcha.",
      price: "3.50€",
      img: "/assets/mochi_ice_matcha.jpg",
      type: "matcha",
      category: "Mochis helados",
      delay: "0.6s"
    },
    {
      id: 8,
      title: "Mochi de tiramisu",
      desc: "Mochi helado sabor a tiramisu.",
      price: "3.50€",
      img: "/assets/mochi_ice_tiramisu.jpeg",
      type: "gold",
      category: "Mochis helados",
      delay: "0.7s"
    },
    {
      id: 9,
      title: "Yuzu cheesecake",
      desc: "Tarta de queso super esponjosa con un toque de Yuzu.",
      price: "8.50€",
      img: "/assets/yuzu_cake.jpg",
      type: "gold",
      category: "Pasteles",
      delay: "0.8s"
    },
    {
      id: 10,
      title: "Matcha roll",
      desc: "Rollo de bizcocho de 18 cm sabor matcha relleno de crema de mascarpone y judia roja.",
      price: "16.00€",
      img: "/assets/roll_matcha_cake.jpeg",
      type: "matcha",
      category: "Pasteles",
      delay: "0.9s"
    },
    {
      id: 11,
      title: "Dorayaki original",
      desc: "Pancakes japos rellenos de azuki.",
      price: "2.80€",
      img: "/assets/dorayaki_original.jpeg",
      type: "gold",
      category: "Dorayakis",
      delay: "1.0s"
    },
    {
      id: 12,
      title: "Dorayaki chocolate",
      desc: "Pancakes japos rellenos de crema de chocolate.",
      price: "2.80€",
      img: "/assets/dorayaki_nutella.jpg",
      type: "gold",
      category: "Dorayakis",
      delay: "1.1s"
    },
    {
      id: 13,
      title: "Flan de matcha",
      desc: "Flan de té verde con cubierta de gelatina y base de azuki.",
      price: "3.50€",
      img: "/assets/flan_matcha.png",
      type: "matcha",
      category: "Otros",
      delay: "1.2s"
    },
    {
      id: 14,
      title: "Melonpan (10 unidades)",
      desc: "Brioche con cubierta de galleta y azúcar.",
      price: "28.00€",
      img: "/assets/melon_pan.jpeg",
      type: "gold",
      category: "Otros",
      delay: "1.3s"
    }
  ];

  const filteredItems = activeCategory === "Todos"
    ? items
    : items.filter(p => p.category === activeCategory);

  return (
    <section className="catalog-container relative py-32 bg-surface transition-colors duration-700" id="menu">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-alt/50 -z-10 transition-opacity duration-700"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="h-[1px] w-8 bg-primary"></span>
              <span className="font-jp text-lg text-text-secondary">メニュー</span>
            </div>
            <h2 className="font-sans text-4xl font-light text-text-primary mb-8">Nuestra selección</h2>
            <div className="flex flex-wrap gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === cat
                    ? "border-primary text-primary bg-primary/5"
                    : "border-transparent text-text-secondary hover:text-primary hover:bg-surface"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => {
              const hoverBorder = item.type === 'sakura' ? 'hover:border-pink-100' : item.type === 'matcha' ? 'hover:border-green-100' : 'hover:border-yellow-100';
              const hoverBg = item.type === 'sakura' ? 'group-hover:bg-red-50 group-hover:text-red-900 group-hover:border-red-100' : item.type === 'matcha' ? 'group-hover:bg-green-50 group-hover:text-green-900 group-hover:border-green-100' : 'group-hover:bg-orange-50 group-hover:text-orange-900 group-hover:border-orange-100';

              return (
                <motion.div
                  key={`${activeCategory}-${item.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`card-${item.type} group bg-surface-alt rounded-bento p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-transparent ${hoverBorder} flex flex-col`}
                >
                  <div className="aspect-square overflow-hidden rounded-md bg-surface mb-6 relative">
                    <img alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={item.img} />
                    {(item.title === "Melonpan (10 unidades)" || item.title === "Matcha roll") && (
                      <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm px-2 py-1 text-[10px] font-bold text-white uppercase tracking-widest rounded-sm shadow-sm">
                        Previa reserva
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-text-primary rounded-sm shadow-sm">{item.price}</div>
                  </div>
                  <div className="px-2 pb-2">
                    <h3 className="font-sans text-lg font-medium text-text-primary mb-1">{item.title}</h3>
                    <p className="text-text-secondary text-sm font-light mb-4 line-clamp-2">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

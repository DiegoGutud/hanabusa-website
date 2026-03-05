import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const progressBar = document.getElementById('scrollProgress');
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      if (progressBar) progressBar.style.height = scrolled + "%";
    };

    const handleMouseMove = (e: MouseEvent) => {
      const particles = document.querySelectorAll('.particle-layer');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      particles.forEach(p => {
        const speed = parseFloat(p.getAttribute('data-speed') || '20');
        (p as HTMLElement).style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-surface text-text-primary font-sans antialiased overflow-x-hidden selection:bg-primary/20 selection:text-text-primary">
      <div className="scroll-progress-bar" id="scrollProgress"></div>
      <Navbar />
      <Hero />
      <Philosophy />
      <Menu />
      <Testimonials />
      <Location />
      <Footer />
    </div>
  );
}

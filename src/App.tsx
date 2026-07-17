import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import Mission from './sections/Mission';
import About from './sections/About';
import Facilities from './sections/Facilities';
import Gallery from './sections/Gallery';
import Location from './sections/Location';
import Contact from './sections/Contact';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0, 0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Mission />
        <About />
        <Facilities />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

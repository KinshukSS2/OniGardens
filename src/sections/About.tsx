import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-text', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });

      // Simple counter animation
      const counters = document.querySelectorAll('.stat-number');
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute('data-target') || '0');
        
        gsap.to(counter, {
          innerHTML: target,
          duration: 2.5,
          snap: { innerHTML: 1 },
          ease: 'power2.out',
          scrollTrigger: {
            trigger: counter,
            start: 'top 80%',
          },
          onUpdate: function () {
            if (counter.getAttribute('data-suffix')) {
              counter.innerHTML = Math.round(parseFloat(this.targets()[0].innerHTML)) + counter.getAttribute('data-suffix')!;
            }
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-forest relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="about-text text-gold text-lg uppercase tracking-[0.3em] font-medium mb-4">
            The Estate
          </h2>
          <h3 className="about-text text-4xl md:text-6xl font-serif text-white-fixed leading-tight">
            A Haven of Serenity
          </h3>
          <p className="about-text mt-8 text-white-fixed/80 text-lg leading-relaxed font-light">
            Perched high above the clouds, our estate spans vast stretches of pristine wilderness. 
            Every villa is a masterful blend of traditional Kerala architecture and modern minimalism, 
            designed to frame the sweeping valley views while remaining completely hidden within the foliage.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-16 border-t border-white-fixed/10 pt-16">
          <div className="about-text flex flex-col items-center text-center">
            <span className="stat-number text-5xl md:text-7xl font-serif text-white-fixed mb-4" data-target="20" data-suffix=" Acres">0</span>
            <span className="text-white-fixed/70 text-sm uppercase tracking-widest">Private Estate</span>
          </div>
          <div className="about-text flex flex-col items-center text-center">
            <span className="stat-number text-5xl md:text-7xl font-serif text-white-fixed mb-4" data-target="5000" data-suffix=" ft">0</span>
            <span className="text-white-fixed/70 text-sm uppercase tracking-widest">Elevation</span>
          </div>
          <div className="about-text flex flex-col items-center text-center">
            <span className="stat-number text-5xl md:text-7xl font-serif text-white-fixed mb-4" data-target="365">0</span>
            <span className="text-white-fixed/70 text-sm uppercase tracking-widest">Days of Greenery</span>
          </div>
          <div className="about-text flex flex-col items-center text-center">
            <span className="stat-number text-5xl md:text-7xl font-serif text-white-fixed mb-4" data-target="100" data-suffix="%">0</span>
            <span className="text-white-fixed/70 text-sm uppercase tracking-widest">Natural Reserve</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Mission() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.mission-reveal', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      gsap.to('.mission-img', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="mission" ref={sectionRef} className="py-24 md:py-40 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 order-2 md:order-1 relative h-[60vh] md:h-[80vh] rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Munnar Hills"
              className="mission-img absolute inset-0 w-full h-[120%] object-cover -top-[10%]"
            />
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col justify-center">
            <h2 className="mission-reveal text-gold text-lg md:text-xl uppercase tracking-[0.3em] font-medium mb-6">
              Our Mission
            </h2>
            <div className="mission-reveal">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-heading leading-snug">
                "To preserve Kerala's untouched hill landscapes while creating timeless experiences immersed in nature."
              </h3>
            </div>
            <p className="mission-reveal mt-8 text-secondary-text text-lg leading-relaxed font-light max-w-lg">
              We believe in architecture that breathes with the forest, not against it. 
              Oni Gardens is a sanctuary designed to bring you closer to the earth's natural rhythms, 
              offering unparalleled luxury wrapped in the misty embrace of the Western Ghats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MousePointer2 } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animation
      gsap.from('.hero-elem', {
        y: 50,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.5,
      });

      // Parallax scroll effect
      gsap.to(videoRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(textRef.current, {
        yPercent: 50,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 scale-105">
        <img
          src="https://images.pexels.com/photos/1122408/pexels-photo-1122408.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="Mountain Resort"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background/90" />
      </div>

      <div ref={textRef} className="relative z-10 text-center px-4 flex flex-col items-center mt-20">
        <h1 className="hero-elem text-5xl md:text-7xl lg:text-8xl text-white font-serif tracking-wide leading-tight drop-shadow-lg">
          Escape Into <br /> Kerala's Hidden Hills
        </h1>
        <p className="hero-elem subtitle mt-6 text-xl md:text-3xl text-white/90 max-w-2xl font-light">
          Luxury living surrounded by nature.
        </p>
        
        <div className="hero-elem mt-12 flex flex-col sm:flex-row gap-6">
          <a
            href="#mission"
            className="px-10 py-4 rounded-full bg-white-fixed text-forest btn-font font-medium hover:bg-gold hover:text-white-fixed transition-all duration-300 shadow-xl"
          >
            Explore
          </a>
          <a
            href="#contact"
            className="px-10 py-4 rounded-full border border-white-fixed text-white-fixed btn-font font-medium hover:bg-white-fixed hover:text-forest transition-all duration-300 backdrop-blur-sm"
          >
            Book Visit
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-70 animate-bounce">
        <span className="text-white text-sm tracking-widest uppercase mb-2">Scroll</span>
        <MousePointer2 className="text-white" size={24} />
      </div>
    </section>
  );
}

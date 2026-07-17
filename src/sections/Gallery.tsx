import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import lgZoom from 'lightgallery/plugins/zoom';


const images = [
  { id: 1, src: 'https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?w=1200', category: 'Landscape', title: 'Morning Mist' },
  { id: 2, src: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?w=1200', category: 'Villas', title: 'Villa Exterior' },
  { id: 3, src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?w=1200', category: 'Interiors', title: 'Luxury Bedroom' },
  { id: 4, src: 'https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?w=1200', category: 'Nature', title: 'Forest Trail' },
  { id: 5, src: 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=1200', category: 'Landscape', title: 'Sunset View' },
  { id: 6, src: 'https://images.pexels.com/photos/26139/pexels-photo-26139.jpg?w=1200', category: 'Villas', title: 'Private Pool' },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-title', {
        y: 30,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="py-24 md:py-32 bg-moss relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12 gallery-title">
          <h2 className="text-gold text-lg uppercase tracking-[0.3em] font-medium mb-4">
            Visual Journey
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white-fixed">
            The Gallery
          </h3>
        </div>


        <LightGallery
          speed={500}
          plugins={[lgZoom]}
          elementClassNames="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {images.map((img) => (
            <a 
              key={img.id}
              href={img.src}
              className="group block relative overflow-hidden rounded-xl break-inside-avoid cursor-pointer shadow-lg"
            >
              <img 
                src={img.src} 
                alt={img.title}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif text-xl tracking-wide">
                  {img.title}
                </span>
              </div>
            </a>
          ))}
        </LightGallery>
      </div>
    </section>
  );
}

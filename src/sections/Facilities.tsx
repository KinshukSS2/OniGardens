import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  Home,
  Mountain,
  Map,
  Flame,
  UtensilsCrossed,
  HeartHandshake,
  Tent,
  Car
} from 'lucide-react';

const mainFacilities = [
  { name: 'Luxury Villas', icon: Home, desc: 'Elegant villas with private pools and breathtaking views.', image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Private Viewpoints', icon: Mountain, desc: 'Exclusive spots to relax and soak in the beauty of nature.', image: 'https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Nature Trails', icon: Map, desc: 'Scenic walking trails through lush green forests.', image: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Bonfire Area', icon: Flame, desc: 'Cozy evenings with bonfires under the starry sky.', image: 'https://images.pexels.com/photos/2397414/pexels-photo-2397414.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Organic Restaurant', icon: UtensilsCrossed, desc: 'Farm-to-table meals made with fresh, local ingredients.', image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Yoga Deck', icon: HeartHandshake, desc: 'Find your inner peace with daily yoga sessions.', image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Children Play Area', icon: Tent, desc: 'Safe and fun spaces for kids to explore and play.', image: 'https://images.pexels.com/photos/1192033/pexels-photo-1192033.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Valet Parking', icon: Car, desc: 'Hassle-free and secure parking for your vehicles.', image: 'https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg?auto=compress&cs=tinysrgb&w=600' },
];



export default function Facilities() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.facility-main-card', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="facilities" ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden z-0">
      {/* Misty Background Image */}
      <div className="absolute inset-0 z-[-1] opacity-30 dark:opacity-10">
        <img
          src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="Misty Mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-gold text-lg uppercase tracking-[0.3em] font-medium mb-4">
            Curated Experiences
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-heading mb-6">
            Estate Facilities
          </h3>
          <p className="text-secondary-text max-w-2xl mx-auto font-light">
            Thoughtfully curated amenities that blend luxury with nature, designed to elevate your stay in the hills.
          </p>
        </div>

        {/* Main Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {mainFacilities.map((facility, index) => (
            <div
              key={index}
              className="facility-main-card bg-surface rounded-2xl overflow-hidden shadow-xl group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="relative pt-10 pb-8 px-6 text-center">
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-forest text-gold flex items-center justify-center border-4 border-surface shadow-md">
                  <facility.icon size={22} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-serif text-heading mb-3">{facility.name}</h4>
                <p className="text-secondary-text font-light text-sm">{facility.desc}</p>
                <div className="w-8 h-0.5 bg-gold mx-auto mt-4" />
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}

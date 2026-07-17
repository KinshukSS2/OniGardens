import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MapPin, Navigation, Compass } from 'lucide-react';

const nearbyAttractions = [
  { name: 'Eravikulam National Park', distance: '15 KM', image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Mattupetty Dam', distance: '20 KM', image: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Tea Museum', distance: '22 KM', image: 'https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Anamudi Peak', distance: '18 KM', image: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Top Station', distance: '32 KM', image: 'https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Echo Point', distance: '18 KM', image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Kundala Lake', distance: '25 KM', image: 'https://images.pexels.com/photos/2569500/pexels-photo-2569500.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Attukal Waterfalls', distance: '10 KM', image: 'https://images.pexels.com/photos/3310706/pexels-photo-3310706.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export default function Location() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.location-elem', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
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
    <section id="location" ref={sectionRef} className="py-24 md:py-32 bg-surface relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1 h-[50vh] lg:h-[70vh] rounded-[2rem] overflow-hidden shadow-2xl relative group location-elem">
            {/* Kerala Backwaters Image */}
            <img 
              src="https://images.pexels.com/photos/3370598/pexels-photo-3370598.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Kerala Backwaters"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>

          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <h2 className="location-elem text-gold text-lg uppercase tracking-[0.3em] font-medium mb-4">
              Location
            </h2>
            <h3 className="location-elem text-4xl md:text-5xl font-serif text-heading leading-tight mb-8">
              Disconnect to Reconnect
            </h3>
            <p className="location-elem text-secondary-text text-lg leading-relaxed font-light mb-10">
              Our estate is strategically located to offer complete seclusion while remaining accessible. 
              The journey to Oni Gardens is an experience in itself, winding through scenic mountain roads and misty valleys.
            </p>
            
            <div className="space-y-6">
              <div className="location-elem flex items-start gap-4">
                <div className="p-3 bg-background rounded-full text-forest">
                  <Navigation size={24} />
                </div>
                <div>
                  <h5 className="font-serif text-xl text-heading mb-1">Cochin International Airport</h5>
                  <p className="text-secondary-text text-sm font-light">110 KM (Approx. 3 hours drive)</p>
                </div>
              </div>
              
              <div className="location-elem flex items-start gap-4">
                <div className="p-3 bg-background rounded-full text-forest">
                  <Compass size={24} />
                </div>
                <div>
                  <h5 className="font-serif text-xl text-heading mb-1">Munnar Town Center</h5>
                  <p className="text-secondary-text text-sm font-light">25 KM (Approx. 45 minutes drive)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Attractions with Swiper */}
        <div className="location-elem border-t border-gray-100 pt-20">
          <div className="mb-10">
            <h3 className="text-3xl font-serif text-heading">Nearby Attractions</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nearbyAttractions.slice(0, 3).map((place, index) => (
              <div key={index} className="group rounded-2xl overflow-hidden cursor-pointer relative h-[300px]">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-white font-serif text-xl mb-1">{place.name}</h4>
                  <p className="text-gold text-sm font-light flex items-center gap-2">
                    <MapPin size={14} /> {place.distance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

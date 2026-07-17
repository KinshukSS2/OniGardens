import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-elem', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
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
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-forest relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-forest/5 hidden lg:block rounded-l-full" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 contact-elem">
          <h2 className="text-gold text-lg uppercase tracking-[0.3em] font-medium mb-4">
            Inquiries
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white-fixed">
            Begin Your Journey
          </h3>
        </div>

        <div className="max-w-5xl mx-auto bg-surface rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Contact Info */}
          <div className="w-full md:w-2/5 bg-moss text-white-fixed p-10 md:p-14 flex flex-col justify-between contact-elem">
            <div>
              <h4 className="text-3xl font-serif mb-6">Contact Us</h4>
              <p className="text-white/70 font-light mb-12">
                Reach out to our concierge team to plan your exclusive retreat in the hills.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Phone className="text-gold mt-1" size={20} />
                  <div>
                    <h5 className="font-medium font-serif text-lg mb-1">Phone</h5>
                    <p className="text-white/70 font-light text-sm">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="text-gold mt-1" size={20} />
                  <div>
                    <h5 className="font-medium font-serif text-lg mb-1">Email</h5>
                    <p className="text-white/70 font-light text-sm">reservations@onigardens.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="text-gold mt-1" size={20} />
                  <div>
                    <h5 className="font-medium font-serif text-lg mb-1">Address</h5>
                    <p className="text-white/70 font-light text-sm leading-relaxed">
                      Oni Gardens Estate,<br/>
                      Munnar-Vattavada Road,<br/>
                      Kerala, India 685612
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-3/5 p-10 md:p-14 contact-elem">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-dark-text tracking-wide">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full border-b border-dark-text/20 py-3 bg-transparent focus:outline-none focus:border-forest transition-colors text-dark-text placeholder-dark-text/40"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-dark-text tracking-wide">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full border-b border-dark-text/20 py-3 bg-transparent focus:outline-none focus:border-forest transition-colors text-dark-text placeholder-dark-text/40"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-dark-text tracking-wide">Phone</label>
                <input 
                  type="tel" 
                  id="phone"
                  className="w-full border-b border-dark-text/20 py-3 bg-transparent focus:outline-none focus:border-forest transition-colors text-dark-text placeholder-dark-text/40"
                  placeholder="+91"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-dark-text tracking-wide">Message</label>
                <textarea 
                  id="message"
                  rows={3}
                  className="w-full border-b border-dark-text/20 py-3 bg-transparent focus:outline-none focus:border-forest transition-colors text-dark-text placeholder-dark-text/40 resize-none"
                  placeholder="Tell us about your ideal retreat..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-full bg-forest text-white btn-font font-medium hover:bg-moss transition-colors shadow-lg mt-4"
              >
                Send Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

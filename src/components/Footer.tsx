import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-forest text-white/80 py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col space-y-4">
          <h3 className="text-3xl font-serif text-white">Oni Gardens</h3>
          <p className="max-w-xs font-light">
            Luxury living surrounded by nature in the hidden hills of Kerala.
          </p>
        </div>
        
        <div className="flex flex-col space-y-4 md:items-center">
          <h4 className="text-lg font-serif text-white uppercase tracking-widest">Quick Links</h4>
          <div className="flex flex-col space-y-2">
            <a href="#mission" className="hover:text-gold transition-colors">Mission</a>
            <a href="#about" className="hover:text-gold transition-colors">About</a>
            <a href="#facilities" className="hover:text-gold transition-colors">Facilities</a>
            <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
          </div>
        </div>

        <div className="flex flex-col space-y-4 md:items-end">
          <h4 className="text-lg font-serif text-white uppercase tracking-widest">Socials</h4>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gold transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/20 text-sm text-center md:text-left flex flex-col md:flex-row justify-between">
        <p>&copy; {new Date().getFullYear()} Oni Gardens. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed for luxury.</p>
      </div>
    </footer>
  );
}

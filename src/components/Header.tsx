import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';

const navLinks = [
  { name: 'Mission', href: '#mission' },
  { name: 'About', href: '#about' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial dark mode preference
    if (document.documentElement.classList.contains('dark') || 
        window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-surface/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className={`text-2xl font-bold font-serif ${scrolled ? 'text-heading' : 'text-white'}`}>
          Oni Gardens
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm tracking-widest uppercase transition-colors hover:text-gold ${
                scrolled ? 'text-dark-text' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleDarkMode}
            className={`transition-colors p-2 rounded-full ${scrolled ? 'text-dark-text hover:bg-gray-100/10' : 'text-white hover:bg-white/10'}`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <a
            href="#contact"
            className={`px-6 py-2 rounded-full border transition-all duration-300 btn-font ${
              scrolled
                ? 'border-heading text-heading hover:bg-heading hover:text-surface'
                : 'border-white text-white-fixed hover:bg-white-fixed hover:text-forest'
            }`}
          >
            Book Visit
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4 z-50 relative">
          <button onClick={toggleDarkMode} className={scrolled ? 'text-dark-text' : 'text-white'}>
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="text-dark-text" size={28} />
            ) : (
              <Menu className={scrolled ? 'text-heading' : 'text-white'} size={28} />
            )}
          </button>
        </div>
      </div>

    </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-surface z-40 flex flex-col justify-center items-center space-y-8 h-screen w-screen"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-heading hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 px-8 py-3 rounded-full bg-forest text-white-fixed btn-font hover:bg-moss transition-colors"
            >
              Book Visit
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

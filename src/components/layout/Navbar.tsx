import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Projects", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 w-full z-40 transition-all duration-300 px-6 py-4 md:px-12 flex justify-between items-center ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.02)] border-b border-gray-100 py-3" 
            : "bg-transparent py-5 text-white"
        }`}
      >
        {/* Logo Branding */}
        <a href="#hero" className="flex flex-col select-none group">
          <span className={`font-display font-black text-xl md:text-2xl tracking-[0.22em] leading-none transition-colors duration-300 ${isScrolled ? "text-zinc-900" : "text-white"}`}>
            AHILYA
          </span>
          <span className="text-[8px] uppercase tracking-[0.45em] font-display text-[#D4AF37] font-bold mt-1 transition-all duration-300 group-hover:tracking-[0.55em]">
            SURFACE LAB
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-sans text-xs uppercase tracking-widest font-medium transition duration-300 hover:text-[#D4AF37] ${
                isScrolled ? "text-gray-600" : "text-white/80"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA & Mobile Menu Trigger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className={`hidden md:inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition duration-300 ${
              isScrolled
                ? "bg-black text-white hover:bg-zinc-800"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            Get Quote
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-full border transition duration-300 ${
              isScrolled 
                ? "border-gray-200 text-gray-900 hover:bg-gray-50" 
                : "border-white/20 text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-30 pt-24 px-6 pb-8 flex flex-col justify-between lg:hidden shadow-xl"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-2xl font-bold text-gray-800 hover:text-[#D4AF37] transition duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="space-y-4">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-black text-white rounded-2xl font-mono text-xs uppercase tracking-widest text-center block"
              >
                Get Custom Quote
              </a>
              <div className="text-center font-mono text-[9px] text-gray-400 uppercase tracking-widest">
                AHILYA SURFACE LAB &bull; AHMEDABAD
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

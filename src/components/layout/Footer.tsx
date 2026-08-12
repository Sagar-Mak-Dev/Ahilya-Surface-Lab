import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex flex-col">
            <span className="font-display font-bold text-white text-xl tracking-[0.2em]">AHILYA</span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-semibold">SURFACE LAB</span>
          </div>
          <p className="text-sm text-gray-500 font-sans leading-relaxed">
            Pioneering premium stone finishes, custom cuts, and high-end surface installations for luxury architecture across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-white font-mono font-bold mb-6">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#gallery" className="hover:text-white transition">Our Portfolio</a></li>
            <li><a href="#contact" className="hover:text-white transition">Partner With Us</a></li>
          </ul>
        </div>

        {/* Services & Slabs */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-white font-mono font-bold mb-6">Slabs &amp; Cuts</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#products" className="hover:text-white transition">Italian Marble</a></li>
            <li><a href="#products" className="hover:text-white transition">Bespoke Quartzites</a></li>
            <li><a href="#products" className="hover:text-white transition">Engineered Quartz</a></li>
            <li><a href="#services" className="hover:text-white transition">CNC Edge Milling</a></li>
          </ul>
        </div>

        {/* Inquiries */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-widest text-white font-mono font-bold mb-6">Inquiries</h4>
          <p className="text-sm text-gray-500 font-sans leading-relaxed">
            Submit your custom dimensions, CAD drawings, or material specifications online through our consultation request form.
          </p>
          <a
            href="#contact"
            className="inline-block text-xs font-mono uppercase tracking-wider text-[#D4AF37] hover:text-white transition duration-300"
          >
            Request Consultation &rarr;
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-gray-600 font-mono">
          &copy; {new Date().getFullYear()} AHILYA SURFACE LAB LLP. Crafted in Ahmedabad. All rights reserved.
        </p>
        <button
          onClick={handleScrollToTop}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-800 hover:border-gray-700 hover:bg-gray-800 text-xs font-mono uppercase tracking-widest text-white transition duration-300"
        >
          Back To Top
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}

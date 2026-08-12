import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, HelpCircle, ArrowRight, CornerDownRight } from "lucide-react";

interface ProductItem {
  name: string;
  category: string;
  origin: string;
  thickness: string;
  finish: string;
  image: string;
  description: string;
}

const products: ProductItem[] = [
  {
    name: "Calacatta Gold Marble",
    category: "Natural Italian Marble",
    origin: "Apuan Alps, Carrara, Italy",
    thickness: "18mm & 20mm",
    finish: "High-Gloss Mirror Polish",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
    description: "Features a clean pure white background with dramatic, thick, bold gray veins highlighted by subtle golden ribbons.",
  },
  {
    name: "Absolute Black Granite",
    category: "Premium Natural Granite",
    origin: "Rajasthan, India",
    thickness: "20mm & 30mm",
    finish: "Flawless Leathered Finish",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1200&auto=format&fit=crop",
    description: "Highly uniform, dense deep-black stone with a rich satin touch. Exceptional resistance to heat, scratches, and stains.",
  },
  {
    name: "Bianco Carrara Quartz",
    category: "Engineered Quartz",
    origin: "State-of-the-art Lab",
    thickness: "15mm & 20mm",
    finish: "Polished & Velvet Matte",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200&auto=format&fit=crop",
    description: "Designed with 93% pure quartz crystals. Features light-gray feathery veins mimicking classic Carrara marble.",
  },
  {
    name: "Verde Imperiale Marble",
    category: "Natural Exotic Marble",
    origin: "Aosta Valley, Italy",
    thickness: "18mm",
    finish: "Honed Satin Finish",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1200&auto=format&fit=crop",
    description: "An elegant, highly sought-after exotic marble characterized by deep forest green waves interlaced with jade veins.",
  },
  {
    name: "Taj Mahal Quartzite",
    category: "Natural Quartzite",
    origin: "Ceara, Brazil",
    thickness: "20mm",
    finish: "High-Gloss & Honed",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=1200&auto=format&fit=crop",
    description: "A breathtakingly translucent exotic stone showcasing soft cream, gold, and warm beige layers.",
  },
  {
    name: "Sintered Onyx Porcelain",
    category: "Engineered Slabs",
    origin: "Sassuolo, Italy",
    thickness: "12mm & 15mm",
    finish: "Ultra-Gloss & Silk",
    image: "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?q=80&w=1200&auto=format&fit=crop",
    description: "Sintered surface composed of porcelain materials. Completely impervious to liquids and high thermal shocks.",
  },
];

export default function Products() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="products" className="py-28 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#D4AF37] font-semibold block mb-3">Our Slabs</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Curated Premium Material Catalog
          </h2>
          <div className="w-16 h-[2px] bg-black mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-sans">
            Hand-selected slabs sourced globally, processed with utmost precision to unleash the deep inner soul of the stone.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((p, idx) => (
            <motion.div
              key={p.name}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="bg-[#FAF8F5] rounded-[36px] overflow-hidden border border-gray-100/80 shadow-[0_10px_35px_rgba(0,0,0,0.015)] transition duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={p.image}
                  alt={p.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                  <span className="text-[10px] font-mono text-white tracking-widest uppercase">{p.category}</span>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">{p.name}</h3>
                  <p className="text-xs text-gray-500 font-sans leading-relaxed">{p.description}</p>
                </div>

                {/* Technical specs panel */}
                <div className="grid grid-cols-2 gap-4 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 text-[11px] font-mono text-gray-600">
                  <div>
                    <span className="text-gray-400 block uppercase">Thickness</span>
                    <span className="font-bold text-gray-800">{p.thickness}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block uppercase">Finish Option</span>
                    <span className="font-bold text-gray-800">{p.finish}</span>
                  </div>
                  <div className="col-span-2 border-t border-gray-100 pt-2">
                    <span className="text-gray-400 block uppercase">Origin Sourced</span>
                    <span className="font-bold text-gray-800 flex items-center gap-1">
                      <CornerDownRight className="w-3 h-3 text-[#D4AF37]" />
                      {p.origin}
                    </span>
                  </div>
                </div>

                <div>
                  <a
                    href="#contact"
                    className="w-full py-3.5 bg-black text-white hover:bg-[#D4AF37] text-center rounded-xl font-mono text-xs uppercase tracking-widest transition duration-300 flex items-center justify-center gap-2"
                  >
                    Request Physical Sample
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

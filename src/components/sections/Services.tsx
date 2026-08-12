import { Scissors, Layers, Sliders, Shield, Hammer, Building, Store, Home } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    title: "Precision Stone Cutting",
    description: "Milimeter-perfect linear and multi-angled cuts powered by high-speed CNC waterjet lasers. Guaranteed seamless joint fits on large slabs.",
    icon: Scissors,
  },
  {
    title: "Advanced Stone Shaping",
    description: "Multi-dimensional shaping of dense natural stones, quartz, and heavy marbles. Perfect curves, circles, and unique structural designs.",
    icon: Layers,
  },
  {
    title: "Custom Edge Profiling",
    description: "Over 15 distinct luxury edge styles including polished bullnose, mitered bookmatch joins, double-bevels, and architectural ogee profiles.",
    icon: Sliders,
  },
  {
    title: "Premium Surface Finishing",
    description: "Innovative texture treatments including mirror-polished sheen, matte honed, antiqued leather, acid-washed, or high-friction anti-slip finishing.",
    icon: Shield,
  },
  {
    title: "Custom Fabrication",
    description: "Turnkey fabrication of bespoke kitchen countertops, majestic fireplace surrounds, monolith stone vanities, and modular architectural pieces.",
    icon: Hammer,
  },
  {
    title: "Architectural Stone Solutions",
    description: "Bespoke stone panels, column claddings, floating staircase treads, and breathtaking floor medallions crafted for premium villas.",
    icon: Building,
  },
  {
    title: "Commercial Processing",
    description: "High-capacity production line catering to luxury hotels, corporate lobbies, bank headquarters, and large-scale public real estate projects.",
    icon: Store,
  },
  {
    title: "Luxury Residential Solutions",
    description: "Curating individual slabs, waterfall islands, washbasins, and majestic bathroom accent walls tailored for elite homeowners.",
    icon: Home,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#D4AF37] font-semibold block mb-3">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Bespoke Stone Processing Services
          </h2>
          <div className="w-16 h-[2px] bg-black mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-sans">
            Merging state-of-the-art European machinery with generational hand-craftsmanship to fabricate high-precision architectural solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.04)" }}
              className="bg-[#FAF8F5] p-8 rounded-[30px] border border-gray-100/80 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-gray-100 text-[#D4AF37] mb-6">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 font-sans text-xs leading-relaxed">{service.description}</p>
              </div>
              
              <div className="mt-8 pt-4 border-t border-gray-200/45">
                <a href="#contact" className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] hover:text-black font-semibold transition duration-300 inline-flex items-center gap-1">
                  Inquire Now &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

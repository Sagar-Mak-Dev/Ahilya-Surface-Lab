import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[#FAF8F5] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Story Grid */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#D4AF37] font-semibold block">Who We Are</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              A Legacy of Uncompromising Architectural Surfaces
            </h2>
            <div className="w-16 h-[2px] bg-black"></div>
            <p className="text-gray-600 font-sans text-base leading-relaxed">
              Based in Ahmedabad, Gujarat, <strong>AHILYA SURFACE LAB LLP</strong> stands as a premier vanguard in high-end stone surface cutting, shaping, finishing, and custom fabrication. We bridge the gap between architectural vision and material perfection.
            </p>
            <p className="text-gray-600 font-sans text-base leading-relaxed">
              We specialize in transforming raw marble blocks, heavy granites, and premium engineered slabs into exquisite masterpieces. Our state-of-the-art facility caters directly to visionary architects, premium interior designers, hospitality developers, and luxury homeowners seeking timeless finish quality.
            </p>
            
            {/* Mission & Vision Mini Cards */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-white p-6 rounded-2xl border border-gray-100/50 shadow-sm">
                <h4 className="font-display font-bold text-[#D4AF37] text-sm uppercase tracking-wider mb-2">Our Mission</h4>
                <p className="text-xs text-gray-500 font-sans leading-relaxed">
                  To supply world-class premium surface finishes and precision custom fabrication, elevating space luxury through advanced technology.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100/50 shadow-sm">
                <h4 className="font-display font-bold text-[#D4AF37] text-sm uppercase tracking-wider mb-2">Our Vision</h4>
                <p className="text-xs text-gray-500 font-sans leading-relaxed">
                  To remain the most trusted global manufacturer for high-complexity, zero-defect architectural stone and sintered installations.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#D4AF37]/10 to-transparent rounded-[40px] blur-2xl opacity-60" />
            <div className="relative rounded-[36px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop" 
                alt="Luxury Stone Surface Manufacturing" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

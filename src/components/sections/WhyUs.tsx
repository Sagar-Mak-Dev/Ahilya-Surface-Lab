import { Settings, Award, Clock, Users } from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  {
    title: "Modern Machinery",
    desc: "Equipped with Italian 5-axis CNC cutters & advanced bridge saws to guarantee sub-millimeter precision on custom cuts.",
    icon: Settings,
    tag: "01 / TECHNOLOGY"
  },
  {
    title: "Precision Engineering",
    desc: "Meticulous generational stone-masons handcraft all edge profiles, miters, and zero-bleed resin joints.",
    icon: Award,
    tag: "02 / EXPERTISE"
  },
  {
    title: "Quality Assurance",
    desc: "Every slab undergoes a rigorous triple-stage calibration and physical certification check before dispatch.",
    icon: Clock,
    tag: "03 / CERTIFICATION"
  },
  {
    title: "On-Time Delivery",
    desc: "Secure steel-crating combined with custom dispatch logs ensures safe, prompt on-site arrival nationwide.",
    icon: Users,
    tag: "04 / DISPATCH"
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-28 px-6 bg-[#FCFBF9] text-zinc-900 relative overflow-hidden border-t border-zinc-100">
      {/* Decorative luxury radial glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-[-20%] left-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-1/4 w-[400px] h-[400px] rounded-full bg-[#D4AF37]/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#D4AF37] font-semibold block mb-3">Our Standards</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 mb-6 uppercase">
            Why Choose Ahilya
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-zinc-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-sans">
            We merge cutting-edge technology with traditional craftsmanship to turn raw physical blocks into magnificent architectural art.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-10 bg-white border border-zinc-200/60 hover:border-[#D4AF37]/40 rounded-[32px] hover:bg-white transition-all duration-500 flex flex-col justify-between min-h-[340px] shadow-[0_15px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_50px_rgba(212,175,55,0.06)]"
            >
              <div>
                {/* Accent Top tag */}
                <div className="text-[10px] font-mono text-zinc-400 tracking-widest mb-6 block uppercase group-hover:text-[#D4AF37] transition-colors duration-300">
                  {r.tag}
                </div>
                
                {/* Icon with refined gradient mask & hover glowing */}
                <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-200/50 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-500 mb-8 relative overflow-hidden">
                  <r.icon className="w-6 h-6 relative z-10 transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <h3 className="text-xl font-display font-bold text-zinc-900 mb-3 tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                  {r.title}
                </h3>
              </div>
              
              <p className="text-xs text-zinc-500 font-sans leading-relaxed group-hover:text-zinc-700 transition-colors duration-300">
                {r.desc}
              </p>

              {/* Sophisticated bottom hairline decoration */}
              <div className="absolute bottom-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/0 to-transparent group-hover:via-[#D4AF37]/40 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

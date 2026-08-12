import { motion } from "motion/react";

const stats = [
  { label: "Projects Delivered", value: "500+" },
  { label: "Years Experience", value: "15+" },
  { label: "Client Satisfaction", value: "100%" },
];

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen w-full relative flex flex-col justify-between items-center overflow-hidden py-24 md:py-32">
      {/* Background Image & Overlay */}
      <img
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
        alt="Hero Background"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-subtle-zoom"
      />
      <div 
        className="absolute inset-0 pointer-events-none backdrop-blur-[1px]"
        style={{
          background: "radial-gradient(circle at 50% 45%, rgba(212, 175, 55, 0.15) 0%, rgba(0, 0, 0, 0.55) 50%, rgba(0, 0, 0, 0.85) 100%)"
        }}
      />
      
      {/* Spacer for Top Navbar alignment */}
      <div className="h-12" />

      {/* Main Content Container */}
      <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl my-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#D4AF37] font-semibold bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            Ahilya Surface Lab
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 mx-auto max-w-5xl leading-[1.02] uppercase"
        >
          Premium Stone Surfaces<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-amber-200 to-[#F3E5AB]">
            Crafted With Precision
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-sans leading-relaxed"
        >
          Delivering world-class stone cutting, shaping, finishing, and custom fabrication solutions for elite residential and commercial architectures.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto mb-16"
        >
          <a 
            href="#contact"
            className="bg-white text-black px-8 py-4 rounded-full font-sans font-medium hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-xl hover:shadow-[0_15px_30px_rgba(212,175,55,0.2)] text-center transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Request a Quote
          </a>
          <a 
            href="#products"
            className="border border-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-sans font-medium hover:bg-white/10 transition-all duration-300 text-center transform hover:-translate-y-0.5 active:translate-y-0"
          >
            View Slabs
          </a>
        </motion.div>

        {/* Floating Stats Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="grid grid-cols-3 gap-6 sm:gap-12 border-t border-white/10 pt-8 w-full max-w-3xl"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-4xl font-display font-extrabold text-white mb-1 tracking-tight">{stat.value}</div>
              <div className="text-[10px] sm:text-xs text-gray-400 font-mono uppercase tracking-widest leading-none">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

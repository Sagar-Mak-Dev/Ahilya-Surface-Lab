import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

// --- Types & Interfaces ---
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  beforeImage: string;
  location: string;
}

// --- Data Constants ---
const projectsData: Project[] = [
  {
    id: 1,
    title: "The Amara Villa Kitchen",
    category: "Kitchens",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop",
    location: "Ahmedabad, India",
  },
  {
    id: 2,
    title: "Opulent Residence Bathhouse",
    category: "Bathrooms",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop",
    location: "Gandhinagar, India",
  },
  {
    id: 3,
    title: "Skye Tower Executive Lobby",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    location: "Mumbai, India",
  },
  {
    id: 4,
    title: "Alba Calacatta Cladding",
    category: "Cladding",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    location: "Pune, India",
  },
  {
    id: 5,
    title: "Verde Imperiale Fireplace",
    category: "Living Rooms",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    location: "Ahmedabad, India",
  },
  {
    id: 6,
    title: "The Zenith Penthouse Island",
    category: "Kitchens",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",
    beforeImage: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=1200&auto=format&fit=crop",
    location: "Delhi NCR, India",
  },
];

export default function MoreSections() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);
  const [showBefore, setShowBefore] = useState<boolean>(false);

  const categories = ["All", "Kitchens", "Bathrooms", "Cladding", "Living Rooms", "Commercial"];

  const filteredProjects = activeTab === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeTab);

  return (
    <>
      {/* --- Project Gallery --- */}
      <section id="gallery" className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#D4AF37] font-semibold block mb-3">Exquisite Spaces</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Architectural Showcases
            </h2>
            <div className="w-16 h-[2px] bg-black mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-sans">
              Explore the physical realization of our meticulous crafting in luxurious kitchens, washrooms, exterior claddings, and commercial workspaces.
            </p>
          </div>

          {/* Categories Tab */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-black text-white"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  onClick={() => {
                    setLightboxProject(project);
                    setShowBefore(false);
                  }}
                  className="group relative overflow-hidden rounded-3xl cursor-pointer aspect-[4/3] bg-gray-100"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8" />
                  
                  {/* Static Card Label on bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white">
                    <p className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-1">{project.category}</p>
                    <h4 className="font-display text-lg font-bold">{project.title}</h4>
                    <p className="text-xs text-gray-300 font-sans mt-1">{project.location}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* --- Lightbox Modal with Before/After Slider toggle --- */}
      <AnimatePresence>
        {lightboxProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
          >
            <div className="relative w-full max-w-5xl bg-zinc-950 text-white rounded-3xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setLightboxProject(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center backdrop-blur-md z-10 transition duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid md:grid-cols-12">
                <div className="md:col-span-8 relative aspect-video bg-black flex items-center justify-center">
                  <img
                    src={showBefore ? lightboxProject.beforeImage : lightboxProject.image}
                    alt={lightboxProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  
                  {/* Before/After Toggle Pill */}
                  <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md rounded-full p-1.5 flex gap-1 z-10 border border-white/10">
                    <button
                      onClick={() => setShowBefore(false)}
                      className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition ${
                        !showBefore ? "bg-white text-black" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      After
                    </button>
                    <button
                      onClick={() => setShowBefore(true)}
                      className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition ${
                        showBefore ? "bg-white text-black" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      Before
                    </button>
                  </div>
                </div>

                <div className="md:col-span-4 p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-3 block">
                      {lightboxProject.category}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">{lightboxProject.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
                      Our artisans implemented precise CNC diamond milling, hand-polishing, and architectural edge matching. Highlighting zero-bleed resin joinery and heavy load structural backing.
                    </p>
                    <div className="space-y-3">
                      <div className="flex justify-between border-b border-zinc-800 pb-2 text-xs font-mono">
                        <span className="text-zinc-500 uppercase">Location</span>
                        <span>{lightboxProject.location}</span>
                      </div>
                      <div className="flex justify-between border-b border-zinc-800 pb-2 text-xs font-mono">
                        <span className="text-zinc-500 uppercase">Material Used</span>
                        <span>Calacatta Oro &amp; Rosso Levanto</span>
                      </div>
                      <div className="flex justify-between pb-2 text-xs font-mono">
                        <span className="text-zinc-500 uppercase">Execution</span>
                        <span>CNC + Hand Finished</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a
                      href="#contact"
                      onClick={() => setLightboxProject(null)}
                      className="w-full py-4 rounded-xl bg-white text-black font-sans font-semibold text-center hover:bg-zinc-100 transition duration-300 block text-sm"
                    >
                      Inquire About This Surface
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

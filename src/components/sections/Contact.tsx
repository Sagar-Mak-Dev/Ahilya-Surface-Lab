import { useState, FormEvent } from "react";
import { Clock, Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Luxury Villa",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          projectType: "Luxury Villa",
          message: "",
        });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-28 px-6 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.02),transparent_40%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Form Info & Contact Card */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#D4AF37] font-semibold block mb-3">Begin Your Project</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                Consult With Our Stone Lab
              </h2>
              <div className="w-16 h-[2px] bg-black mb-8"></div>
              <p className="text-gray-600 font-sans text-base leading-relaxed">
                Connect with our senior estimators, material specialists, and fabrication engineers today. We process quotes within 24 hours of CAD/specification submission.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5 p-6 bg-[#FAF8F5] rounded-3xl border border-gray-100/80 hover:border-[#D4AF37]/40 hover:bg-white hover:shadow-[0_20px_40px_rgba(212,175,55,0.04)] transition-all duration-300 relative group overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#D4AF37] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />
                <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 shrink-0 group-hover:text-white group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300 shadow-sm">
                  <Clock className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors duration-300">Operational Hours</h4>
                  <p className="text-sm text-gray-500 font-sans mt-1">
                    Monday &ndash; Saturday: 09:00 AM &ndash; 07:00 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form Card & Map */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-[#FAF8F5] rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-gray-500">Your Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Sameer Mehta"
                          className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black font-sans text-sm transition duration-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-gray-500">Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black font-sans text-sm transition duration-300"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-gray-500">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. sameer@architects.com"
                          className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black font-sans text-sm transition duration-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-gray-500">Project Type</label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black font-sans text-sm transition duration-300 appearance-none cursor-pointer"
                        >
                          <option value="Luxury Villa">Luxury Residential Villa</option>
                          <option value="Commercial Office">Commercial Workspace</option>
                          <option value="Bespoke Hospitality">Bespoke Hotel / Restaurant</option>
                          <option value="Bulk Retail Dealership">Retail &amp; Bulk Dealership</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-gray-500">Project Requirements &amp; Materials</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Detail dimensions, edge profiles, slab specifications, or timeline requirements..."
                        className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black font-sans text-sm transition duration-300 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-black text-white rounded-2xl font-mono text-xs uppercase tracking-[0.2em] hover:bg-zinc-800 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Request Premium Bid
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto text-[#D4AF37]">
                      <Check className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-bold text-gray-900">Inquiry Logged Successfully</h3>
                      <p className="text-gray-500 text-sm font-sans max-w-md mx-auto leading-relaxed">
                        Thank you for contacting Ahilya Surface Lab. One of our material specialists is matching your request with our current physical slab reserves. We will contact you shortly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

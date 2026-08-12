/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import WhyUs from "@/components/sections/WhyUs";
import MoreSections from "@/components/sections/MoreSections";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <WhyUs />
        <MoreSections />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechnicalSkills from "./components/TechnicalSkills";
import Contact from "./components/Contact";
import './index.css';


export default function App() {
  return (
    <div className="text-gray-800 bg-[#EBECF1] font-[Space_Grotesk] scroll-smooth">
      

      {/* Navbar fixa no topo */}
      <Navbar />

      {/* Seções da landing */}
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="TechnicalSkills">
        <TechnicalSkills/>
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
   
  );
}

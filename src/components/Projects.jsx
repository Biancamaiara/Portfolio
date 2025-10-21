import React from "react";
import { Sparkles, ArrowUpRight } from "lucide-react"; 

export default function Projects() {
  const projects = [
    {
      title: "Portal ISLA - Academic Website",
      desc: "Created an academic portal based on a Figma prototype, then transformed into code using HTML, TailwindCSS, and JavaScript.I implemented parallax effects and lightweight animations to make navigation more engaging and visually appealing.",
      link: "https://github.com/Biancamaiara/Projeto-Integrado-WebsiteAcademico.git",
    },
    {
      title: "Personal Portfolio - Creative and Personal Style",
      desc: "A personal website with a clean design and a focus on user experience. Developed with React and TailwindCSS, prioritizing typography, spacing, and visual harmony.",
      link: "https://github.com/seuusuario/brand-identity",
    },
    {
      title: "Android App in Kotlin - Pomodoro",
      desc: "This academic project was created as a team as part of the Mobile Development course. We learned the fundamentals of Android Studio and Kotlin, including screen creation, navigation, and simple data processing.",
      link: "https://github.com/seuusuario/ux-research",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-12">
      <div className="flex items-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold flex items-center gap-2">
          <Sparkles size={28} className="text-[#9C94D0]" />
          <span className="text-[#7878AB]">MY PROJECTS</span>{" "}
        </h2>
        <div className="w-24 h-[2px] bg-[#7878AB] ml-4 rounded-full"></div>
      </div>

      {/*Cards projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 max-w-6xl w-full justify-items-center">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[340px] h-[360px] bg-gradient-to-br from-[#F2F3F6] to-[#E5E6EC] border border-white rounded-3xl shadow-[8px_8px_16px_#d2d3d8,_-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#d2d3d8,_inset_-8px_-8px_16px_#ffffff] transition-all duration-300 p-6 flex flex-col justify-center items-center text-center group">
            
            <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-[#8A7BCF] mb-4">
              {p.title}
            </h3>
            <p className="text-[#4D4D4D] text-sm md:text-base mb-6">
              {p.desc}
            </p>
            </div>

            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#EBECF1] shadow-[4px_4px_8px_#9C94D0,_-4px_-4px_8px_#ffffff] group-hover:shadow-[inset_4px_4px_8px_#9C94D0_inset_-4px_-4px_8px_#ffffff] transition-all duration-300 hover:bg-[#dcdff1]">
              <ArrowUpRight
                size={22}
                className="text-[#7878AB] group-hover:rotate-45 transition-transform duration-300"/>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

import React, {useRef} from "react";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFigma } from "react-icons/si";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function TechnicalSkills() {
  const sliderRef = useRef(null);

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 w-12 h-12" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 w-12 h-12" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 w-12 h-12" /> },
    { name: "React", icon: <FaReact className="text-cyan-400 w-12 h-12" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400 w-12 h-12" /> },
    { name: "Figma", icon: <SiFigma className="w-12 h-12" style={{ color: "#211E2E" }} /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800 w-12 h-12" /> },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0px',
   arrows:false,
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 4,
          centerPadding: '0px',
        }
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 3,
          centerPadding: '0px',
        }
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 2,
          centerPadding: '0px',
        }
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
        }
      }
    ],
    customPaging: (i) => (
      <div className="w-2.5 h-2.5 mt-14 rounded-full bg-[#9C94D0] opacity-40 hover:opacity-100 transition-opacity"></div>
    ),
    dotsClass: "slick-dots !bottom-[-50px]",
  };

  return (
    <section id="technical-skills" className="py-20">
      <div className="container mx-auto min-h-[500px] flex flex-col justify-center items-start py-16">
        <div className="flex flex-col items-start mb-16 select-none">

          <div className="flex items-center mb-4">
              <h2 className="text-2xl md:text-5xl font-bold flex items-center gap-2">
                        <Sparkles size={28} className="text-[#9C94D0]" />
                        <span className="text-[#7878AB]">TECHNICAL SKILLS</span>{" "}
                      </h2>
              <div className="w-24 h-[2px] bg-[#7878AB] ml-4"></div>
          </div>
          <p className="text-[16px] md:text-[18px] leading-relaxed text-[#4D4D4D] px-11 mb-2">
            I have already worked with these technologies!
          </p>
        </div>

        <div className="w-full pb-16 relative">
          {/* Arrow esquerda */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-0 top-[40%] transform -translate-y-1/2 bg-[#9C94D0]/20 hover:bg-[#9C94D0]/40 text-[#7878AB] rounded-full w-10 h-10 flex items-center justify-center transition-all shadow-md hover:scale-110 z-20">
            <ChevronLeft size={24} />
          </button>
          {/* Arrow direita */}
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-0 top-[40%] transform -translate-y-1/2 bg-[#9C94D0]/20 hover:bg-[#9C94D0]/40 text-[#7878AB] rounded-full w-10 h-10 flex items-center justify-center transition-all shadow-md hover:scale-110 z-20">
            <ChevronRight size={24} />
          </button>


          {/* Carrossel responsivo */}
          <div className="px-8 py-8 overflow-x-clip">
            <Slider ref={sliderRef} {...settings}>
              {skills.map((skill) => (
                <div key={skill.name} className="px-4">
                  <div className="relative w-[130px] h-[130px] mx-auto transform rotate-45 bg-[#E5E6EC] shadow-lg rounded-2xl flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-300 opacity-10 rounded-2xl"></div>

                    <div className="transform -rotate-45 flex flex-col items-center">
                      {skill.icon}
                      <span className="text-sm font-medium mt-2">{skill.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

      </div>
    </section>
  );
}

import React from "react";
import profile from "../assets/profile.jpg"; 
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center pt-24 md:pt-32">
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-center items-center gap-10 lg:gap-16"> 
        <div className="max-w-lg lg:max-w-xl text-center md:text-left flex flex-col justify-center">
          <p className="text-base md:text-2xl uppercase text-[#7878AB] font-medium">Hi there, I'm</p>
          <h1 className="text-3xl md:text-6xl font-medium text-[#B0A5E0] mt-2 leading-tight whitespace-nowrap text-[40px] md:text-[55px] lg:text-[70px]"
            style={{
              textShadow: `
              0.92px 0.92px 1.83px rgba(255, 255, 255, 0.8),
              -0.92px -0.92px 1.83px rgba(0, 0, 0, 0.15),
              0.98px 0.92px 1.83px rgba(0, 0, 0, 0.1)
              `,
            }}>
            BIANCA MAIARA
          </h1>
          <p className="text-[#4D4D4D] mt-4 font-light leading-relaxed text-[16px] md:text-[20px] lg:text-[22px]">
            A multidisciplinary designer based in Portugal. My passion lies in creating seamless user experiences and captivating designs that drive engagement.
          </p>
          
          <a 
            href="mailto:bianca12silva@outlook.com"
            className="mt-6 px-10 py-3 bg-[#EAEAEA] shadow-md rounded-full text-[#7878AB] font-medium hover:bg-[#dcdff1] transition-all duration-300 w-fit mx-auto md:mx-0 flex items-center gap-3 active:shadow-[inset_5px_5px_10px_rgba(170,170,204,0.88),_inset_-5px_-5px_10px_rgba(255,255,255,1)]"
            style={{
            boxShadow: `
             5px 5px 10px 0 rgba(170, 170, 204, 0.88),
             -5px -5px 10px 0 rgba(255, 255, 255, 1)
               `,
              }}>
            HIRE ME
            <ArrowUpRight size={18} className="text-[#7878AB]" />
          </a>
        </div>

          {/* img */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-96 h-96 md:w-[450px] md:h-[450px] lg:h-[500px] rounded-4xl shadow-lg overflow-hidden"
            style={{
              borderTopLeftRadius: "50px",
              borderTopRightRadius: "140px",
              borderBottomRightRadius: "50px",
              borderBottomLeftRadius: "140px",
              boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)", // drop shadow
              border: "2px solid #EAEAEA", // stroke
            }}>
              <img
                src={profile}
                alt="Bianca Maiara"
                className="w-full h-full object-cover"/>

            </div>
        </div>
      </div>
    </section>
  );
}

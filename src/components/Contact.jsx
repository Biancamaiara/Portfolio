import React from "react";
import { Linkedin, Github, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="container mx-auto min-h-[500px] flex flex-col justify-center items-start py-16">
      <motion.div
        className="w-full mb-2"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}>
        <div className="flex items-center mb-4">
          <h2 className="text-3xl md:text-5xl font-bold flex items-center gap-2">
            <Sparkles size={28} className="text-[#9C94D0]" />
            <span className="text-[#7878AB]">CONTACT ME</span>
          </h2>
          <div className="w-24 h-[2px] bg-[#7878AB] ml-4"></div>
        </div>
      </motion.div>
      
      <motion.div
        className="w-full max-w-2xl text-left"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}>
        <p className=" text-[16px] md:text-[18px] text-[#4D4D4D] mb-8 leading-relaxed">
          I'm a beginner developer passionate about transforming ideas into beautiful, functional interfaces.
          <br/>
         I'm looking for an internship opportunity where I can put my learnings into practice and continue to grow.
        Let's talk? *-*
        </p>
        <a
          href="mailto:bianca12silva@outlook.com"
          style={{
          boxShadow: `
          5px 5px 10px 0 rgba(170, 170, 204, 0.88),
          -5px -5px 10px 0 rgba(255, 255, 255, 1)
           `,
          }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#EAEAEA] rounded-full shadow-[4px_4px_8px_#d2d3d8,_-4px_-4px_8px_#ffffff] text-[#7878AB] font-medium hover:bg-[#dcdff1]">
          <Mail size={20} />
          Send a Message
        </a>
      </motion.div>
      <motion.div
        className="flex gap-6 mt-16 w-full justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}>
    
        <a
          href="https://www.linkedin.com/in/biancamaiara/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center rounded-full bg-[#EAEAEA] shadow-[4px_4px_8px_#d2d3d8,_-4px_-4px_8px_#ffffff] hover:bg-[#dcdff1] transition-all duration-300 active:shadow-[inset_5px_5px_10px_rgba(170,170,204,0.88),_inset_-5px_-5px_10px_rgba(255,255,255,1)]" >
          <Linkedin
            size={24}
            className="text-[#9C94D0] "/>
        </a>
        <a
          href="https://github.com/Biancamaiara"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center rounded-full bg-[#EAEAEA] shadow-[4px_4px_8px_#d2d3d8,_-4px_-4px_8px_#ffffff] hover:bg-[#dcdff1] transition-all duration-300 active:shadow-[inset_5px_5px_10px_rgba(170,170,204,0.88),_inset_-5px_-5px_10px_rgba(255,255,255,1)]"
        >
          <Github
            size={24}
            className="text-[#9C94D0]"
          />
        </a>
      </motion.div>
      <div className="w-[1200px] max-w-full h-[2px] bg-[#9C94D0] my-12 rounded-full self-center"></div>
      <p className="text-sm text-gray-500 self-center text-center">
        © {new Date().getFullYear()} Bianca Maiara. All rights reserved.
      </p>
    </section>
  );
}

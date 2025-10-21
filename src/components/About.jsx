import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-[#E4E6EB]">
      <div className="container mx-auto min-h-[500px] flex flex-col justify-center items-start py-16">
          <motion.div
            className="w-full mb-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}>
            <div className="flex items-center mb-4">
              <h2 className="text-3xl md:text-5xl font-bold flex items-center gap-2">
                  <Sparkles size={28} className="text-[#9C94D0]" />
                  <span className="text-[#7878AB]">ABOUT ME</span>{" "}
              </h2>
              <div className="w-24 h-[2px] bg-[#7878AB] ml-4"></div>
            </div>
          </motion.div>
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}>
            <p className="text-[#4D4D4D] text-[16px] md:text-[18px] leading-relaxed mb-4">
              I'm a Computer Engineering student interested in Web Design,
              Front-end, and UX/UI. I've worked as a designer at a startup,
              creating user-centric digital interfaces. I have experience with
              Figma, HTML, CSS, and React, and I'm passionate about exploring new
              design and development trends.
            </p>

            <p className="text-[#4D4D4D] text-[16px] md:text-[18px] leading-relaxed">
              When I'm not designing, I enjoy painting, reading, exercising, and
              playing games.
            </p>
          </motion.div>
      </div>
    </section>
  );
}

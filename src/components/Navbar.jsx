import React, {useState} from "react";
import {Menu, X } from "lucide-react";

export default function Navbar(){
    const [open, setOpen] = useState(false);
    const toggleMenu = () => setOpen (!open);

    return (
        <header className="fixed top-0 left-0 w-full bg-[#EBECF1]/80 backdrop-blur-md shadow-sm z-50">
            <div className="container mx-auto"> 
                <nav className="flex justify-between items-center py-4">
                    <a href="home"
                         className="font-[Abril_Fatface] text-[#7878AB] text-[60px] md:text-[80px] relative select-none leading-none"
                        style={{
                        fontFamily:"'Abril Fatface', serif",
                        textShadow: `
                        3.77px 3.77px 7.55px rgba(255, 255, 255, 0.8),
                        3.77px 3.77px 7.55px rgba(0, 0, 0, 0.1)
                            `,
                         }}
                            
                        >
                        BM
                        <span
                            className="absolute inset-0"
                            style={{
                             color: "#8A7BCF",
                            mixBlendMode: "multiply",
                            filter: `
                                drop-shadow(-3.77px -3.77px 7.55px rgba(0,0,0,0.15))
                                drop-shadow(3.77px 3.77px 7.55px rgba(255,255,255,0.65))
                                `,
                            }}
                            >
                            BM
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-70 animate-shine mix-blend-overlay"></span>
                    </a>
                    <ul className="hidden md:flex gap-10 text-[12px] md:text-[14px] lg:text-[18px] text-sm font-medium text-[#7878AB]">
                        {["HOME", "ABOUT", "PROJECTS", "CONTACT"].map((item) => (
                        <li key={item} className="relative group">
                            <a
                                href={`#${item.toLowerCase()}`}
                                    className="relative transition-all duration-300 
                                    hover:text-[#49418D]
                                    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] 
                                    after:bg-[#8A7BCF] hover:after:w-full after:transition-all after:duration-300
                                    active:bg-white/60 active:shadow-inner active:translate-y-[2px]"
                                    >
                                 {item}
                            </a>
                        </li>
                        ))}
                    </ul>
                    <button className="md:hidden text-gray-700" onClick={toggleMenu}>
                        {open ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </nav>
            </div>
            
            {/* Menu Mobile */}
            {open && (
                <div className="md:hidden bg-[#EBECF1] border-t border-gray-300">
                    <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
                        <li><a href="#home" onClick={toggleMenu} className="hover:text-[#9C94D0]">Home</a></li>
                        <li><a href="#about" onClick={toggleMenu} className="hover:text-[#9C94D0]">About</a></li>
                        <li><a href="#projects" onClick={toggleMenu} className="hover:text-[#9C94D0]">Projects</a></li>
                        <li><a href="#contact" onClick={toggleMenu} className="hover:text-[#9C94D0]">Contact</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
}
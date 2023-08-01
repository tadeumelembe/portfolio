'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { responsivePadding } from "@/utils/constants";
import localFont from "next/font/local";
import { SocialIcon } from "react-social-icons";

const tektur = localFont({ src: '../../public/fonts/Tektur-VariableFont_wdth,wght.ttf' })

const navLinkHover = 'hover:text-green-water'

export default function Header() {
    return (
        <header className={`sticky top-0 z-10 py-2  px-10 xl:px-20 `}>
            <div className={`flex justify-between mx-auto items-center mt-0  `}>
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{once:true}}
                    transition={{
                        duration: 0.6
                    }}
                    className=" mx-auto md:mx-0"
                >
                  
                    <a href="#home">
                    <Image src="/signature.png" alt="logo" width={150} height={45} />
                    </a>
                </motion.div>

                <motion.nav
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6
                    }}
                    className="md:flex flex-row gap-7 items-center hidden">
                    <ul className={`flex flex-row gap-7 text-lg font-medium tracking-wide ${tektur.className}`}>
                        <li className={`${navLinkHover}`}><a href="#about">About</a></li>
                        <li className={`${navLinkHover}`}><a href="#experience">Experience</a></li>
                        <li className={`${navLinkHover}`}><a href="#projects">Projects</a></li>
                    </ul>
                    <button 
                            onClick={() => window.location.href = '#contact'}
                    
                    className=" bg-green-water py-3 px-5 rounded text-black font-bold">{`Let's talk`}</button>

                </motion.nav>
            </div>
        </header>
    )
}
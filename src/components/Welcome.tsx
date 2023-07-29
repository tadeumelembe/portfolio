'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { SocialIcon } from 'react-social-icons';

const tektur = localFont({ src: '../../public/fonts/Tektur-VariableFont_wdth,wght.ttf' })

export default function Welcome() {
    return (
        <div id="Home" className="md:flex flex-row justify-between items-center mt-16 sm:mt-30 ">
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 0.7,
                    delay: 0.5
                }}
                className=" md:max-w-1/2"
            >

                <div className="">
                    <h1 className={`text-5xl sm:text-6xl  font-bold uppercase sm:text-left text-center text-gray-300 ${tektur.className}`}>
                        {`Hi, I'm`}
                        <br />
                        <span className="text-green-water">Tadeu Melembe</span>
                    </h1>
                    <p className="text-lg mt-7 hidden sm:inline-block">
                        {`I'm a`} <span className=" text-green-water">Software Engineer</span> focused on building mobile and web solutions that solve real life problems.
                    </p>
                   
                </div>
                <div className="mt-4 ml-[-12px] hidden md:inline-block">
                    <SocialIcon bgColor="#708DB600" fgColor="#708DB6" target="_blank" url="https://github.com/tadeumelembe" />
                    <SocialIcon bgColor="#708DB600" fgColor="#708DB6" target="_blank" url="https://www.linkedin.com/in/tadeumelembe" />
                    <SocialIcon bgColor="#708DB600" fgColor="#708DB6" target="_blank" url="https://www.instagram.com/code._daily/" />
                    </div>
            </motion.div>

            <motion.div
                initial={{ x: -100, opacity: 0, scale: 0.2 }}
                animate={{ x: 0, opacity: 1, scale: 1, rotate: [0, 360] }}
                transition={{
                    duration: 0.7,
                    delay: 0.5,
                }}
                className=" mt-10 md:mt-0"
            >
                <Image src={'/bg-image.png'} alt="Tadeu's 3d Cartoon" width={320} height={500} className="mx-auto w-[220px] sm:w-[280px] md:w-[320]" />
            </motion.div>
        </div>
    )
}
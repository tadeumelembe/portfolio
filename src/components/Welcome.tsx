'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { SocialIcon } from 'react-social-icons';
import { maxWidthContent, userData } from "@/utils/constants";

import { BsArrowRight } from 'react-icons/bs'
import CustomButton from "./Button";

const tektur = localFont({ src: '../../public/fonts/Tektur-VariableFont_wdth,wght.ttf' })

export default function Welcome() {
    return (
        <div id="home" className={`flex flex-col justify-center space-y-8 h-screen snap-y snap-center snap-mandatory snap-proximity`}>
            <div id="home" className={`md:flex flex-row justify-between items-center`}>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.5
                    }}
                    className=" md:max-w-1/2"
                >

                    <h1 className={`text-5xl sm:text-6xl md:text-7xl  font-bold uppercase sm:text-left text-center text-gray-300 ${tektur.className}`}>
                        {`Hi, I'm`}
                        <br />
                        <span className="text-green-water">{userData.first_name + ' ' + userData.last_name}</span>
                    </h1>
                    <p className="text-lg mt-12 hidden sm:inline-block">
                        {`I'm a`} <span className=" text-green-water">Software Engineer</span> focused on transforming ideas into reality.
                    </p>

                    <p className="text-lg mt-8 hidden sm:inline-block">
                        {`I'm very passionate about solving real life problems using technology`} <span className=" text-green-water"></span>
                    </p>


                        <div className="mt-12">
                    <CustomButton value="See more" icon={BsArrowRight} />
                    </div>
                    <div className="mt-10 ml-[-12px] hidden md:flex">
                        <SocialIcon bgColor="#708DB600" fgColor="#708DB6" target="_blank" url="https://github.com/tadeumelembe" />
                        <SocialIcon bgColor="#708DB600" fgColor="#708DB6" target="_blank" url="https://www.linkedin.com/in/tadeumelembe" />
                        <SocialIcon bgColor="#708DB600" fgColor="#708DB6" target="_blank" url="https://www.instagram.com/code._daily/" />
                        <SocialIcon bgColor="#708DB600" fgColor="#708DB6" target="_blank" url="https://www.twitter.com/tadeumelembe/" />
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
        </div>
    )
}
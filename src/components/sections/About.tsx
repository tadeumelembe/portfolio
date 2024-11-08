'use client'
import localFont from "next/font/local";
import { FaCircleDot } from 'react-icons/fa6'
import { motion } from "framer-motion";

import Title from "@/components/TitleComponent";
import { maxWidthContent, userData } from "@/utils/constants";

const tektur = localFont({ src: '../../../public/fonts/Tektur-VariableFont_wdth,wght.ttf' })

const currentYear = new Date().getFullYear()
const yearsOfExperience = currentYear - 2021

export default function About() {
    return (
        <div id="about" className={`text-lg flex flex-col justify-evenly px-10 md:px-20 [1330px]:px-0 max-w-[1366px] mx-auto `}>
            <Title title="About me" />

            <div className="lg:flex flex-row justify-between gap-10 mt-4 items-start">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        delay: 0.5
                    }} className="lg:w-1/2 md:pr-15">
                    <p className="mt-10 font-semibold text-green-water">
                        {`<>`}
                        <br />
                        {`Sometimes I feel like a "Super Heroe", and my skills are my "Super Power". I can use them to create solutions that can impact society and change people's life, making it better and easier.`}
                        <br />
                        {`</>`}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        delay: 0.5
                    }} className="lg:w-1/2">
                    <p className="mt-10">
                        {`I'm`} a <span className="text-green-water">Full Stack engineer</span> with {yearsOfExperience} years of experience. {`I'm `}more focused on <span className="text-green-water">Mobile Development</span> using React Native, but always open to work in any stack.
                    </p>
                    <p className="pt-4">
                        My love for coding started during my school days, when I learnt about algorithms.
                    </p>
                    <p className="pt-4">
                        After finishing my education, I jumped into the world of Full-Stack Development in 2020, eager to turn my passion into a career.
                    </p>

                    <ul className={`grid grid-cols-2 gap-4 mt-4 font-semibold pl-3 ${tektur.className}`}>
                        {userData.skills.map((element, index) => {
                            return (
                                <motion.li
                                    initial={{ y: 100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        ease:'easeOut',
                                        duration: 0.7 + index*0.5,
                                    }} key={`skills-item-${index}`} className=" flex flex-row items-center gap-2">
                                    <FaCircleDot size={10} color="#A0F2EA" />
                                    <p className="">{element}</p>
                                </motion.li>
                            )
                        })}
                    </ul>

                    <p className="pt-4">
                        Apart from these Skills, {`I'm`} always open to learn and explore new stuff, as technology continually evolves, pushing boundaries, and embracing innovation.
                    </p>
                </motion.div>

            </div>
        </div>
    )
}
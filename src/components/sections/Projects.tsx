'use client'
import localFont from "next/font/local";
import { motion } from "framer-motion";

import { maxWidthContent, userData } from "@/utils/constants";
import Title from "@/components/TitleComponent";
import BorderSeparetor from "@/components/BorderSeparator";

const tektur = localFont({ src: '../../../public/fonts/Tektur-VariableFont_wdth,wght.ttf' })

const currentYear = new Date().getFullYear()
const yearsOfExperience = currentYear - 2021

export default function Projects() {
    return (
        <div id="projects" className=" flex flex-col justify-center px-10 md:px-20 [1330px]:px-0 max-w-[1366px] mx-auto">
            <div className="">
                <Title title="Projects" />

            </div>

            <div className="mt-20">

                {userData.projects.map((element, index) => {
                    let reverseFlex = 'sm:flex flex-row'
                    if (index % 2 !== 0) {
                        reverseFlex = 'sm:flex flex-row-reverse'

                    }

                    return (
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: 0.5
                            }} key={index} className={``}>
                            <div key={index} className={`${reverseFlex} justify-between gap-10 mt-16 items-start`}>

                                <div className="sm:w-1/2">
                                    <h6 className="font-semibold text-xl">{element.name}</h6>
                                    <p className="font-semibold text-gray-300 mt-5">
                                        Lorem ipsum dolor sit amet consectetur. Euismod nunc neque metus diam id at. Hac turpis proin eget.
                                    </p>
                                    <button className=" bg-transparent py-3 px-5 mt-5 rounded text-green-water border-2 border-green-water font-bold">{`View project`}</button>

                                </div>

                                <div className="sm:w-1/2 mt-8 sm:mt-0">
                                    <div className=" border-2 border-fuchsia-300 w-full h-72"></div>
                                </div>

                            </div>
                            {(index < userData.experiemce.length - 1) &&
                                <BorderSeparetor />
                            }
                        </motion.div>
                    )

                })}
            </div>
        </div>
    )
}
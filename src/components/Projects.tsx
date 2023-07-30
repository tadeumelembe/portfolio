'use client'
import { maxWidthContent, userData } from "@/utils/constants";
import localFont from "next/font/local";
import Title from "./TitleComponent";
import BorderSeparetor from "./BorderSeparator";

const tektur = localFont({ src: '../../public/fonts/Tektur-VariableFont_wdth,wght.ttf' })

const currentYear = new Date().getFullYear()
const yearsOfExperience = currentYear - 2021

export default function Projects() {
    return (
        <div id="projects" className="max-w-[1366px] mx-auto">
            <div className="px-10 md:px-20">
                <Title title="Projects" />

            </div>

            <div className="mt-20">

                {userData.projects.map((element, index) => {
                    let paddingSide = 'sm:pl-10 md:pl-20 lg:pr-20'
                    let reverseFlex = 'sm:flex flex-row'
                    if (index % 2 !== 0) {
                        paddingSide = 'pr-10 md:pr-20 lg:pl-20'
                        reverseFlex = 'sm:flex flex-row-reverse'

                    }

                    return (
                        <div key={index} className={`${paddingSide} px-10 sm:px-0`}>
                            <div key={index} className={`${reverseFlex} justify-between gap-10 mt-16 items-start`}>

                                <div className="sm:w-1/2">
                                    <h6 className="font-semibold text-xl">{element.name}</h6>
                                    <p className="font-semibold text-gray-300 mt-5">
                                        Lorem ipsum dolor sit amet consectetur. Euismod nunc neque metus diam id at. Hac turpis proin eget.
                                    </p>
                                    <button className=" bg-transparent py-3 px-5 mt-5 rounded text-green-water border-2 border-green-water font-bold">{`View project`}</button>

                                </div>

                                <div className="sm:w-1/2 mt-8 sm:mt-0">
                                    <div className=" border-2 border-fuchsia-300 w-full h-auto"></div>
                                </div>

                            </div>
                            {(index < userData.experiemce.length - 1) &&
                                <BorderSeparetor />
                            }
                        </div>
                    )

                })}
            </div>
        </div>
    )
}
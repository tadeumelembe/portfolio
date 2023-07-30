'use client'
import { maxWidthContent, userData } from "@/utils/constants";
import localFont from "next/font/local";
import Title from "./TitleComponent";
import BorderSeparetor from "./BorderSeparator";

const tektur = localFont({ src: '../../public/fonts/Tektur-VariableFont_wdth,wght.ttf' })

const currentYear = new Date().getFullYear()
const yearsOfExperience = currentYear - 2021

export default function Experience() {
    return (
        <div id="experience" className={`${maxWidthContent}`}>

            <Title title="Experience" />

            {userData.experiemce.map((element, index) => {
                return (
                    <>
                        <div key={index} className="sm:flex flex-row justify-between gap-5 mt-10 items-center">

                            <div className="md:flex flex-row gap-24 items-center justify-between">
                                <div>
                                    <p className="font-medium text-gray-400 mb-1">
                                        {element.start_date + ' ' + element.end_date}
                                    </p>
                                    <h6 className="text-green-water font-semibold">{element.company}</h6>
                                </div>
                                <div>
                                    <h6 className="md:mt-0 mt-2 font-semibold">{element.position}</h6>
                                </div>
                            </div>

                            <div className="sm:w-1/2">
                                <p className="font-semibold text-gray-300 mt-10 sm:mt-0">
                                    Lorem ipsum dolor sit amet consectetur. Euismod nunc neque metus diam id at. Hac turpis proin eget.
                                </p>
                            </div>

                        </div>
                        {(index < userData.experiemce.length - 1) &&
                            <BorderSeparetor />
                        }
                    </>
                )

            })}
        </div>
    )
}
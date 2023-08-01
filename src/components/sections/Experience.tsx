'use client'
import localFont from "next/font/local";

import { maxWidthContent, userData } from "@/utils/constants";
import Title from "@/components/TitleComponent";
import BorderSeparetor from "@/components/BorderSeparator";

const tektur = localFont({ src: '../../../public/fonts/Tektur-VariableFont_wdth,wght.ttf' })

const currentYear = new Date().getFullYear()
const yearsOfExperience = currentYear - 2021

export default function Experience() {
    return (
        <div id="experience" className={`${maxWidthContent} space-y-8 flex flex-col justify-center px-10 md:px-20 [1330px]:px-0 max-w-[1366px] mx-auto`}>

            <Title title="Experience" />

            {userData.experiemce.map((element, index) => {
                return (
                    <>
                        <div key={index} className="sm:flex flex-row justify-between gap-10 mt-10 items-center">

                            <div className="sm:w-1/2 md:flex flex-row gap-5 items-center justify-start">
                                <div className="w-full md:w-1/3">
                                    <p className="font-medium text-gray-400 mb-1">
                                        {element.start_date + ' - ' + element.end_date}
                                    </p>
                                    <h6 className="text-green-water font-semibold">{element.company}</h6>
                                </div>
                                <div>
                                    <h6 className="md:mt-0 mt-2 font-semibold">{element.position}</h6>
                                </div>
                            </div>

                            <div className="sm:w-1/2">
                                <p className="font-semibold text-gray-300 mt-10 sm:mt-0">
                                   {element.job_descriotion}
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
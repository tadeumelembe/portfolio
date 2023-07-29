'use client'
import { userData } from "@/utils/constants";
import localFont from "next/font/local";
import Title from "./TitleComponent";
import BorderSeparetor from "./BorderSeparator";

const tektur = localFont({ src: '../../public/fonts/Tektur-VariableFont_wdth,wght.ttf' })

const currentYear = new Date().getFullYear()
const yearsOfExperience = currentYear - 2021

export default function Projects() {
    return (
        <div>

            <Title title="Projects" />

            {userData.projects.map((element, index) => {
                return (
                    <>
                        <div key={index} className="flex flex-row justify-between gap-5 mt-16 items-center">

                            <div className="">
                                    <h6 className="font-semibold text-xl">{element.name}</h6>
                                    <p className="font-semibold text-gray-300 mt-5">
                                    Lorem ipsum dolor sit amet consectetur. Euismod nunc neque metus diam id at. Hac turpis proin eget.
                                </p>
                            </div>

                            <div className="w-1/2">
                                <p className="font-semibold text-gray-300">
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
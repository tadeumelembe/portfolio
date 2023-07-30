'use client'
import localFont from "next/font/local";
import Title from "./TitleComponent";
import { maxWidthContent } from "@/utils/constants";

const tektur = localFont({ src: '../../public/fonts/Tektur-VariableFont_wdth,wght.ttf' })

const currentYear = new Date().getFullYear()
const yearsOfExperience = currentYear - 2021

export default function About() {
    return (
        <div id="about" className={`text-lg ${maxWidthContent}`}>
          <Title title="About" />
            <div className="lg:flex flex-row justify-between gap-10 mt-4 items-start">
                <div className="lg:w-1/2 md:pr-20">
                    <p className="mt-10 font-semibold text-green-water">
                        {`<>`}
                        <br />
                        {`Sometimes I feel like a "Super Heroe", and my skills are my "Super Power". I can use them to create solutions that can impact society and change people's life, making it better and easier.`}
                        <br />
                        {`</>`}
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <p className="mt-10">
                      {`I'm`} a <span className="text-green-water">software engineer</span> with {yearsOfExperience} years of experience, focused on <span className="text-green-water">Mobile Development</span> using React Native, and Full-Stack development using Reactjs, and Nodejs.
                        </p>
                </div>

            </div>
        </div>
    )
}
'use client'
import localFont from "next/font/local";

const tektur = localFont({ src: '../../public/fonts/Tektur-VariableFont_wdth,wght.ttf' })

const currentYear = new Date().getFullYear()
const yearsOfExperience = currentYear - 2021

export default function Experience() {
    return (
        <div>
            <div className="flex flex-row justify-between gap-24 mt-40 items-center">
                <div className="w-1/2 pr-10">
                    <h2 className={`${tektur.className} font-bold text-3xl`}>Experience</h2>
                </div>
                <div className="w-1/2">
                    <div className=" border-t-4 border-green-water w-full" />
                </div>

            </div>
            <div className="flex flex-row justify-between gap-5 mt-4 items-start">
                <div className="w-1/2 pr-10">
                    <p className="mt-10 font-semibold text-green-water">
                        {`<>`}
                        <br />
                        {`Sometimes I feel like a "Super Heroe", and my skills are my "Super Power". I can use them to create solutions that can impact society and change people's life, making it better and easier.`}
                        <br />
                        {`</>`}
                    </p>
                </div>
                <div className="w-1/2">
                    <p className="mt-10">
                      {`I'm`} a <span className="text-green-water">software engineer</span> with {yearsOfExperience} years of experience, focused on <span className="text-green-water">Mobile Development</span> using React Native, and Full-Stack development using Reactjs, and Nodejs.
                        </p>
                </div>

            </div>
        </div>
    )
}
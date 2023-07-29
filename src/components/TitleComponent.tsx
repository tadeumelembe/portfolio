'use client'
import localFont from "next/font/local";

const tektur = localFont({ src: '../../public/fonts/Tektur-VariableFont_wdth,wght.ttf' })

type TitleT = {
    title: string
}
export default function Title(props: TitleT) {
    return (
        <div className="sm:flex flex-row justify-between gap-10 mt-40 items-center">
            <div className="sm:w-1/2">
                <h2 className={`${tektur.className} font-bold text-3xl`}>{props.title}</h2>
            </div>
            <div className="sm:w-1/2 mt-5 sm:mt-0">
                <div className=" border-t-4 border-green-water w-full" />
            </div>

        </div>

    )
}
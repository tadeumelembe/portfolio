'use client'
import localFont from "next/font/local";
import { motion } from "framer-motion";

const tektur = localFont({ src: '../../public/fonts/Tektur-VariableFont_wdth,wght.ttf' })

type TitleT = {
    title: string
}
export default function Title(props: TitleT) {
    return (
        <div className="sm:flex flex-row justify-between gap-10 items-center">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.7,
                    delay: 0.5
                }}
                className="sm:w-1/2">
                <h2 className={`${tektur.className} font-bold text-3xl`}>{props.title}</h2>
            </motion.div>

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.7,
                    delay: 0.5
                }} className="sm:w-1/2 mt-5 sm:mt-0">
                <div className=" border-t-4 border-green-water w-full" />
            </motion.div>

        </div>

    )
}
'use client'
import { motion } from "framer-motion";
import React, { ElementType } from "react";

type ButtonT = {
    value?: string;
    icon?: ElementType
}
function Secondary({ value, icon: Icon }: ButtonT) {
    return (
        <button
            onClick={() => window.location.href = '#about'}
            className="bg-transparent py-3 px-6 mt-5 rounded text-green-water border-2 border-green-water font-bold flex flex-row gap-3 items-center"
        >
            <ButtonContent value={value} icon={Icon} />

        </button>
    )
}

function Primary({ value, icon: Icon }: ButtonT) {
    return (
        <button
            onClick={() => window.location.href = '#about'}
            className="bg-green-water py-3 px-6 mt-5 rounded text-black border-2 font-bold flex flex-row gap-3 items-center"
        >
            <ButtonContent value={value} icon={Icon} />
        </button>
    )
}

interface IRoundedButton {
    icon: ElementType,
    onClick: () => void,
    size?:number
}
function Rounded({ icon: Icon, size, onClick }:IRoundedButton) {
    let newSize = 22
    if(size) newSize = size
    return (
        <button
        onClick={onClick}
            className="rounded-full bg-green-water py-3 px-3 text-black border-2 border-transparent"
        >
            <Icon size={newSize} />
        </button>
    )
}

function ButtonContent({ value, icon: Icon }: ButtonT) {
    return (
        <>
            {value && value}

            {Icon &&
                <motion.div
                    className="box"
                    animate={{
                        x: [0, 10, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                    }}
                    transition={{
                        duration: 1,
                        ease: 'linear',
                        repeat: Infinity,
                        repeatDelay: 0.1
                    }}
                >
                    <Icon size={22} />
                </motion.div>
            }
        </>
    )
}

export const Button = {
    Primary,
    Secondary,
    Rounded
}
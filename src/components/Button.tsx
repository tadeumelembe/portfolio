import { motion } from "framer-motion";
import React, { ElementType } from "react";

type ButtonT = {
    value: string;
    icon: ElementType
}
export default function CustomButton({ value, icon: Icon }: ButtonT) {
    return (
        <button
            onClick={() => window.location.href = '#about'}
            className="bg-transparent py-3 px-6 mt-5 rounded text-green-water border-2 border-green-water font-bold flex flex-row gap-3 items-center"
        >
            {value}
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
        </button>
    )
}
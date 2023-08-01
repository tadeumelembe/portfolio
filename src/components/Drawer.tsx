import { useEffect, useState, SetStateAction } from "react";
import { motion, useAnimationControls } from "framer-motion";
import localFont from "next/font/local";

const tektur = localFont({ src: '../../public/fonts/Tektur-VariableFont_wdth,wght.ttf' })

const navLinkHover = 'hover:text-green-water'

interface IDrawer {
    isDrawerOpen: boolean,
    setIsDrawerOpen: React.Dispatch<SetStateAction<boolean>>,
    closeDrawer: () => void

}
function Drawer(props: IDrawer) {

    const { isDrawerOpen, setIsDrawerOpen, closeDrawer } = props

    const blurControls = useAnimationControls()
    const navControls = useAnimationControls()


    useEffect(() => {
        if (isDrawerOpen) {
            navControls.start({
                x: 0,
                transition: { duration: 0.5, ease: 'easeOut' },
            })
            blurControls.start({
                opacity: 1,
                transition: { duration: 0.8, ease: 'easeOut' },
            })
        } else {
            navControls.start({
                x: '100%',
                transition: { duration: 0.5, ease: 'easeIn' },

            })
            blurControls.start({
                opacity: 0,
                transition: { duration: 0.2, ease: 'easeIn' },
            })
        }
    }, [isDrawerOpen])

    function handleNavClick(sectionId: string) {
        window.location.href = `#${sectionId}`
        closeDrawer()
    }

    return (
        <div id="drawer-nav" className="w-full fixed right-0 top-0 bottom-0 z-30 hidden ">
            <motion.div
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                animate={blurControls}
                className={`w-1/4 h-screen backdrop-blur-sm z-30`}
            >
            </motion.div>
            <motion.div
                id="drawer-nav"
                animate={navControls}
                className={`w-3/4 h-screen bg-blue-background z-30`}
            >
                <ul className={`flex flex-col items-center justify-center h-screen gap-7 text-lg font-medium tracking-wide ${tektur.className}`}>
                    <li className={`${navLinkHover}`}><a onClick={() => handleNavClick('home')} >Home</a></li>
                    <li className={`${navLinkHover}`}><a onClick={() => handleNavClick('about')}>About</a></li>
                    <li className={`${navLinkHover}`}><a onClick={() => handleNavClick('experience')}>Experience</a></li>
                    <li className={`${navLinkHover}`}><a onClick={() => handleNavClick('projects')}>Projects</a></li>
                </ul>
            </motion.div>
        </div>
    )
}

function useDrawer() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        if (isDrawerOpen) return openDrawer()
        if (!isDrawerOpen) return closeDrawer()

    }, [isDrawerOpen])

    function openDrawer() {
        setIsDrawerOpen(true)
        document.body.classList.add("overflow-hidden");
        document.getElementById('drawer-nav')?.classList.remove("hidden");
        document.getElementById('drawer-nav')?.classList.add("sm:hidden");
        document.getElementById('drawer-nav')?.classList.add("flex");
        document.getElementById('drawer-nav')?.classList.add("flex-row");


        console.log('kkkkk')
    }

    function closeDrawer() {
        setIsDrawerOpen(false)
        document.body.classList.remove("overflow-hidden");
    }

    return {
        isDrawerOpen,
        openDrawer,
        closeDrawer,
        setIsDrawerOpen
    }

}

export {
    Drawer,
    useDrawer
}

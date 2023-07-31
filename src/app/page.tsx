'use client'
import { useEffect, useRef, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'

import About from '@/components/sections/About'
import Header from '@/components/Header'
import Welcome from '@/components/sections/Welcome'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import { Button } from '@/components/Button'
import { Drawer, useDrawer } from '@/components/Drawer'
import Footer from '@/components/sections/Footer'

export default function Home() {
  const [showDrawer, setShowDrawer] = useState(false)

  const { isDrawerOpen, setIsDrawerOpen, openDrawer, closeDrawer } = useDrawer()

  return (
    <main className="min-h-screen mb-5 text-white-light">

      <Drawer
        isDrawerOpen={isDrawerOpen}
        closeDrawer={closeDrawer}
        setIsDrawerOpen={setIsDrawerOpen}

      />

      <Header />

      <div className="px-10 md:px-20 [1330px]:px-0 max-w-[1366px] mx-auto">

        <Welcome />

        <About />

        <Experience />


        <Projects />
      <Footer />
      </div>

      <div className='md:hidden sticky bottom-8 right-8 z-30 float-right'>
        <Button.Rounded size={30} icon={!isDrawerOpen ? GiHamburgerMenu : IoMdClose} onClick={() => setIsDrawerOpen(!isDrawerOpen)} />
      </div>

    </main>
  )
}

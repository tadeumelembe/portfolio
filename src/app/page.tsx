'use client'
import { useEffect, useRef, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'

import About from '@/components/About'
import Header from '@/components/Header'
import Welcome from '@/components/Welcome'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import { Button } from '@/components/Button'
import { Drawer, useDrawer } from '@/components/Drawer'

export default function Home() {
  const [showDrawer, setShowDrawer] = useState(false)

  const { isDrawerOpen, closeDrawer, setIsDrawerOpen, openDrawer } = useDrawer()

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

      </div>

      <Projects />

      <div className='md:hidden sticky bottom-8 right-8 z-30 float-right'>
        <Button.Rounded size={30} icon={!isDrawerOpen ? GiHamburgerMenu : IoMdClose} onClick={() => setIsDrawerOpen(!isDrawerOpen)} />
      </div>

    </main>
  )
}

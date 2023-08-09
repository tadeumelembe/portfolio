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
import ContactForm from '@/components/sections/ContactForm'

export default function Home() {
  const [showDrawer, setShowDrawer] = useState(false)

  const { isDrawerOpen, setIsDrawerOpen, openDrawer, closeDrawer } = useDrawer()

  return (
    <main className="h-screen mb-5 text-white-light">

      <Drawer
        isDrawerOpen={isDrawerOpen}
        closeDrawer={closeDrawer}
        setIsDrawerOpen={setIsDrawerOpen}

      />

      <Header />


      <section id="home" className='snap-center'>
        <Welcome />
      </section>

      <section className='snap-center bg-blue-light-backgorund py-28'>
        <About />
      </section>

      <section className='snap-center py-28'>

        <Experience />

      </section>

      <section className='snap-center bg-blue-light-backgorund py-28'>

        <Projects />
      </section>

      <section id='contact' className='snap-center py-28'>
        <ContactForm />
      </section>

      <section className='snap-center py-8 bg-blue-light-backgorund'>
        <Footer />
      </section>

      <div className='md:hidden sticky bottom-8 right-8 z-30 float-right'>
        <Button.Rounded size={30} icon={!isDrawerOpen ? GiHamburgerMenu : IoMdClose} onClick={() => setIsDrawerOpen(!isDrawerOpen)} />
      </div>

    </main>
  )
}

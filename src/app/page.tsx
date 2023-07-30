import Head from 'next/head'
import Image from 'next/image'

import About from '@/components/About'
import Header from '@/components/Header'
import Welcome from '@/components/Welcome'
import { maxWidthContent, responsivePadding } from '@/utils/constants'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'

export default function Home() {

  return (
    <main className="min-h-screen mb-5 text-white-light">

      <Header />

      <div className="px-10 md:px-20 [1330px]:px-0 max-w-[1366px] mx-auto">

        <Welcome />

        <About />

        <Experience />

      </div>

      <Projects />

      <button
        className='bg-green-water sticky rounded-full w-14 h-14 md:hidden float-right bottom-10 right-10'
      >
        Veol
      </button>

    </main>
  )
}

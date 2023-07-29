import Head from 'next/head'
import Image from 'next/image'

import About from '@/components/About'
import Header from '@/components/Header'
import Welcome from '@/components/Welcome'
import { responsivePadding } from '@/utils/constants'

export default function Home() {

  return (
    <main className="min-h-screen">

      <Header />

      <div className={responsivePadding}>

        <Welcome />

        <About />

      </div>
      
      <button
      className='bg-green-water rounded-full w-14 h-14 md:hidden absolute bottom-10 right-10'
      >
        Veol
        </button>

    </main>
  )
}

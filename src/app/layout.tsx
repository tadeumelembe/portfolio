import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight:['100','200','300','400','500','600','700','800'],
  subsets:['latin','latin-ext']
})

export const metadata: Metadata = {
  title: "Tadeu's Portfolio",
  description: 'Tadeu Melembe, Software Developer | Software Egineer, passionate abut build solutions that impact society',
  keywords:'portfolio, javascript, developer, react-native, reactjs, software, engineering, programming, coding, mobile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${poppins.className} overflow-hidden`}>{children}</body>
    </html>
  )
}

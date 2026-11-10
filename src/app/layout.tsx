import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Inter } from 'next/font/google'

import { SITE_URL, fullName, userData } from '@/utils/constants'

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const title = `${fullName} — ${userData.role} (${userData.focus})`
const description =
  "Tadeu Melembe is a Software Engineer building iOS, Android and web apps with React Native, TypeScript and Node.js. See selected work and get in touch."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: ['Tadeu Melembe', 'software engineer', 'React Native developer', 'mobile developer', 'full-stack developer', 'TypeScript', 'portfolio'],
  authors: [{ name: fullName, url: SITE_URL }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: fullName,
    title,
    description,
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title, description },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAF7' },
    { media: '(prefers-color-scheme: dark)', color: '#0C1726' },
  ],
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: fullName,
  jobTitle: userData.role,
  url: SITE_URL,
  email: `mailto:${userData.email}`,
  sameAs: [userData.github, userData.linkedin],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  )
}

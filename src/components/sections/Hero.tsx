import Image from 'next/image'

import Container from '@/components/Container'
import ContactActions from '@/components/ContactActions'
import { fullName, userData, yearsOfExperience } from '@/utils/constants'
import avatar from '../../../public/avatar.png'

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="border-b border-line">
      <Container className="grid items-end gap-8 pb-12 pt-12 sm:pb-16 sm:pt-20 md:grid-cols-[1fr_auto] lg:pt-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-accent">
            {userData.role} · <span className="whitespace-nowrap">{userData.focus}</span>
          </p>
          <h1 id="hero-title" className="mt-3 font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {fullName}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted sm:text-xl">
            {userData.headline}
          </p>

          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted" aria-label="At a glance">
            <li>
              <strong className="font-semibold text-ink">{yearsOfExperience} years</strong> experience
            </li>
            <li>iOS, Android &amp; web</li>
            {userData.availability && <li className="font-semibold text-ink">{userData.availability}</li>}
          </ul>

          <div className="mt-8">
            <ContactActions />
          </div>

          <p className="mt-6 flex gap-5 text-sm">
            <a className="link" href={userData.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="link" href={userData.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="link" href="#work">
              See my work ↓
            </a>
          </p>
        </div>

        <Image
          src={avatar}
          alt="3D avatar of Tadeu waving"
          sizes="260px"
          className="hidden h-auto w-[220px] [mask-image:linear-gradient(to_bottom,black_75%,transparent)] md:block lg:w-[260px]"
        />
      </Container>
    </section>
  )
}

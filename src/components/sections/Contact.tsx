import Container from '@/components/Container'
import ContactActions from '@/components/ContactActions'
import { userData } from '@/utils/constants'

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line bg-surface">
      <Container className="py-16 sm:py-24">
        <h2 id="contact-title" className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
          Have a project or a role in mind?
        </h2>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Email is the fastest way to reach me. Tell me a little about what you&apos;re building.
        </p>
        <div className="mt-8">
          <ContactActions />
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6 text-sm">
          <li>
            <a className="link" href={`tel:${userData.phone.replace(/\s/g, '')}`}>
              {userData.phone}
            </a>
          </li>
          <li>
            <a className="link" href={userData.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="link" href={userData.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </Container>
    </section>
  )
}

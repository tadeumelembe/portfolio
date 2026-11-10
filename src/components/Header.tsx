import { fullName, mailto } from '@/utils/constants'
import Container from './Container'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-3">
        <a href="#main" className="font-display text-lg font-bold tracking-tight">
          {fullName}
        </a>
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={mailto} className="btn-primary min-h-10 px-4">
            Email me
          </a>
        </nav>
      </Container>
    </header>
  )
}

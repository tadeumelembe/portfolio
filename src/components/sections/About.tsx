import Container from '@/components/Container'
import SectionHeading from '@/components/SectionHeading'
import { userData, yearsOfExperience } from '@/utils/constants'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-16 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-16">
        <div className="max-w-2xl">
          <SectionHeading id="about-title" title="About me" />
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              I&apos;m a full-stack engineer with {yearsOfExperience} years of experience. I&apos;m most focused on mobile
              development with React Native, but always open to working in any stack.
            </p>
            <p className="text-muted">
              My love for coding started during my school days, when I learnt about algorithms. After finishing my
              education, I jumped into full-stack development in 2020, eager to turn my passion into a career.
            </p>
            <blockquote className="border-l-4 border-accent pl-4 text-muted">{userData.bio}</blockquote>
          </div>
        </div>

        <div className="lg:pt-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Core skills</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {userData.skills.map((skill) => (
              <li key={skill} className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium">
                {skill}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-muted">
            Always learning and exploring new tools as technology evolves.
          </p>
        </div>
      </Container>
    </section>
  )
}

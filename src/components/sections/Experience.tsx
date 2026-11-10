import Container from '@/components/Container'
import SectionHeading from '@/components/SectionHeading'
import { userData } from '@/utils/constants'

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-line py-16 sm:py-24">
      <Container>
        <SectionHeading id="experience-title" title="Experience" />
        <ol className="divide-y divide-line border-y border-line">
          {userData.experience.map((job) => (
            <li key={`${job.company}-${job.start_date}`} className="grid gap-2 py-6 sm:grid-cols-[11rem_1fr] sm:gap-8">
              <p className="text-sm tabular-nums text-muted sm:pt-1">
                {job.start_date} – {job.end_date}
              </p>
              <div className="max-w-2xl">
                <h3 className="text-lg font-semibold">
                  {job.position} <span className="font-normal text-muted">· {job.company}</span>
                </h3>
                <p className="mt-1.5 text-muted">{job.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

import Image from 'next/image'

import Container from '@/components/Container'
import SectionHeading from '@/components/SectionHeading'
import { ArrowUpRight } from '@/components/Icons'
import { Project, userData } from '@/utils/constants'

export default function Projects() {
  return (
    <section id="work" aria-labelledby="work-title" className="py-16 sm:py-24">
      <Container>
        <SectionHeading id="work-title" title="Selected work" intro="Apps and websites I've built, from first screen to store release." />

        <ul className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {userData.projects.map((project, index) => (
            <li key={project.name} className="flex">
              <ProjectCard project={project} priority={index === 0} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

function ProjectCard({ project, priority }: { project: Project; priority: boolean }) {
  return (
    <article className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-muted [&:has(a:focus-visible)]:ring-2 [&:has(a:focus-visible)]:ring-accent [&:has(a:focus-visible)]:ring-offset-2 [&:has(a:focus-visible)]:ring-offset-bg">
      <div className="relative aspect-video overflow-hidden border-b border-line bg-chip sm:aspect-[2/1]">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? ''}
            fill
            sizes="(min-width: 1152px) 552px, (min-width: 768px) 50vw, 100vw"
            priority={priority}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div aria-hidden="true" className="flex h-full items-center justify-center bg-accent/10 p-6">
            <span className="font-display text-3xl font-bold tracking-tight text-accent sm:text-4xl">{project.name}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-sm font-medium text-muted">{project.platform}</p>
        <h3 className="mt-1.5 font-display text-2xl font-bold tracking-tight">
          {/* Stretched link: the whole card is clickable, but it's a single link for screen readers. */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="after:absolute after:inset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            {project.name}
            <span className="sr-only"> — {project.linkLabel} (opens in a new tab)</span>
          </a>
        </h3>

        {project.summary && <p className="mt-2 text-muted">{project.summary}</p>}

        {project.highlights.length > 0 && (
          <ul className="mt-4 space-y-2 text-[0.95rem]">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-1 flex-col justify-end gap-5">
          {project.tools.length > 0 && (
            <ul className="flex flex-wrap gap-2" aria-label="Built with">
              {project.tools.map((tool) => (
                <li key={tool} className="rounded-full bg-chip px-3 py-1 text-xs font-medium">
                  {tool}
                </li>
              ))}
            </ul>
          )}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
            <span aria-hidden="true" className="inline-flex items-center gap-1.5 text-accent">
              {project.linkLabel}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
            {project.secondaryLink && (
              // Sits above the stretched card link so it stays independently clickable.
              <a
                href={project.secondaryLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link relative z-10 inline-flex items-center gap-1.5"
              >
                {project.secondaryLink.label}
                <ArrowUpRight className="h-4 w-4" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

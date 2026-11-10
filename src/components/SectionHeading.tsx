type Props = {
  id: string
  title: string
  intro?: string
}

export default function SectionHeading({ id, title, intro }: Props) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-12">
      <h2 id={id} className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-3 text-lg text-muted">{intro}</p>}
    </div>
  )
}

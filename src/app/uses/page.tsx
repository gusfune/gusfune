import { Metadata } from "next"
import { apps, dev, hardware, machines } from "@/content/uses"
import type { UsesItem } from "@/content/uses"

export const metadata: Metadata = {
  title: "Uses",
  alternates: {
    canonical: "/uses",
    types: { "text/markdown": "/uses.md" },
  },
}

const UsesEntry = ({ item }: { item: UsesItem }) =>
  item.url ? (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:opacity-75"
    >
      <strong>{item.name}</strong> – {item.text}
    </a>
  ) : (
    <>
      <strong>{item.name}</strong> – {item.text}
    </>
  )

const UsesSection = ({
  heading,
  items,
  children,
}: {
  heading: string
  items: UsesItem[]
  children?: React.ReactNode
}) => (
  <section>
    <h3 className="text-2xl font-bold tracking-tight mb-3">{heading}</h3>
    {children}
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.name}>
          <UsesEntry item={item} />
        </li>
      ))}
    </ul>
  </section>
)

export default function Page() {
  return (
    <div className="space-y-12 max-w-2xl">
      <section id="intro">
        <h2 className="text-4xl font-extrabold tracking-tight">
          Hi, I&apos;m Gus Fune
        </h2>
        <p>And these are the stuff I use...</p>
      </section>

      <UsesSection heading="Apps" items={apps} />
      <UsesSection heading="Dev Tools" items={dev} />

      <UsesSection heading="Machines" items={machines}>
        <p className="mb-3 font-light">
          Both machines run off{" "}
          <a
            href="https://github.com/gusfune/dotfiles"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-75"
          >
            the same dotfiles branch
          </a>
          . One clone, one setup script, two very different computers.
        </p>
      </UsesSection>

      <UsesSection heading="Hardware" items={hardware} />
    </div>
  )
}

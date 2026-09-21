import type { Talk } from "@/content/speaking"

const TalkBody = ({ talk }: { talk: Talk }) => (
  <>
    <strong>{talk.title}</strong> - {talk.description}
  </>
)

/**
 * One entry in a speaking list. Shared by /speaking and the homepage
 * highlights so the two lists cannot render differently.
 *
 * A talk with a single canonical page links the whole line. A talk that lives
 * on several platforms keeps the line plain and lists the platforms below it,
 * because there is no one destination to send the reader to.
 */
export const TalkEntry = ({ talk }: { talk: Talk }) => (
  <li>
    {talk.url ? (
      <a
        href={talk.url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:opacity-75"
      >
        <TalkBody talk={talk} />
      </a>
    ) : (
      <TalkBody talk={talk} />
    )}
    {talk.links ? (
      <ul className="list-disc list-inside ml-4">
        {talk.links.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-75"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    ) : null}
  </li>
)

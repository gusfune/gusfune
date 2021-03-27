import { useQuery } from "blitz"
import getLinks from "app/links/queries/getLinks"
import { Link } from "@prisma/client"

type LinkItemProps = {
  link: string
  title: string
}

const LinkItem = ({ link, title }: LinkItemProps) => (
  <a
    href={link}
    className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md group hover:bg-gray-50 hover:text-gray-900"
    aria-current="page"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="truncate">{title}</span>
  </a>
)

type Props = {
  initialData: { links: Link[] }
}

const LinkList = ({ initialData }: Props) => {
  const [{ links }] = useQuery(getLinks, { where: { featured: true } }, { initialData })
  return (
    <nav className="space-y-1" aria-label="Sidebar">
      {links.map((link, i) => (
        <LinkItem key={i} link={link.url} title={link.title} />
      ))}
    </nav>
  )
}

export default LinkList

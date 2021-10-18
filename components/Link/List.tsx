import dynamic from "next/dynamic"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { useGetLinksQuery, GetLinksQuery } from "lib/graphql"
import { client } from "lib/graphql-client"
const LinkItem = dynamic(() => import("./Item"))

interface Props {
  initialData?: GetLinksQuery | null
}

const LinkList = ({ initialData }: Props) => {
  const { data, isLoading } = useGetLinksQuery<GetLinksQuery>(
    client,
    {},
    {
      initialData: initialData ?? undefined,
    }
  )
  if (isLoading) {
    return <FontAwesomeIcon icon={faSpinner} width={42} spin />
  }
  return (
    <nav className="space-y-1" aria-label="Sidebar">
      {data &&
        data.links &&
        data.links.map((link, i) => (
          <LinkItem key={i} link={link.url} title={link.title as string} />
        ))}
    </nav>
  )
}

export default LinkList

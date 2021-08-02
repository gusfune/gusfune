import Image from "next/image"
import { LinkBaseFragment } from "lib/graphql"
import { ProjectLinkItem } from "./LinkItem"

interface Props {
  title: string
  description: string
  logo: any
  role: string
  year?: number | null
  links: LinkBaseFragment[]
}

const ProjectItem = ({
  title,
  description,
  logo,
  role,
  year,
  links,
}: Props) => (
  <div className="p-4 space-y-2 text-black transition-transform transform bg-white shadow hover:scale-105">
    <div className="relative w-full h-32 p-16 bg-center bg-no-repeat rounded">
      {logo && (
        <Image
          src={logo.url}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          className="p-8"
          alt={title}
        />
      )}
    </div>
    {title && <div className="text-lg font-semibold">{title}</div>}
    {description && <div className="text-sm font-light">{description}</div>}
    {role && (
      <div className="text-sm font-light">
        <strong>Role:</strong> {role}
        <br />
        <strong>Year:</strong> {year || "current"}
        <br />
      </div>
    )}
    {links && (
      <div className="flex flex-row items-center gap-3">
        {links.map((node) => (
          <ProjectLinkItem
            key={node.id}
            id={node.id}
            url={node.url}
            type={node.type}
          />
        ))}
      </div>
    )}
  </div>
)

export default ProjectItem
export { ProjectItem }

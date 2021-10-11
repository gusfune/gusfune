import Section from "components/Section"
import { GetProjectsQuery, useGetProjectsQuery } from "lib/graphql"
import { client } from "lib/graphql-client"
import { ProjectItem } from "./Item"
import { ProjectLoader } from "./Loader"

interface Props {
  initialData?: GetProjectsQuery
}

const ProjectList = ({ initialData }: Props) => {
  const { data, isLoading } = useGetProjectsQuery<GetProjectsQuery>(
    client,
    {},
    {
      initialData,
    }
  )
  if (isLoading) {
    return <ProjectLoader />
  }
  return (
    <Section title="These are some selected projects from the last years that I'm really proud of">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {data?.projects.map(
          ({ id, title, description, role, year, logo, links }) => (
            <ProjectItem
              key={id}
              id={id}
              title={title}
              description={description}
              role={role}
              year={year}
              logo={logo}
              links={links}
            />
          )
        )}
      </div>
    </Section>
  )
}

export default ProjectList
export { ProjectList }

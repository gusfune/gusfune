import ContentLoader from "react-content-loader"
import Section from "components/Section"

const ProjectLoaderItem = (props: unknown) => (
  <ContentLoader
    speed={2}
    width={260}
    height={386}
    viewBox="0 0 260 386"
    backgroundColor="#e7e7e7"
    foregroundColor="#d6d6d6"
    className="w-full p-2"
  >
    <path d="M 0.5 0.5 h 259 v 127 H 0.5 z M 0.5 144.5 h 259 v 27 H 0.5 z M 0.5 188.5 h 259 v 79 H 0.5 z M 0.5 284.5 h 63 v 39 H 0.5 z M 0.5 340.5 h 129 v 39 H 0.5 z" />
  </ContentLoader>
)

const ProjectLoader = () => (
  <Section title="These are some selected projects from the last years that I'm really proud of">
    <div className="grid grid-cols-2 lg:grid-cols-4">
      <ProjectLoaderItem />
      <ProjectLoaderItem />
      <ProjectLoaderItem />
      <ProjectLoaderItem />
    </div>
  </Section>
)

export default ProjectLoader
export { ProjectLoaderItem, ProjectLoader }

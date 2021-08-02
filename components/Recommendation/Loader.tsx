import ContentLoader from "react-content-loader"
import Section from "components/Section"
import { ReadMore } from "./ReadMore"

const RecommendationLoaderItem = (props: any) => (
  <ContentLoader
    speed={2}
    width={550}
    height={224}
    viewBox="0 0 550 224"
    backgroundColor="#e7e7e7"
    foregroundColor="#d6d6d6"
    className="w-full p-2"
    {...props}
  >
    <circle cx="61" cy="61" r="61" />
    <path d="M 146.5 0.5 h 121 v 27 h -121 z M 146.5 36.5 h 121 v 23 h -121 z M 146.5 68.5 h 403 v 155 h -403 z" />
  </ContentLoader>
)

const RecommendationLoader = () => (
  <Section title="This is what some people said about working with me">
    <RecommendationLoaderItem />
    <RecommendationLoaderItem />
    <RecommendationLoaderItem />
    <ReadMore />
  </Section>
)

export default RecommendationLoader
export { RecommendationLoaderItem, RecommendationLoader }

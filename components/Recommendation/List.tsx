import Section from "components/Section"
import {
  GetRecommendationsQuery,
  useGetRecommendationsQuery,
} from "lib/graphql"
import { client } from "lib/graphql-client"
import { RecommendationItem } from "./Item"
import { ReadMore } from "./ReadMore"

const RecommendationList = ({ initialData }: any) => {
  const { data } = useGetRecommendationsQuery<GetRecommendationsQuery>(
    client,
    {},
    {
      initialData: initialData.recommendations,
    }
  )
  return (
    <Section title="This is what some people said about working with me">
      {data?.recommendations.map((recommendation) => (
        <RecommendationItem
          id={recommendation.id}
          key={recommendation.id}
          photo={recommendation.photo}
          name={recommendation.name}
          title={recommendation.title as string}
          content={recommendation.content}
        />
      ))}
      <ReadMore />
    </Section>
  )
}

export default RecommendationList
export { RecommendationList }

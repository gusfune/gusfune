import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetRecommendationsInput
  extends Pick<Prisma.RecommendationFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  async ({ where, orderBy, skip = 0, take = 100 }: GetRecommendationsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const { items: recommendations, hasMore, nextPage, count } = await paginate({
      skip,
      take,
      count: () => db.recommendation.count({ where }),
      query: (paginateArgs) => db.recommendation.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      recommendations,
      nextPage,
      hasMore,
      count,
    }
  }
)

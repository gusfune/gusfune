const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql"

type ContributionDay = {
  contributionCount: number
  date: string
}

type ContributionWeek = {
  contributionDays: ContributionDay[]
}

export type ContributionCalendar = {
  totalContributions: number
  weeks: ContributionWeek[]
}

export const fetchContributions = async (
  username: string,
): Promise<ContributionCalendar | null> => {
  const token = process.env.GITHUB_TOKEN
  if (!token) return null

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `

  try {
    const res = await fetch(GITHUB_GRAPHQL_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables: { username } }),
      next: { revalidate: 86400, tags: ["github-contributions"] },
    })

    if (!res.ok) return null

    const json = await res.json()
    return json.data?.user?.contributionsCollection?.contributionCalendar ?? null
  } catch {
    return null
  }
}

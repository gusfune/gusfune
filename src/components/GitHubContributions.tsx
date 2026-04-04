import { fetchContributions, type ContributionCalendar } from "@/lib/github"

const buildLevelFn = (data: ContributionCalendar): ((count: number) => number) => {
  const nonZero = data.weeks
    .flatMap((w) => w.contributionDays)
    .map((d) => d.contributionCount)
    .filter((c) => c > 0)
    .sort((a, b) => a - b)

  if (nonZero.length === 0) return () => 0

  const p = (pct: number) => nonZero[Math.floor(pct * (nonZero.length - 1))]
  const q1 = p(0.25)
  const q2 = p(0.5)
  const q3 = p(0.75)

  return (count: number) => {
    if (count === 0) return 0
    if (count <= q1) return 1
    if (count <= q2) return 2
    if (count <= q3) return 3
    return 4
  }
}

export const GitHubContributions = async () => {
  const data = await fetchContributions("gusfune")
  if (!data) return null

  const getLevel = buildLevelFn(data)
  const months: { label: string; col: number }[] = []
  let lastMonth = ""
  data.weeks.forEach((week, i) => {
    const first = week.contributionDays[0]
    if (!first) return
    const month = new Date(first.date).toLocaleString("en-US", { month: "short" })
    if (month !== lastMonth) {
      months.push({ label: month, col: i })
      lastMonth = month
    }
  })

  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-2xl font-bold tracking-tight">GitHub</h3>
        <span className="text-sm text-muted-foreground">
          {data.totalContributions.toLocaleString()} contributions in the last year
        </span>
      </div>
      <div className="overflow-x-auto">
        <div className="inline-grid gap-[3px]" style={{ gridTemplateColumns: `repeat(${data.weeks.length}, 11px)` }}>
          {/* Month labels */}
          {Array.from({ length: data.weeks.length }, (_, col) => {
            const m = months.find((m) => m.col === col)
            return (
              <div key={`m-${col}`} className="text-[10px] text-muted-foreground leading-none h-3">
                {m?.label ?? ""}
              </div>
            )
          })}
          {/* Contribution cells: 7 rows (Sun–Sat) × N weeks */}
          {Array.from({ length: 7 }, (_, row) =>
            data.weeks.map((week, col) => {
              const day = week.contributionDays[row]
              if (!day) return <div key={`${row}-${col}`} />
              const level = getLevel(day.contributionCount)
              return (
                <div
                  key={`${row}-${col}`}
                  className={`size-[11px] rounded-[2px] contribution-${level}`}
                  title={`${day.contributionCount} contributions on ${day.date}`}
                />
              )
            }),
          )}
        </div>
      </div>
      <div className="flex items-center justify-end gap-1.5 text-[10px] text-muted-foreground">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div key={level} className={`size-[11px] rounded-[2px] contribution-${level}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  )
}

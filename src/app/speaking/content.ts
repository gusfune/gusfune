/**
 * Every talk, panel and podcast, in reverse chronological order.
 *
 * `title` stays the fused string the page already renders — venue, city, flag
 * and date in one line — rather than a new taxonomy nobody asked for. Before
 * this module the list existed three times (here, the homepage, and
 * public/llm.txt) and two copies were stale.
 *
 * `featured` marks the subset the homepage shows. Flip a flag to change what
 * the homepage lists; the full list on /speaking is unaffected.
 */
export interface Talk {
  title: string
  description: string
  /** Year of the event. Already in the title; repeated here so it is filterable. */
  year: number
  url?: string
  links?: { label: string; url: string }[]
  featured?: boolean
}

export const talks: Talk[] = [
  {
    title:
      "Ask an Ambassador: AI in Action — MACH X Takeaways (Remote - Nov '25)",
    description: "Hosted Ambassador panel discussion",
    url: "https://community.machalliance.org/home/events/ask-an-ambassador-ai-in-action-mach-x-takeaways-z6bnp1oqsr",
    year: 2025,
  },
  {
    title: "MACH X (London, 🏴󠁧󠁢󠁥󠁮󠁧󠁿🇬🇧 - Oct '25)",
    description:
      'Panelist in 3 panels and keynote speaker on Engineering track: "Harder, Better, Faster, Stronger – BÆRSkin\'s FAFO playbook for AI success"',
    url: "https://machalliance.org/events/mach-x-2025-london",
    featured: true,
    year: 2025,
  },
  {
    title: "BetterTech (🔈 Podcast - Sep '25)",
    description: "The Brave New World of eCommerce",
    links: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=y7BdVVP4ay4" },
    ],
    featured: true,
    year: 2025,
  },
  {
    title:
      "Participation on The Ecommerce Toolbox: Expert Perspectives (🔈 Podcast - May '25)",
    description: "From Chaos to Composable: Inside Baerskin's Tactical Rebuild",
    links: [
      {
        label: "Apple Podcasts",
        url: "https://podcasts.apple.com/us/podcast/from-chaos-to-composable-inside-baerskin-tacticals/id1695871656?i=1000708443380",
      },
      {
        label: "Spotify",
        url: "https://open.spotify.com/episode/2KMiwIPgpDq3OY0KxDGxjj",
      },
      { label: "YouTube", url: "https://www.youtube.com/watch?v=ZKX3LMIZZSc" },
    ],
    featured: true,
    year: 2025,
  },
  {
    title: "The Composable Conference 2025 (Chicago, 🇺🇸 - April '25)",
    description:
      "Co-hosted workshop: Workshop: Remaining Committed How to stay true to your mission and member of Jury for the MACH Impact Awards",
    url: "https://machalliance.org/mach-annual-conference",
    year: 2025,
  },
  {
    title: "Business Value of MACH Technologies (London, 🏴󠁧󠁢󠁥󠁮󠁧󠁿🇬🇧 - October '24)",
    description: "Panelist",
    url: "https://machalliance.org/events/business-value-of-mach-technologies",
    year: 2024,
  },
  {
    title: "Evolution Jobs - Evo Inspire (Podcast - July '24)",
    description: "Episode 2",
    url: "https://evolutionjobs.com/exchange/evo-inspires-gus-fune-chief-technology-officer-divbrands-episode-2/",
    year: 2024,
  },
  {
    title: "MACH Three (New York City, 🇺🇸 - June '24)",
    description:
      "Co-hosted 3 workshops: The Developer Hero Culture... How to Manage & Balance; The Truth & Lies Around Low-Code (as an Enabler of Customer Experience); When to Build—When to Buy.",
    url: "https://machalliance.org/events/mach-three",
    featured: true,
    year: 2024,
  },
  {
    title: "Evolution Jobs - Evo Inspire (Podcast - June '24)",
    description: "Episode 1",
    url: "https://evolutionjobs.com/exchange/evo-inspires-gus-fune-chief-technology-officer-divbrands-episode-1/",
    year: 2024,
  },
  {
    title: "Sentry Webinar (Remote - May '23)",
    description:
      "Session Replay for Developers: Your Shortcut to Faster Troubleshooting",
    url: "https://sentry.io/resources/session-replay-troubleshooting/",
    year: 2023,
  },
  {
    title: "Turing Fest 2022 (Edinburgh, 🏴󠁧󠁢󠁳󠁣󠁴󠁿🇬🇧 - July '22)",
    description:
      "Development Setup: How An Important Part of Your Toolset Is Often Overlooked (long version)",
    url: "https://turingfest.com/videos/gus-fune-development-setup-how-an-important-part-of-your-toolset-is-often-overlooked/",
    featured: true,
    year: 2022,
  },
  {
    title: "LeadDev London 2022 (London, 🏴󠁧󠁢󠁥󠁮󠁧󠁿🇬🇧 - June '22)",
    description:
      "Development setup: how an important part of your toolset is often overlooked (short version)",
    url: "https://leaddev.com/london/video/development-setup-how-important-part-your-toolset-often-overlooked",
    featured: true,
    year: 2022,
  },
  {
    title: "HasuraCon'21 (remote - June '21)",
    description: "Building Off Script on Hasura from day 0: what we learned",
    url: "https://hasura.io/events/hasura-con-2021/speakers/gus-fune/",
    featured: true,
    year: 2021,
  },
]

/** Talks whose recordings and links are gone. Kept for the record. */
export const lostFiles: Talk[] = [
  {
    title: "Hasura Community Call (remote - Aug '23)",
    description: "Showcasing usage of Hasura on MACH e-commerce",
    year: 2023,
  },
  {
    title: "Hasura Community Call (remote - May '21)",
    description: "Showcasing open-source contribution",
    year: 2021,
  },
  {
    title: "Share Curitiba (Curitiba, 🇧🇷 - May '14)",
    description: "Problems and Trends in Social Apps",
    year: 2014,
  },
  {
    title: "SBGames 2022 (Brasília, 🇧🇷 - Nov '11)",
    description: "The Brazilian Games Media",
    year: 2011,
  },
  {
    title: "Ossobuco (Brasília, 🇧🇷 - Jun '12)",
    description: "Trip Hacking, travel more, better and for less",
    year: 2012,
  },
  {
    title: "Campus Party (São Paulo, 🇧🇷 - Jan '11)",
    description: "Wordpress Optimization",
    year: 2011,
  },
]

export const featuredTalks = talks.filter((talk) => talk.featured)

import { certifications } from "./certifications"

/**
 * Who Gus is, in one place.
 *
 * Unlike every other module in src/content/, this one has no single page behind
 * it. The same facts are spread across the homepage, /about and the discovery
 * files today. The MCP `get_profile` tool exists because no URL returns them
 * together, and this is what it returns.
 */
export interface Role {
  title: string
  organisation: string
  url: string
  description: string
}

export type SocialIcon = "linkedin" | "x" | "github" | "substack" | "youtube"

export interface SocialLink {
  label: string
  url: string
  icon: SocialIcon
}

export const roles: Role[] = [
  {
    title: "CTO and Managing Partner",
    organisation: "BÆRskin Tactical",
    url: "https://baerskintactical.com",
    description:
      "Building the tools, tech and people since the brand's early days in 2021.",
  },
  {
    title: "Ambassador",
    organisation: "MACH Alliance",
    url: "https://machalliance.org/",
    description:
      "Advocating for open and best-of-breed enterprise technology in e-commerce ecosystems.",
  },
  {
    title: "Mentor",
    organisation: "Codebase",
    url: "https://thisiscodebase.com/",
    description:
      "Mentoring startups in the TechScaler and Barclays Eagle Labs programs across Scotland and the UK.",
  },
  {
    title: "Fellow",
    organisation: "BCS, The Chartered Institute for IT",
    url: "https://www.bcs.org/membership-and-registrations/become-a-member/bcs-fellowship/",
    description: "The source of the FBCS after the name.",
  },
]

export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/gusfune/",
    icon: "linkedin",
  },
  { label: "X", url: "https://www.twitter.com/gusfune", icon: "x" },
  { label: "GitHub", url: "https://github.com/gusfune", icon: "github" },
  {
    label: "Substack",
    url: "https://bogusfune.substack.com/",
    icon: "substack",
  },
  // Rickroll. It has been there for years. Leave it.
  { label: "YouTube", url: "https://youtu.be/dQw4w9WgXcQ", icon: "youtube" },
]

export const profile = {
  name: "Gus Fune",
  postNominals: "FBCS",
  headline:
    "CTO who has delivered over 100 products to scale. Some of these products were even developed before the cloud.",
  location: "Fife, Scotland, UK",
  origin: "Brasília, Brazil",
  email: "gus@fune.uk",
  supportEmail: "support@baerskintactical.com",
  expertise: [
    "Management",
    "Leadership",
    "E-commerce",
    "AI",
    "Composable and MACH architecture",
  ],
  roles,
  socials,
  certifications,
} as const

import type { StaticImageData } from "next/image"
import ImgAWS from "@assets/seal-aws.png"
import ImgAzure from "@assets/seal-azure.png"
import ImgCSPO from "@assets/seal-cspo.png"
import ImgGoogle from "@assets/seal-gcp.png"
import ImgMachExpert from "@assets/mach-certification-expert.png"
import ImgMachArchitect from "@assets/mach-certified-architect.png"

/**
 * Who Gus is, in one place.
 *
 * The homepage renders it, /about repeats parts of it in prose, and the
 * markdown layer reads it. It sits at the app root because the homepage is the
 * route that owns it, and it stays free of JSX so a route handler can import
 * it without pulling React in.
 */

/**
 * A credential badge. `image` keeps the static import rather than a string path
 * so Next can still generate the blur placeholder at build time.
 */
export interface CertificationItem {
  title: string
  link: string
  image: StaticImageData
}

export const certifications: CertificationItem[] = [
  {
    title: "MACH Certified Architect",
    link: "https://www.credly.com/badges/46daef4d-329d-4586-ad26-937cca6e4ca5/public_url",
    image: ImgMachArchitect,
  },
  {
    title: "MACH Certification Expert",
    link: "https://www.credly.com/badges/9b9201c7-dd59-481e-b505-07e6a212621a/public_url",
    image: ImgMachExpert,
  },
  {
    title: "AWS Certified Solutions Architect Associate",
    link: "https://www.credly.com/badges/bc06b2fd-b44f-4ff9-987b-e94e82064f6b/public_url",
    image: ImgAWS,
  },
  {
    title: "Certified Scrum Product Owner®",
    link: "https://bcert.me/bc/html/show-badge.html?b=tcnftnbq",
    image: ImgCSPO,
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    link: "https://www.credly.com/badges/b84b5185-a521-469b-b43f-3774dc956fdf",
    image: ImgAzure,
  },
  {
    title: "Google Cloud Certified Cloud Digital Leader",
    link: "https://www.credential.net/39b70852-bffe-4c9f-86c3-37724b2ab895?key=db3a4c7f9d9e69fab34f1e9661a3c2b39d02b21e1a60a9ceccea9b4113645e10",
    image: ImgGoogle,
  },
]

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
    title: "CTO",
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

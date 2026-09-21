/**
 * Third-party writing: quotes, articles and case studies about the work.
 *
 * Posts written here live in src/app/journal/posts/*.mdx and are loaded by
 * getBlogPosts(). This module covers only the external pieces, which have no
 * file behind them.
 *
 * `source` is the publisher and date as one string. Splitting it would invent a
 * taxonomy the page does not render and nothing else needs.
 */
export type PublicationKind = "QUOTE" | "ARTICLE" | "CASE STUDY"

export interface Publication {
  kind: PublicationKind
  title: string
  url: string
  source: string
}

export const publications: Publication[] = [
  {
    kind: "QUOTE",
    title:
      "The AI X-Factor: MACH Alliance’s 'MACH X' and AI Exchange Hackathon Help Enterprises Face the Future",
    url: "https://cmscritic.com/the-x-factor-is-ai-mach-alliances-mach-x-and-ai-exchange-hackathon-help-enterprises-face-the-future",
    source: "CMS Critic - October '25",
  },
  {
    kind: "QUOTE",
    title: "How to get the most out of AI tooling",
    url: "https://leaddev.com/uncategorized/how-get-most-out-ai-tooling",
    source: "Lead Dev - June '25",
  },
  {
    kind: "QUOTE",
    title: "Interoperability: Removing the barriers to business impact",
    url: "https://machalliance.org/interoperability-for-business",
    source: "MACH Alliance - June '25",
  },
  {
    kind: "QUOTE",
    title: "2024 Business Value of Mach Technologies Global Report",
    url: "https://xiatech.io/resources/get-the-2024-business-value-of-mach-technologies-report",
    source: "Xiatech & OneStock - January '25",
  },
  {
    kind: "QUOTE",
    title: "Bug management that works (part 2)",
    url: "https://open.substack.com/pub/pragmaticengineer/p/bug-management-that-works-part-2",
    source: "The Pragmatic Engineer - January '25",
  },
  {
    kind: "ARTICLE",
    title: "Migrating to microservices at MACH-speed",
    url: "https://leaddev.com/technical-direction/migrating-microservices-mach-speed",
    source: "Lead Dev, DirectorPlus, by Bill Doerfield - December '24",
  },
  {
    kind: "ARTICLE",
    title:
      "In conversation with Gus Fune, Chief Technology Officer at Divbrands",
    url: "https://primer.io/blog/in-conversation-with-gus-fune-chief-technology-officer-at-divbrands",
    source: "Primer.io, by James Hayward - August '23",
  },
  {
    kind: "CASE STUDY",
    title:
      "Checkly’s Impact on Divbrands: Enabling Daily Deployments and Reducing Response Times by Over 50%",
    url: "https://www.checklyhq.com/case-study/divbrands/",
    source: "Checkly - May '23",
  },
  {
    kind: "CASE STUDY",
    title: "Control Plane",
    url: "https://controlplane.com/customers/customer/div-brands",
    source: "Control Plane - January '24",
  },
  {
    kind: "CASE STUDY",
    title: "How divbrands future-proofed e-commerce with Payload",
    url: "https://payloadcms.com/case-studies/divbrands",
    source: "Payload - January '24",
  },
]

import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient()

const projectData: Prisma.ProjectCreateInput[] = [
  {
    title: "Bradesco for Glass",
    description:
      "Led the production of the first wearable product in Brazil for Bradesco, the third biggest bank in the country.",
    logo: "https://gusfune.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FyWlOwUcQnChwpV0nhEsg&w=3840&q=75",
    role: "Product Lead",
    year: 2013,
    links: {
      create: [
        {
          type: "IoT",
          url: "https://vimeo.com/84151891",
        },
      ],
    },
  },
  {
    title: "Off Script",
    description:
      "Leading the development of an e-commerce/SaaS marketplace startup.",
    logo: "https://gusfune.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FpVaMFj3tSkuJKaa0hLkx&w=3840&q=75",
    role: "CTO",
    year: 2020,
    links: {
      create: [
        {
          type: "Web",
          url: "https://offscript.io/",
        },
      ],
    },
  },
  {
    title: "GOL Linhas Aéreas",
    description:
      "Led the team responsible for redesigning and developing a more modern iOS and Android app for GOL, the biggest airline company in Brazil.",
    logo: "https://gusfune.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FTALON39ATA2lcM6gvYpf&w=3840&q=75",
    role: "Product Lead",
    year: 2016,
    links: {
      create: [
        {
          type: "iOS",
          url: "https://itunes.apple.com/br/app/gol-check-in-status-do-voo/id337961662?mt=8",
        },
        {
          type: "Android",
          url: "https://play.google.com/store/apps/details?id=br.com.edeploy.gol.checkin.activities",
        },
      ],
    },
  },
  {
    title: "Talkative",
    description:
      "Led the whole product team for the development of a new product for Web, iOS and Android. It kept over 4,5 stars reviews on app stores.",
    logo: "https://gusfune.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2Fd0Jvvqz9T3WW9HnMFeqy&w=3840&q=75",
    role: "CTO",
    year: 2018,
    links: {
      create: [
        {
          type: "Web",
          url: "https://talkative.media/",
        },
        {
          type: "Android",
          url: "https://play.google.com/store/apps/details?id=media.talkative.mobify",
        },
        {
          type: "iOS",
          url: "https://apps.apple.com/us/app/talkative/id1235312079",
        },
      ],
    },
  },
]

const recommendationData: Prisma.RecommendationCreateInput[] = [
  {
    name: "Tom Huggins",
    title: "CEO of VersusFC",
    content:
      "Gus is not only a talented designer and programmer he really excels at organization and project management and creates a really supportive work environment for his team, a skill that is invaluable in today’s industry. He is also dedicated and driven going above and beyond for his projects.",
    photo:
      "https://gusfune.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FCm4DPwQlKbIcuFGzhALA&w=256&q=75",
  },
  {
    name: "Ryan Materson",
    title: "CEO and Co-Founder of Green Hat Web Solutions",
    content:
      "Gus takes pride in being a fast and talented worker. Gus has an expert knowledge of WordPress. He is very skilled, and completes tasks quickly. He is a team player and knows how to manage others. I am very thankful to have Gus on my team!",
    photo:
      "https://gusfune.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FGmOQjEguSr64gdZytmfY&w=256&q=75",
  },
  {
    name: "Leslie Orsioli",
    title: "Client",
    content:
      "Gus was our chosen supplier for various projects. He presented us detailed solutions in record time, with excellent cost benefit and meeting all necessary requirements. During execution, we never had issues that were not promptly addressed. His level of service was beyond effective, as he's always very professional and attentive. I'd certainly recommend him to anyone in my network.",
    photo:
      "https://gusfune.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FIrBEkRMBRJeXmxMTkCWS&w=256&q=75",
  },
  {
    name: "Eden Wiedemann",
    title: "CEO at Talkative",
    content:
      "Gus is a different kind of professional. Forget the tech leader full of energy who spend a significant lot of time trying to look cool, the kind of face so common at the startup universe. He is a lot better than this. I had the honor to work with him some times, the last one as a partner in Wololo, where Gus was our CTO. Focus, responsibility, a huge capacity of quickly study a problem and give us the best tech solutions and, i must say, organized as hell. If you need someone to figure as the revolutionary and engaged tech leader he may not be your guy, but you need someone that does what needs to be done and can't be stopped until doing it, someone who is a fast learner and don't know what means \"impossible\", he is your man.",
    photo:
      "https://gusfune.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FByRHVT8mRmmh8dq0TF2v&w=256&q=75",
  },
]

const linkData: Prisma.LinkCreateInput[] = [
  {
    title: "Off Script",
    url: "https://offscript.io",
    featured: true,
  },
]

async function main() {
  console.log("Start seeding...")
  // Create projectLinks
  for (const p of projectData) {
    const project = await prisma.project.create({ data: p })
    console.log(`Created project: ${project.id}`)
  }
  // Create recommendations
  for (const r of recommendationData) {
    const recommendation = await prisma.recommendation.create({ data: r })
    console.log(`Created recommendation: ${recommendation.id}`)
  }
  // Create links
  for (const l of linkData) {
    const link = await prisma.link.create({ data: l })
    console.log(`Created link: ${link.id}`)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

module.exports = {}

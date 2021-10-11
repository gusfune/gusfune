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

async function main() {
  console.log("Start seeding...")
  // Create projectLinks
  for (const p of projectData) {
    const link = await prisma.project.create({ data: p })
    console.log(`Created project: ${link.id}`)
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

import db from "./index"

/*
 * This seed function is executed when you run `blitz db seed`.
 */
const seed = async () => {
  // PROJECTS
  const project_bradesco = await db.project.create({
    data: {
      title: "Bradesco for Glass",
      logo: "/images/bradesco.png",
      color: "#FFFFFF",
      subtitle:
        "Led the production of the first wearable product in Brazil for Bradesco, the third biggest bank in the country.",
      role: "Product Lead",
      year: 2013,
    },
  })
  const project_gol = await db.project.create({
    data: {
      title: "GOL Linhas Aéreas",
      logo: "/images/gol.png",
      color: "#FF7122",
      subtitle:
        "Led the team responsible for redesigning and developing a more modern iOS and Android app for GOL, the biggest airline company in Brazil.",
      role: "Product Lead",
      year: 2016,
    },
  })
  const project_talkative = await db.project.create({
    data: {
      title: "Talkative",
      logo: "/images/talkative.png",
      color: "##FFFFFF",
      subtitle:
        "Led the whole product team for the development of a new product for Web, iOS and Android. It kept over 4,5 stars reviews on app stores.",
      role: "CTO",
      year: 2017,
    },
  })
  const project_offscript = await db.project.create({
    data: {
      title: "Off Script",
      logo: "/images/offscript.svg",
      color: "#FFFFFF",
      subtitle: "Leading the development of an e-commerce/saas marketplace startup.",
      role: "CTO",
      year: 2021,
    },
  })
  // PROJECTS LINKS
  await db.projectLink.create({
    data: {
      url: "https://talkative.media/",
      type: "web",
      project: {
        connect: {
          id: project_talkative.id,
        },
      },
    },
  })
  await db.projectLink.create({
    data: {
      url: "https://play.google.com/store/apps/details?id=media.talkative.mobify",
      type: "android",
      project: {
        connect: {
          id: project_talkative.id,
        },
      },
    },
  })
  await db.projectLink.create({
    data: {
      url: "https://apps.apple.com/us/app/talkative/id1235312079",
      type: "ios",
      project: {
        connect: {
          id: project_talkative.id,
        },
      },
    },
  })
  await db.projectLink.create({
    data: {
      url: "https://play.google.com/store/apps/details?id=br.com.edeploy.gol.checkin.activities",
      type: "android",
      project: {
        connect: {
          id: project_gol.id,
        },
      },
    },
  })
  await db.projectLink.create({
    data: {
      url: "https://itunes.apple.com/br/app/gol-check-in-status-do-voo/id337961662?mt=8",
      type: "ios",
      project: {
        connect: {
          id: project_gol.id,
        },
      },
    },
  })
  await db.projectLink.create({
    data: {
      url: "https://vimeo.com/84151891",
      type: "iot",
      project: {
        connect: {
          id: project_bradesco.id,
        },
      },
    },
  })
  await db.projectLink.create({
    data: {
      url: "https://offscript.io/",
      type: "web",
      project: {
        connect: {
          id: project_offscript.id,
        },
      },
    },
  })

  // RECOMMENDATIONS
  await db.recommendation.create({
    data: {
      name: "Tom Huggins",
      title: "CEO of VersusFC",
      content:
        "Gus is not only a talented designer and programmer he really excels at organization and project management and creates a really supportive work environment for his team, a skill that is invaluable in today’s industry. He is also dedicated and driven going above and beyond for his projects.",
      photo: "/images/tom.jpg",
    },
  })
  await db.recommendation.create({
    data: {
      name: "Ryan Materson",
      title: "CEO and Co-Founder of Green Hat Web Solutions",
      content:
        "Gus takes pride in being a fast and talented worker. Gus has an expert knowledge of WordPress. He is very skilled, and completes tasks quickly. He is a team player and knows how to manage others. I am very thankful to have Gus on my team!",
      photo: "/images/ryan.jpg",
    },
  })
  await db.recommendation.create({
    data: {
      name: "Leslie Orsioli",
      title: "Client",
      content:
        "Gus was our chosen supplier for various projects. He presented us detailed solutions in record time, with excellent cost benefit and meeting all necessary requirements. During execution, we never had issues that were not promptly addressed. His level of service was beyond effective, as he's always very professional and attentive. I'd certainly recommend him to anyone in my network.",
      photo: "/images/leslie.jpg",
    },
  })
  await db.recommendation.create({
    data: {
      name: "Eden Wiedemann",
      title: "CEO of Talkative",
      content:
        "Gus is a different kind of professional. Forget the tech leader full of energy who spend a significant lot of time trying to look cool, the kind of face so common at the startup universe. He is a lot better than this. I had the honor to work with him some times, the last one as a partner in Wololo, where Gus was our CTO. Focus, responsibility, a huge capacity of quickly study a problem and give us the best tech solutions and, i must say, organized as hell. If you need someone to figure as the revolutionary and engaged tech leader he may not be your guy, but you need someone that does what needs to be done and can't be stopped until doing it, someone who is a fast learner and don't know what means \"impossible\", he is your man.",
      photo: "/images/eden.jpg",
    },
  })

  // LINKS
  await db.link.create({
    data: {
      title: "Off Script",
      url: "https://offscript.io",
      featured: true,
      slug: "ofs",
    },
  })
  await db.link.create({
    data: {
      title: "My tech setup",
      url: "https://gusfune.com/uses",
      featured: true,
      slug: "uses",
    },
  })
  await db.link.create({
    data: {
      title: "Blitz JS",
      url: "https://blitzjs.com/",
      featured: false,
      slug: "bjs",
    },
  })
}

export default seed

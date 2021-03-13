import { Image } from "blitz"

const About = () => (
  <section className="flex-grow-1">
    <div className="text-center">
      <Image src="/gusfune.jpg" alt="Gus Fune" width={180} height={180} className="rounded-full" />
    </div>
    <div className="my-4 text-sm font-thin">
      <p className="mb-4">
        I’m an experienced CTO who can fix hard-to-find bugs, test design changes in the browser,
        and automate anything my team needs to get done faster.
      </p>
      <p className="mb-4">
        I’ve delivered over 100 projects for clients like 3M, Coca-Cola, Behold Studios, BMW,
        Heineken, McDonald's and Motorola. I’ve also worked with early-stage startups on everything
        from product research to hiring, team-building, and even accounting.
      </p>
    </div>
    <Image
      src="/seal-cspo.png"
      alt="Certified Scrum Product Owner®"
      width={100}
      height={100}
      className="rounded-full"
    />
  </section>
)

export default About

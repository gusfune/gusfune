import { Image } from "blitz"

const About = () => (
  <section className="flex-grow-1">
    <div className="text-center">
      <Image src="/gusfune.jpg" alt="Gus Fune" width={180} height={180} className="rounded-full" />
    </div>
    <div className="my-4 text-sm font-medium">
      <p className="mb-4">
        I’m an experienced CTO who can fix hard-to-find bugs, test design changes in the browser,
        and automate anything my team needs to get done faster.
      </p>
      <p className="mb-4">
        I’ve delivered over 100 projects for clients like 3M, Coca-Cola, Behold Studios, BMW,
        Heineken, McDonald's and Motorola. I’ve also worked with early-stage startups on everything
        from product research to hiring, team-building, and even accounting.
      </p>
      <p className="mb-4">
        I am currently focused in,{" "}
        <a href="https://offscript.io" target="_blank" rel="noreferrer">
          Off Script
        </a>
        , a Stockholm 🇸🇪 based startup which I am CTO and Founder. We're working to reinvent
        e-commerce with a new take: putting people in the center.
      </p>
      <p className="mb-4">
        I am unavailable for contract work, but available for anything that would help people with
        their business or skills, such as mentorship, participation in events or just general help.
        Shoot me an e-mail if you want to chat.
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

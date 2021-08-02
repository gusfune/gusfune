import Image from "next/image"

const About = () => (
  <section className="flex-grow-1">
    <div className="my-4 text-sm font-medium">
      <p className="mb-4">
        I’m an experienced CTO who can fix hard-to-find bugs, test design
        changes in the browser, and automate anything my team needs to get done
        faster.
      </p>
      <p className="mb-4">
        I’ve delivered over 100 projects for clients like 3M, Coca-Cola, Behold
        Studios, BMW, Heineken, McDonald&apos;s and Motorola. I’ve also worked
        with early-stage startups on everything from product research to hiring,
        team-building, and even accounting.
      </p>
      <p className="mb-4">
        I am currently focused in,{" "}
        <a href="https://offscript.io" target="_blank" rel="noreferrer">
          Off Script
        </a>
        , a Stockholm 🇸🇪 based startup which I am CTO and Founder. We&apos;re
        working to reinvent e-commerce with a new take: putting people in the
        center.
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

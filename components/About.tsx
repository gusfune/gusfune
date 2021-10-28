import Image from "next/image"
import ImgAWS from "../public/seal-aws.png"
import ImgAzure from "../public/seal-azure.png"
import ImgCSPO from "../public/seal-cspo.png"

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
    <a
      href="https://www.credly.com/badges/bc06b2fd-b44f-4ff9-987b-e94e82064f6b/public_url"
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src={ImgAWS}
        alt="AWS Certified Solutions Architect Associate"
        width={100}
        height={100}
        placeholder="blur"
      />
    </a>
    <a
      href="https://bcert.me/bc/html/show-badge.html?b=tcnftnbq"
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src={ImgCSPO}
        alt="Certified Scrum Product Owner®"
        width={100}
        height={100}
        placeholder="blur"
      />
    </a>
    <a
      href="https://www.credly.com/badges/b84b5185-a521-469b-b43f-3774dc956fdf"
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src={ImgAzure}
        alt="Microsoft Certified: Azure Fundamentals"
        width={100}
        height={100}
        placeholder="blur"
      />
    </a>
  </section>
)

export default About

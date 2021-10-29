import Image from "next/image"
import ImgAWS from "../public/seal-aws.png"
import ImgAzure from "../public/seal-azure.png"
import ImgCSPO from "../public/seal-cspo.png"
import ImgGoogle from "../public/seal-gcp.png"

interface CertificationProps {
  image: StaticImageData
  link: string
  title: string
}

const Certification = ({ link, image, title }: CertificationProps) => (
  <a href={link} target="_blank" rel="noreferrer">
    <Image
      src={image}
      alt={title}
      width={100}
      height={100}
      placeholder="blur"
      title={title}
    />
  </a>
)

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
    <div className="grid grid-cols-2 gap-2 xl:grid-cols-4">
      <Certification
        link="https://www.credly.com/badges/bc06b2fd-b44f-4ff9-987b-e94e82064f6b/public_url"
        image={ImgAWS}
        title="AWS Certified Solutions Architect Associate"
      />
      <Certification
        link="https://bcert.me/bc/html/show-badge.html?b=tcnftnbq"
        image={ImgCSPO}
        title="Certified Scrum Product Owner®"
      />
      <Certification
        link="https://www.credly.com/badges/b84b5185-a521-469b-b43f-3774dc956fdf"
        image={ImgAzure}
        title="Microsoft Certified: Azure Fundamentals"
      />
      <Certification
        link="https://www.credential.net/39b70852-bffe-4c9f-86c3-37724b2ab895?key=db3a4c7f9d9e69fab34f1e9661a3c2b39d02b21e1a60a9ceccea9b4113645e10"
        image={ImgGoogle}
        title="Google Cloud Certified Cloud Digital Leader"
      />
    </div>
  </section>
)

export default About

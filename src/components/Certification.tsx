import Image from "next/image"
import type { StaticImageData } from "next/image"
import ImgAWS from "@assets/seal-aws.png"
import ImgAzure from "@assets/seal-azure.png"
import ImgCSPO from "@assets/seal-cspo.png"
import ImgGoogle from "@assets/seal-gcp.png"
import ImgMach3 from "@assets/mach-certification-expert.png"
import ImgMACHCertification from "@assets/mach-certified-architect.png"

interface CertificationProps {
  image: StaticImageData
  link: string
  title: string
}

export const Certification = ({ link, image, title }: CertificationProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="hover:rounded-lg hover:bg-slate-100"
  >
    <Image
      src={image}
      alt={title}
      width={600}
      height={600}
      placeholder="blur"
      title={title}
    />
  </a>
)

export const CertificationList = () => (
  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 my-2">
    <Certification
      link="https://www.credly.com/badges/46daef4d-329d-4586-ad26-937cca6e4ca5/public_url"
      image={ImgMACHCertification}
      title="MACH Certified Architect"
    />
    <Certification
      link="https://www.credly.com/badges/9b9201c7-dd59-481e-b505-07e6a212621a/public_url"
      image={ImgMach3}
      title="MACH Certification Expert"
    />
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
)

import type { StaticImageData } from "next/image"
import ImgAWS from "@assets/seal-aws.png"
import ImgAzure from "@assets/seal-azure.png"
import ImgCSPO from "@assets/seal-cspo.png"
import ImgGoogle from "@assets/seal-gcp.png"
import ImgMachExpert from "@assets/mach-certification-expert.png"
import ImgMachArchitect from "@assets/mach-certified-architect.png"

/**
 * Credential badges shown on the homepage.
 *
 * `image` keeps the static import rather than a string path so Next can still
 * generate the blur placeholder at build time.
 */
export interface CertificationItem {
  title: string
  link: string
  image: StaticImageData
}

export const certifications: CertificationItem[] = [
  {
    title: "MACH Certified Architect",
    link: "https://www.credly.com/badges/46daef4d-329d-4586-ad26-937cca6e4ca5/public_url",
    image: ImgMachArchitect,
  },
  {
    title: "MACH Certification Expert",
    link: "https://www.credly.com/badges/9b9201c7-dd59-481e-b505-07e6a212621a/public_url",
    image: ImgMachExpert,
  },
  {
    title: "AWS Certified Solutions Architect Associate",
    link: "https://www.credly.com/badges/bc06b2fd-b44f-4ff9-987b-e94e82064f6b/public_url",
    image: ImgAWS,
  },
  {
    title: "Certified Scrum Product Owner®",
    link: "https://bcert.me/bc/html/show-badge.html?b=tcnftnbq",
    image: ImgCSPO,
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    link: "https://www.credly.com/badges/b84b5185-a521-469b-b43f-3774dc956fdf",
    image: ImgAzure,
  },
  {
    title: "Google Cloud Certified Cloud Digital Leader",
    link: "https://www.credential.net/39b70852-bffe-4c9f-86c3-37724b2ab895?key=db3a4c7f9d9e69fab34f1e9661a3c2b39d02b21e1a60a9ceccea9b4113645e10",
    image: ImgGoogle,
  },
]

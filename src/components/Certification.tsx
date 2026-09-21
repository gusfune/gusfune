import Image from "next/image"
import type { StaticImageData } from "next/image"
import { certifications } from "@/content/certifications"

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
    className="rounded-lg transition-transform duration-200 hover:scale-105 no-underline"
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
    {certifications.map((certification) => (
      <Certification key={certification.title} {...certification} />
    ))}
  </div>
)

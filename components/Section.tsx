type Props = {
  title: string
  children: React.ReactNode
}

const Section = ({ title, children }: Props) => (
  <section className="my-8">
    <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
    <div className="section-units">{children}</div>
  </section>
)

export default Section

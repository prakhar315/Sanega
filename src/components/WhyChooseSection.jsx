import SectionHeading from './SectionHeading'
import { valuePropositions } from '../data/siteData'

export default function WhyChooseSection() {
  return (
    <section id="why-choose-us" className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose SANEGAA"
          title="A value proposition built around reliability and trust"
          description="Clients need more than execution. They need a partner that is precise, responsive, and prepared for the realities of heavy-industry sites."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {valuePropositions.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7eddb] text-[#9a6a10]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
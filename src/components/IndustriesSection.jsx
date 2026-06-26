import SectionHeading from './SectionHeading'
import { industries } from '../data/siteData'

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries Served"
          title="Trusted across public, commercial, and industrial environments"
          description="Our delivery model is built for diverse sites that demand consistent safety, compliance, and execution quality."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => {
            const Icon = industry.icon

            return (
              <div
                key={industry.name}
                className="flex items-center gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-orange-600 shadow-sm">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-sm font-medium text-slate-800">{industry.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
import SectionHeading from './SectionHeading'
import { corporateStructure } from '../data/siteData'

export default function CorporateStructureSection() {
  const root = corporateStructure[0]

  return (
    <section id="structure" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Corporate Structure"
          title="A structured group model for specialized delivery"
          description="The proposed SANEGAA group architecture separates capabilities cleanly while keeping coordination tight across disciplines."
        />

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-xl">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">Top Level</p>
              <h3 className="mt-3 text-2xl font-semibold">{root.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{root.description}</p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {root.children.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 px-5 py-5 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
import { useState } from 'react'
import SectionHeading from './SectionHeading'
import { divisions } from '../data/siteData'

export default function DivisionsSection() {
  const [activeDivision, setActiveDivision] = useState(divisions[0].key)
  const currentDivision = divisions.find((division) => division.key === activeDivision) || divisions[0]

  return (
    <section id="divisions" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Offering"
          title="Two focused divisions, one dependable delivery philosophy"
          description="SANEGAA’s structure keeps infrastructure and fire safety work organized, specialized, and accountable from planning through execution."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="space-y-4">
            {divisions.map((division) => {
              const Icon = division.icon
              const isActive = activeDivision === division.key

              return (
                <button
                  key={division.key}
                  type="button"
                  onClick={() => setActiveDivision(division.key)}
                  className={`w-full rounded-[1.75rem] border p-5 text-left transition ${
                    isActive
                      ? 'border-orange-500 bg-slate-950 text-white shadow-lg shadow-slate-950/10'
                      : 'border-slate-200 bg-slate-50 text-slate-950 hover:border-orange-300 hover:bg-orange-50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                        isActive ? 'bg-orange-500 text-white' : 'bg-white text-orange-600'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${isActive ? 'text-orange-300' : 'text-orange-600'}`}>
                        {division.eyebrow}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold">{division.title}</h3>
                      <p className={`mt-2 text-sm leading-6 ${isActive ? 'text-slate-300' : 'text-slate-600'}`}>
                        {division.summary}
                      </p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          <article className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-600">
              {currentDivision.eyebrow}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-950">{currentDivision.title}</h3>
            <p className="mt-4 text-base leading-7 text-slate-600">{currentDivision.summary}</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {currentDivision.services.map((service) => (
                <li
                  key={service}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm leading-6 text-slate-700"
                >
                  {service}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
import SectionHeading from './SectionHeading'
import { companyStats, visionMission } from '../data/siteData'
import firstSafety from '../assets/firstsafety.jpeg'
import firstSafety2 from '../assets/firstsafetly2.jpeg'

const aboutVisuals = [
  {
    title: 'Fire protection readiness',
    src: firstSafety,
    alt: 'Fire safety equipment and readiness setup',
  },
  {
    title: 'On-site safety execution',
    src: firstSafety2,
    alt: 'Safety focused operations on an industrial site',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#f8f3ea] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About SANEGAA"
          title="A corporate partner for safe, durable, and delivery-focused projects"
          description="We combine infrastructure execution and fire safety expertise to support clients who need precision, compliance, and dependable project coordination."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a6a10]">
              Corporate Profile
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              SANEGAA INFRA & SAFETY PVT. LTD. serves the heavy industry sector with a
              disciplined delivery model spanning EPC, civil construction, fire
              protection systems, and ongoing maintenance support.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {companyStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl bg-slate-50 p-5">
                  <p className="text-3xl font-semibold text-slate-950">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {aboutVisuals.map((visual) => (
                <figure
                  key={visual.title}
                  className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950 text-white shadow-sm"
                >
                  <div className="relative h-56 sm:h-72">
                    <img
                      src={visual.src}
                      alt={visual.alt}
                      className="h-full w-full object-cover opacity-90"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(8,17,30,0.82))]" />
                    <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#f1d08a]">
                      {visual.title}
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {visionMission.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#fff7ed_100%)] p-8 shadow-sm"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a6a10]">
                    {item.title}
                  </p>
                  <p className="mt-4 text-base leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
import { ArrowRight, BadgeCheck, ShieldAlert } from 'lucide-react'
import { companyHighlights } from '../data/siteData'
import heroVideo from '../assets/vidssave.mp4'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-24 sm:pt-28"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(8,17,30,0.88)_10%,rgba(8,17,30,0.55)_45%,rgba(8,17,30,0.78)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(215,180,106,0.2),_transparent_34%)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center px-4 pb-8 pt-5 sm:px-6 lg:px-8 lg:pb-10">
        <div className="max-w-3xl rounded-[2rem] border border-white/20 bg-white/5 p-5 backdrop-blur-sm sm:p-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 backdrop-blur">
            <ShieldAlert className="h-4 w-4 text-[#f1d08a]" />
            EPC, infrastructure, civil construction, and fire protection
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Engineering Infrastructure.
            <span className="block text-[#f1d08a]">Securing Lives.</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
            SANEGAA INFRA & SAFETY PVT. LTD. delivers civil construction,
            turnkey EPC projects, and advanced fire protection systems with a
            premium, compliance-first approach built for heavy industry.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[1px] border-[#9a6a10] bg-[#d7b46a] px-7 py-4 text-sm font-semibold text-[#08111e] shadow-lg shadow-[#d7b46a]/30 transition hover:bg-[#f1d08a]"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#divisions"
              className="inline-flex items-center justify-center rounded-full border border-[1px] border-white/85 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Divisions
            </a>
          </div>

          <div className="mt-7 hidden gap-3 md:grid md:grid-cols-3">
            {companyHighlights.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/20 bg-white/5 p-4 text-sm text-slate-100 backdrop-blur"
              >
                <BadgeCheck className="h-5 w-5 text-[#f1d08a]" />
                <p className="mt-3 leading-6">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
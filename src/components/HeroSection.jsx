import { ArrowRight, BadgeCheck, ShieldAlert } from 'lucide-react'
import { companyHighlights } from '../data/siteData'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.14),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(15,23,42,0.55),_transparent_38%),linear-gradient(180deg,#0f172a_0%,#111827_44%,#f8fafc_100%)] pt-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-24 pt-10 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur">
            <ShieldAlert className="h-4 w-4 text-orange-400" />
            EPC, infrastructure, civil construction, and fire protection
          </div>

          <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Engineering Infrastructure.
            <span className="block text-orange-400">Securing Lives.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            SANEGAA INFRA & SAFETY PVT. LTD. delivers civil construction,
            turnkey EPC projects, and advanced fire protection systems with a
            premium, compliance-first approach built for heavy industry.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-400"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#divisions"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Divisions
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {companyHighlights.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 backdrop-blur"
              >
                <BadgeCheck className="h-5 w-5 text-orange-400" />
                <p className="mt-3 leading-6">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-orange-500/10 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-400">
                Corporate Overview
              </p>
              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Specialization</p>
                  <p className="mt-1 text-xl font-semibold">Infrastructure + Fire Safety</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Delivery Model</p>
                  <p className="mt-1 text-xl font-semibold">Turnkey, AMC, Compliance</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Primary Focus</p>
                  <p className="mt-1 text-xl font-semibold">Trustworthy execution for heavy industry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
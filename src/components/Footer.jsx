import { navLinks } from '../data/siteData'
import sanegaLogo from '../assets/sanegalogo.png'

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-10 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 text-white">
              <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-white ring-1 ring-white/10">
                <img src={sanegaLogo} alt="SANEGAA logo" className="h-full w-full object-contain p-1" />
              </span>
              <div>
                <p className="text-sm font-semibold tracking-[0.22em]">SANEGAA</p>
                <p className="text-xs text-slate-400">Infra & Safety Pvt. Ltd.</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Static corporate profile built for clarity, speed, and trust.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="rounded-full border border-white/10 px-4 py-2 transition hover:bg-white/5">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SANEGAA INFRA & SAFETY PVT. LTD. All rights reserved.</p>
          <p>Disclaimer: This is a static corporate profile website.</p>
        </div>
      </div>
    </footer>
  )
}
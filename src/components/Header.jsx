import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks } from '../data/siteData'
import sanegaLogo from '../assets/sanegalogo.png'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 28)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-[#d7b46a]/20 backdrop-blur-md transition-colors ${scrolled ? 'bg-[#050b14]/96 shadow-lg shadow-black/35' : 'bg-[#08111e]/82'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-white">
          <span className="flex h-16 w-20 items-center justify-center overflow-hidden rounded-[1.25rem] bg-white shadow-lg shadow-[#d7b46a]/25 ring-1 ring-white/10 sm:h-[4.5rem] sm:w-24">
            <img src={sanegaLogo} alt="SANEGAA logo" className="h-full w-full object-contain p-1.5" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-[0.24em] text-[#f1d08a]">
              SANEGAA
            </span>
            <span className="block text-xs text-slate-300/80">
              Infra & Safety Pvt. Ltd.
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#f1d08a] transition hover:text-[#ffe7b3]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#050b14]/98 px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:px-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[#f1d08a] transition hover:bg-white/5 hover:text-[#ffe7b3]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
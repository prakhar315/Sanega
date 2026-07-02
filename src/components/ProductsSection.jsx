import { MessageCircleMore } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { products, contactDetails } from '../data/siteData'

export default function ProductsSection() {
  const whatsappHref = `https://wa.me/${contactDetails.phoneNumber}?text=${encodeURIComponent(
    'Hi SANEGAA Team, I am interested in your services.'
  )}`

  return (
    <section id="products" className="bg-[#f8f3ea] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product Showcase"
          title="Equipment and life-safety products tailored for demanding sites"
          description="Every product card includes a direct WhatsApp inquiry path so buyers can move quickly from interest to conversation."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => {
            const Icon = product.icon

            return (
              <article
                key={product.name}
                className="group flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#08111e] to-[#163458] text-[#f1d08a] transition group-hover:from-[#d7b46a] group-hover:to-[#9a6a10] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#9a6a10]">
                  {product.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-950">{product.name}</h3>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[#1e6b4f] transition hover:text-[#2a8a61]"
                >
                  <MessageCircleMore className="h-4 w-4" />
                  Inquire via WhatsApp
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
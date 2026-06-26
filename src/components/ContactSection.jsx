import { Mail, MapPinned, MessageCircleMore, Clock3, PhoneCall } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { contactDetails } from '../data/siteData'

export default function ContactSection() {
  const whatsappHref = `https://wa.me/${contactDetails.phoneNumber}?text=${encodeURIComponent(
    contactDetails.whatsappText
  )}`

  return (
    <section id="contact" className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact Us"
          title="Start a conversation with SANEGAA"
          description="The fastest route is WhatsApp. For office details and location context, use the contact panel and map below."
          align="center"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 rounded-[1.5rem] bg-emerald-500 px-6 py-5 text-lg font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
            >
              <MessageCircleMore className="h-5 w-5" />
              Chat on WhatsApp
            </a>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <div className="flex items-start gap-3">
                  <MapPinned className="mt-1 h-5 w-5 text-orange-400" />
                  <div>
                    <p className="text-sm font-semibold text-white">Office Address</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{contactDetails.address}</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-5 w-5 text-orange-400" />
                    <div>
                      <p className="text-sm font-semibold text-white">Email</p>
                      <p className=" text-sm text-slate-300">{contactDetails.email}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  <div className="flex items-start gap-3">
                    <Clock3 className="mt-1 h-5 w-5 text-orange-400" />
                    <div>
                      <p className="text-sm font-semibold text-white">Working Hours</p>
                      <p className="mt-1 text-sm text-slate-300">{contactDetails.workingHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={contactDetails.mapLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:bg-slate-800"
              >
                <div className="flex items-start gap-3">
                  <PhoneCall className="mt-1 h-5 w-5 text-orange-400" />
                  <div>
                    <p className="text-sm font-semibold text-white">Open Office Location</p>
                    <p className="mt-1 text-sm text-slate-300">Google Maps location link</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/20">
            <iframe
              title="SANEGAA office location map"
              src={contactDetails.mapEmbed}
              className="h-[520px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
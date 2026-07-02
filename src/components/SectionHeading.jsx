export default function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'dark' }) {
  const isLight = tone === 'light'

  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${isLight ? 'text-[#f1d08a]' : 'text-[#9a6a10]'}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ${isLight ? 'text-white' : 'text-slate-950'}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${isLight ? 'text-white' : 'text-slate-600'}`}>{description}</p>
      ) : null}
    </div>
  )
}
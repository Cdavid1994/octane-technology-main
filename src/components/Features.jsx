import { useLanguage } from '../i18n/useLanguage'

export default function Features() {
  const { t } = useLanguage()
  const { features } = t

  return (
    <section id="solutions" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-octane">
            {features.eyebrow}
          </h2>
          <p className="font-display mt-3 text-3xl font-semibold text-white sm:text-4xl">{features.title}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-line bg-surface p-6 transition hover:border-cyan/40 hover:bg-surface-raised"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/10 text-cyan transition group-hover:bg-cyan/20">
                <span className="h-2 w-2 rounded-full bg-cyan" />
              </div>
              <h3 className="font-display text-lg font-medium text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

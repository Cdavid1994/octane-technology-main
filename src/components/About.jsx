import { useLanguage } from '../i18n/useLanguage'

export default function About() {
  const { t } = useLanguage()
  const { about } = t

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-octane">
            {about.eyebrow}
          </h2>
          <p className="font-display mt-3 text-3xl font-semibold text-white sm:text-4xl">{about.headline}</p>
        </div>

        <div className="mt-8 space-y-4">
          {about.story.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="max-w-3xl text-base leading-relaxed text-white/60">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-display text-xl font-semibold text-white">{about.principlesTitle}</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {about.principles.map((principle) => (
              <div key={principle.title} className="rounded-2xl border border-line bg-surface p-6">
                <h4 className="font-display text-base font-medium text-white">{principle.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{principle.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm italic leading-relaxed text-white/50">{about.principlesClosing}</p>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-xl font-semibold text-white">{about.pillarsTitle}</h3>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <tbody>
                {about.pillars.map((pillar, i) => (
                  <tr key={pillar.title} className={i !== about.pillars.length - 1 ? 'border-b border-line' : ''}>
                    <th
                      scope="row"
                      className="w-1/3 bg-surface px-5 py-4 align-top font-display text-sm font-medium text-cyan"
                    >
                      {pillar.title}
                    </th>
                    <td className="px-5 py-4 align-top text-sm leading-relaxed text-white/60">{pillar.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-xl font-semibold text-white">{about.differentiatorsTitle}</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {about.differentiators.map((item) => (
              <div key={item.title} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-octane" aria-hidden />
                <div>
                  <h4 className="font-display text-base font-medium text-white">{item.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-white/55">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <blockquote className="mt-16 border-l-2 border-cyan pl-6">
          <p className="font-display text-xl text-white sm:text-2xl">&ldquo;{about.quote}&rdquo;</p>
          <p className="mt-3 text-sm text-white/50">— {about.quoteAttribution}</p>
        </blockquote>
      </div>
    </section>
  )
}

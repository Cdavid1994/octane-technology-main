import { useLanguage } from '../i18n/useLanguage'
import { useCountUp } from '../hooks/useCountUp'

function Metric({ target, prefix = '', suffix = '', decimals = 0, label }) {
  const [value, ref] = useCountUp(target)

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl font-semibold text-white sm:text-5xl">
        {prefix}
        <span className="text-cyan">{value.toFixed(decimals)}</span>
        {suffix}
      </p>
      <p className="mt-2 text-sm uppercase tracking-widest text-white/50">{label}</p>
    </div>
  )
}

export default function Metrics() {
  const { t } = useLanguage()
  const { metrics } = t

  return (
    <section id="performance" className="relative border-y border-line bg-surface/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-octane">
            {metrics.eyebrow}
          </h2>
          <p className="font-display mt-3 text-2xl font-semibold text-white sm:text-3xl">{metrics.title}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-10 sm:grid-cols-4">
          {metrics.items.map((metric) => (
            <Metric key={metric.label} {...metric} />
          ))}
        </div>
      </div>
    </section>
  )
}

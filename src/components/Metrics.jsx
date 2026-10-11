import { useCountUp } from '../hooks/useCountUp'

const METRICS = [
  { target: 99.99, suffix: '%', decimals: 2, label: 'Uptime SLA' },
  { target: 8, prefix: '<', suffix: 'ms', label: 'Average Latency' },
  { target: 500, suffix: '+', label: 'Systems Deployed' },
  { target: 24, suffix: '/7', label: 'Global Monitoring' },
]

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
  return (
    <section id="performance" className="relative border-y border-line bg-surface/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {METRICS.map((metric) => (
            <Metric key={metric.label} {...metric} />
          ))}
        </div>
      </div>
    </section>
  )
}

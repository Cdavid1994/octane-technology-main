const FEATURES = [
  {
    title: 'High-Performance Architecture',
    desc: 'Systems designed around real bottlenecks — not assumptions. Low-latency services built to hold up under production load.',
  },
  {
    title: 'Infrastructure Optimization',
    desc: 'We profile, tune, and rightsize your stack so you pay for the compute you actually need, not the headroom you hope for.',
  },
  {
    title: 'Real-Time Observability',
    desc: 'Metrics, traces, and logs wired together from day one, so incidents are diagnosed in minutes, not war rooms.',
  },
  {
    title: 'Elastic Cloud Scaling',
    desc: 'Autoscaling policies and load-aware deployments that absorb traffic spikes without paging anyone at 3am.',
  },
  {
    title: 'Zero-Downtime Delivery',
    desc: 'Progressive rollouts, feature flags, and automated rollback baked into every pipeline we ship.',
  },
  {
    title: 'Security-First Engineering',
    desc: 'Hardened by default — least-privilege access, encrypted transport, and audits built into the release cycle.',
  },
]

export default function Features() {
  return (
    <section id="solutions" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-octane">Solutions</h2>
          <p className="font-display mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Everything your platform needs to run at full throttle
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
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

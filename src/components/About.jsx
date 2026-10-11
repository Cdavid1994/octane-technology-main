const VALUES = [
  {
    title: 'Performance is a feature',
    desc: 'We treat latency, throughput, and resource cost as first-class requirements, not an afterthought for the next sprint.',
  },
  {
    title: 'Operate what you build',
    desc: 'The engineers who design a system are the ones who run it in production, which keeps every decision honest.',
  },
  {
    title: 'Measure, don’t guess',
    desc: 'Every optimization starts from a profile or a trace, never a hunch — so the fix is verifiable, not folklore.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-octane">About</h2>
          <p className="font-display mt-3 text-3xl font-semibold text-white sm:text-4xl">
            A small team of engineers obsessed with the critical path
          </p>
          <p className="mt-5 text-base leading-relaxed text-white/60">
            Octane Technology is a software engineering practice focused on one problem:
            making systems fast and keeping them that way. We work close to the metal —
            architecture reviews, infrastructure tuning, and observability — so the teams
            we work with ship features instead of fighting their own stack.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {VALUES.map((value) => (
            <div key={value.title} className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-display text-lg font-medium text-white">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useLanguage } from '../i18n/useLanguage'

export default function Hero() {
  const { t } = useLanguage()
  const { hero } = t

  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28">
      <div className="grid-backdrop animate-drift absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-ink/40 to-ink" />
      <div
        className="absolute left-1/2 top-24 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan/20 blur-[120px]"
        aria-hidden
      />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-cyan">
          <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-cyan" />
          {hero.badge}
        </span>

        <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl">
          {hero.headlineLine1}
          <br />
          {hero.headlinePrefix} <span className="text-gradient">{hero.headlineAccent}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
          {hero.subtitle}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="glow-octane rounded-full bg-octane px-7 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href="#solutions"
            className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white/90 transition hover:border-cyan/60 hover:text-cyan"
          >
            {hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}

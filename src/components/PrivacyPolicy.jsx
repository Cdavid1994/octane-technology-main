import { useEffect } from 'react'
import { useLanguage } from '../i18n/useLanguage'

const LAST_UPDATED = new Date(2026, 9, 10) // October 10, 2026 — month is 0-indexed
const CURRENT_YEAR = new Date().getFullYear()

function LangToggle({ lang, toggleLang }) {
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={lang === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
      className="flex items-center gap-1 rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-white/70 transition hover:border-cyan/60 hover:text-cyan"
    >
      <span className={lang === 'en' ? 'text-cyan' : ''}>EN</span>
      <span className="text-white/30">/</span>
      <span className={lang === 'es' ? 'text-cyan' : ''}>ES</span>
    </button>
  )
}

export default function PrivacyPolicy() {
  const { lang, toggleLang, t } = useLanguage()
  const { privacy } = t

  useEffect(() => {
    document.title = `${privacy.title} — Octane Technology`
    return () => {
      document.title = 'Octane Technology — Engineering at Full Throttle'
    }
  }, [privacy.title])

  return (
    <div className="bg-ink min-h-screen">
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <a href="/" className="font-display flex items-center gap-2 text-lg font-semibold tracking-tight text-white">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
              <path d="M18 4 L9 18 h6 l-2 10 L23 14 h-6 Z" fill="#00f0ff" />
            </svg>
            OCTANE<span className="text-cyan">.</span>
          </a>
          <LangToggle lang={lang} toggleLang={toggleLang} />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <a href="/" className="text-sm text-cyan hover:underline">
          {privacy.backHome}
        </a>

        <h1 className="font-display mt-6 text-3xl font-semibold text-white sm:text-4xl">{privacy.title}</h1>
        <p className="mt-2 text-sm text-white/40">
          {privacy.lastUpdatedLabel}:{' '}
          {LAST_UPDATED.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>

        <p className="mt-8 text-base leading-relaxed text-white/60">{privacy.intro}</p>

        <div className="mt-10 space-y-8">
          {privacy.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-lg font-medium text-white">{section.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{section.body}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-line px-6 py-8 text-center text-xs text-white/40">
        &copy; {CURRENT_YEAR} Octane Technology.
      </footer>
    </div>
  )
}

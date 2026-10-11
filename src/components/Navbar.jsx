import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/useLanguage'

function LangToggle({ lang, toggleLang, className = '' }) {
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={lang === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
      className={`flex items-center gap-1 rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-white/70 transition hover:border-cyan/60 hover:text-cyan ${className}`}
    >
      <span className={lang === 'en' ? 'text-cyan' : ''}>EN</span>
      <span className="text-white/30">/</span>
      <span className={lang === 'es' ? 'text-cyan' : ''}>ES</span>
    </button>
  )
}

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: t.nav.solutions, href: '#solutions' },
    { label: t.nav.performance, href: '#performance' },
    { label: t.nav.about, href: '#about' },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display flex items-center gap-2 text-lg font-semibold tracking-tight text-white">
          <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
            <path d="M18 4 L9 18 h6 l-2 10 L23 14 h-6 Z" fill="#00f0ff" />
          </svg>
          OCTANE<span className="text-cyan">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-white/70 transition hover:text-white">
              {link.label}
            </a>
          ))}
          <LangToggle lang={lang} toggleLang={toggleLang} />
          <a
            href="#contact"
            className="rounded-full border border-cyan/60 px-4 py-2 text-sm font-medium text-cyan transition hover:bg-cyan hover:text-ink"
          >
            {t.nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LangToggle lang={lang} toggleLang={toggleLang} />
          <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="flex flex-col gap-1.5">
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink px-6 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-white/80"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block py-2 text-sm font-medium text-cyan">
            {t.nav.cta}
          </a>
        </div>
      )}
    </header>
  )
}

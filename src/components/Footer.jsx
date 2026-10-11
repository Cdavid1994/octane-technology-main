import { useLanguage } from '../i18n/useLanguage'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  const { t } = useLanguage()
  const { footer } = t

  const links = [
    { label: footer.links.solutions, href: '#solutions' },
    { label: footer.links.performance, href: '#performance' },
    { label: footer.links.about, href: '#about' },
    { label: footer.links.contact, href: '#contact' },
  ]

  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg font-semibold text-white">
              OCTANE<span className="text-cyan">.</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/50">{footer.tagline}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">{footer.companyHeader}</p>
            <ul className="mt-4 space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 transition hover:text-cyan">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/privacy" className="text-sm text-white/60 transition hover:text-cyan">
                  {footer.privacy}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {CURRENT_YEAR} Octane Technology. {footer.rights}
          </p>
          <p>{footer.bottomLine}</p>
        </div>
      </div>
    </footer>
  )
}

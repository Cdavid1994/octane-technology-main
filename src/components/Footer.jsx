const CURRENT_YEAR = new Date().getFullYear()

const LINKS = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Performance', href: '#performance' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg font-semibold text-white">
              OCTANE<span className="text-cyan">.</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/50">
              High-performance software engineering, infrastructure optimization, and
              observability for teams that run at scale.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">Company</p>
            <ul className="mt-4 space-y-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 transition hover:text-cyan">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {CURRENT_YEAR} Octane Technology. All rights reserved.</p>
          <p>Built for systems that cannot afford to slow down.</p>
        </div>
      </div>
    </footer>
  )
}

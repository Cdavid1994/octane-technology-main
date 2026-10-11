import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Performance', href: '#performance' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-white/70 transition hover:text-white">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-cyan/60 px-4 py-2 text-sm font-medium text-cyan transition hover:bg-cyan hover:text-ink"
          >
            Talk to Engineering
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink px-6 py-4 md:hidden">
          {LINKS.map((link) => (
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
            Talk to Engineering
          </a>
        </div>
      )}
    </header>
  )
}

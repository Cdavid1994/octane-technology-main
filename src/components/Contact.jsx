import { useEffect, useRef, useState } from 'react'

const SPLITFORMS_ENDPOINT = 'https://splitforms.com/api/submit'
const ACCESS_KEY = import.meta.env.VITE_SPLITFORMS_ACCESS_KEY

const INITIAL_FORM = { name: '', email: '', company: '', message: '' }
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [serverError, setServerError] = useState('')
  const loadedAt = useRef(null)
  useEffect(() => {
    loadedAt.current = Date.now()
  }, [])

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Tell us who you are.'
    if (!form.email.trim()) next.email = 'We need an email to reply to.'
    else if (!EMAIL_PATTERN.test(form.email)) next.email = 'That email doesn’t look right.'
    if (!form.message.trim()) next.message = 'Give us a few words about the project.'
    return next
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validation = validate()
    setErrors(validation)
    if (Object.keys(validation).length > 0) return

    if (!ACCESS_KEY) {
      setStatus('error')
      setServerError('Contact form isn’t configured yet (missing Splitforms access key).')
      return
    }

    // Honeypot: if filled, a bot submitted this — pretend success, don't send.
    if (e.target.elements.botcheck.value) {
      setStatus('success')
      return
    }

    setStatus('submitting')
    setServerError('')

    try {
      const res = await fetch(SPLITFORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          from_name: form.name,
          replyto: form.email,
          subject: `New project inquiry from ${form.name}`,
          botcheck: '',
          form_loaded_at: loadedAt.current,
        }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong sending your message.')
      }

      setStatus('success')
      setForm(INITIAL_FORM)
    } catch (err) {
      setStatus('error')
      setServerError(err.message || 'Something went wrong sending your message.')
    }
  }

  if (status === 'success') {
    return (
      <section id="contact" className="relative py-24">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="font-display text-3xl font-semibold text-white">Message sent</h2>
          <p className="mt-3 text-white/60">
            Thanks — we read every message and reply within one business day.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-6 text-sm font-medium text-cyan hover:underline"
          >
            Send another message
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-xl px-6">
        <div className="text-center">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-octane">Contact</h2>
          <p className="font-display mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Tell us about the system you're building
          </p>
          <p className="mt-3 text-white/55">
            A few details now saves a round trip later — we'll come back with real questions, not a sales script.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-5">
          {/* Honeypot — hidden from sighted users and screen readers, bots tend to fill every field */}
          <input
            type="text"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/80">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={update('name')}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className="mt-2 w-full rounded-lg border border-line bg-surface px-4 py-2.5 text-white placeholder:text-white/30 focus:border-cyan focus:outline-none"
              placeholder="Ada Lovelace"
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-sm text-octane">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/80">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={update('email')}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className="mt-2 w-full rounded-lg border border-line bg-surface px-4 py-2.5 text-white placeholder:text-white/30 focus:border-cyan focus:outline-none"
              placeholder="ada@yourcompany.com"
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-sm text-octane">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-white/80">
              Company <span className="text-white/40">(optional)</span>
            </label>
            <input
              id="company"
              type="text"
              value={form.company}
              onChange={update('company')}
              className="mt-2 w-full rounded-lg border border-line bg-surface px-4 py-2.5 text-white placeholder:text-white/30 focus:border-cyan focus:outline-none"
              placeholder="Analytical Engines Inc."
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white/80">
              What are you building?
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={update('message')}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className="mt-2 w-full resize-none rounded-lg border border-line bg-surface px-4 py-2.5 text-white placeholder:text-white/30 focus:border-cyan focus:outline-none"
              placeholder="Current stack, the bottleneck you're hitting, and what 'done' looks like."
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-sm text-octane">
                {errors.message}
              </p>
            )}
          </div>

          <div aria-live="polite">
            {status === 'error' && <p className="text-sm text-octane">{serverError}</p>}
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="glow-octane w-full rounded-full bg-octane px-7 py-3 text-sm font-semibold text-ink transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'submitting' ? 'Sending…' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  )
}

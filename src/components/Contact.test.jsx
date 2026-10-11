import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import Contact from './Contact'

describe('Contact', () => {
  beforeEach(() => {
    vi.spyOn(globalThis, 'fetch').mockImplementation(() => {
      throw new Error('fetch should not be called for an invalid submission')
    })
  })

  it('shows validation errors instead of submitting when required fields are empty', () => {
    render(<Contact />)

    fireEvent.click(screen.getByRole('button', { name: /send message/i }))

    expect(screen.getByText(/tell us who you are/i)).toBeInTheDocument()
    expect(screen.getByText(/we need an email to reply to/i)).toBeInTheDocument()
    expect(screen.getByText(/give us a few words/i)).toBeInTheDocument()
    expect(globalThis.fetch).not.toHaveBeenCalled()
  })

  it('rejects an invalid email before submitting', () => {
    render(<Contact />)

    fireEvent.change(screen.getByLabelText(/^name$/i), { target: { value: 'Ada' } })
    fireEvent.change(screen.getByLabelText(/^email$/i), { target: { value: 'not-an-email' } })
    fireEvent.change(screen.getByLabelText(/what are you building/i), { target: { value: 'A compiler' } })
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))

    expect(screen.getByText(/doesn.t look right/i)).toBeInTheDocument()
    expect(globalThis.fetch).not.toHaveBeenCalled()
  })

  it('has a honeypot field hidden from assistive tech and tab order', () => {
    render(<Contact />)
    const honeypot = document.querySelector('input[name="botcheck"]')
    expect(honeypot).toHaveAttribute('aria-hidden', 'true')
    expect(honeypot).toHaveAttribute('tabindex', '-1')
  })
})

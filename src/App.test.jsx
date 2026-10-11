import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('defaults to English', () => {
    render(<App />)
    expect(screen.getByText(/engineering performance/i)).toBeInTheDocument()
  })

  it('switches every section to Spanish via the language toggle, and back', () => {
    render(<App />)

    const toggle = screen.getAllByRole('button', { name: /switch to spanish/i })[0]
    fireEvent.click(toggle)

    expect(screen.getByText(/rendimiento de ingeniería/i)).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('es')
    expect(localStorage.getItem('octane-lang')).toBe('es')

    const toggleBack = screen.getAllByRole('button', { name: /cambiar a inglés/i })[0]
    fireEvent.click(toggleBack)

    expect(screen.getByText(/engineering performance/i)).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('en')
  })

  it('renders the hero headline', () => {
    render(<App />)
    expect(screen.getByText(/engineering performance/i)).toBeInTheDocument()
  })

  it('renders a section for every navbar anchor link', () => {
    render(<App />)
    const navLinks = screen.getAllByRole('link').map((link) => link.getAttribute('href'))
    const anchors = navLinks.filter((href) => href?.startsWith('#'))

    for (const anchor of anchors) {
      const id = anchor.slice(1)
      expect(document.getElementById(id), `missing element with id="${id}" for link ${anchor}`).not.toBeNull()
    }
  })

  it('renders the footer with the current year', () => {
    render(<App />)
    const year = new Date().getFullYear().toString()
    const footer = document.querySelector('footer')
    expect(footer?.textContent).toContain(year)
  })
})

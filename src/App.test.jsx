import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
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

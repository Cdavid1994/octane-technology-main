import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LanguageProvider } from '../i18n/LanguageContext'
import PrivacyPolicy from './PrivacyPolicy'

describe('PrivacyPolicy', () => {
  it('renders the policy title and every section heading', () => {
    render(
      <LanguageProvider>
        <PrivacyPolicy />
      </LanguageProvider>,
    )

    expect(screen.getByRole('heading', { name: /privacy policy/i, level: 1 })).toBeInTheDocument()
    expect(screen.getByText(/what we collect/i)).toBeInTheDocument()
    expect(screen.getByText(/splitforms/i)).toBeInTheDocument()
  })

  it('links back to the home page', () => {
    render(
      <LanguageProvider>
        <PrivacyPolicy />
      </LanguageProvider>,
    )

    const homeLinks = screen.getAllByRole('link', { name: /back to home|octane/i })
    expect(homeLinks.every((link) => link.getAttribute('href') === '/')).toBe(true)
  })
})

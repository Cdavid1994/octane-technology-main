import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import './index.css'

const isPrivacyPage = window.location.pathname.replace(/\/+$/, '') === '/privacy'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isPrivacyPage ? (
      <LanguageProvider>
        <PrivacyPolicy />
      </LanguageProvider>
    ) : (
      <App />
    )}
  </StrictMode>,
)

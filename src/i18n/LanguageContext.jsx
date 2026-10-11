import { useEffect, useState } from 'react'
import { DEFAULT_LANG, LanguageContext, STORAGE_KEY } from './context'
import { translations } from './translations'

function readStoredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'en' || stored === 'es' ? stored : DEFAULT_LANG
  } catch {
    return DEFAULT_LANG
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readStoredLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // localStorage unavailable (private mode, blocked storage) — language just won't persist
    }
  }, [lang])

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'es' : 'en'))

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

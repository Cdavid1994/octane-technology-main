import { createContext } from 'react'
import { translations } from './translations'

const DEFAULT_LANG = 'en'

export const LanguageContext = createContext({
  lang: DEFAULT_LANG,
  t: translations[DEFAULT_LANG],
  setLang: () => {},
  toggleLang: () => {},
})

export const STORAGE_KEY = 'octane-lang'
export { DEFAULT_LANG }

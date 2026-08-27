import { createContext, createElement, useContext, useMemo } from 'react'
import en from './strings/en'
import ar from './strings/ar'

const LanguageContext = createContext({
  lang: 'en',
  t: (key) => key,
})

function getValue(dictionary, key) {
  return key.split('.').reduce((value, part) => value?.[part], dictionary)
}

export function localePath(lang, path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`
  const isArabicPath = normalized === '/ar' || normalized.startsWith('/ar/')
  const englishPath = isArabicPath ? normalized.slice(3) || '/' : normalized

  if (lang === 'ar') {
    return englishPath === '/' ? '/ar' : `/ar${englishPath}`
  }

  return englishPath
}

export function LanguageProvider({ lang = 'en', children }) {
  const value = useMemo(() => {
    const dictionary = lang === 'ar' ? ar : en
    const t = (key, variables = {}) => {
      const value = getValue(dictionary, key)
      const fallback = getValue(en, key)
      const text = value || fallback || key
      if (typeof text !== 'string') return text
      return Object.entries(variables).reduce(
        (result, [name, replacement]) => result.replaceAll(`{${name}}`, replacement),
        text,
      )
    }

    return { lang, t }
  }, [lang])

  return createElement(LanguageContext.Provider, { value }, children)
}

export function useLang() {
  return useContext(LanguageContext).lang
}

export function useT() {
  return useContext(LanguageContext).t
}

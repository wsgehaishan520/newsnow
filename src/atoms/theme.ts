import { atom } from 'jotai'

const getInitialDarkMode = () => {
  const stored = localStorage.getItem('theme')
  if (stored) return stored === 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const isDarkAtom = atom(
  getInitialDarkMode(),
  (get, set, value: boolean) => {
    localStorage.setItem('theme', value ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', value)
    set(isDarkAtom, value)
  }
)

import { useAtom } from 'jotai'
import { isDarkAtom } from '~/atoms/theme'

export function ThemeToggle() {
  const [isDark, setIsDark] = useAtom(isDarkAtom)

  const handleToggle = () => {
    setIsDark(!isDark)
  }

  return (
    <button
      type="button"
      title={isDark ? 'Light Mode' : 'Dark Mode'}
      className={$('btn transition-all', isDark ? 'i-ph:sun-dim-duotone' : 'i-ph:moon-stars-duotone')}
      onClick={handleToggle}
    />
  )
}

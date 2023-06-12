import { useState, useEffect } from 'react'

type UseThemeReturnType = {
  label: 'Light' | 'Dark'
  xLink: string
  toggleTheme: () => void
}

export const useTheme = (): UseThemeReturnType => {
  const [isDark, setIsDark] = useState(false)
  const label = isDark ? 'Light' : 'Dark'
  const xLink = isDark ? '/icons/sprite.svg#sun' : '/icons/sprite.svg#moon'

  const toggleTheme = () => {
    setIsDark((prev) => !prev)
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return { label, xLink, toggleTheme }
}

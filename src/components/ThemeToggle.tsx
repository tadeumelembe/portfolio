'use client'
import { useEffect, useState } from 'react'

import { Moon, Sun } from './Icons'

type Theme = 'light' | 'dark'

function currentTheme(): Theme {
  const explicit = document.documentElement.dataset.theme
  if (explicit === 'light' || explicit === 'dark') return explicit
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Light/dark switch. Defaults to the system theme; a click saves an explicit choice.
export default function ThemeToggle() {
  // Unknown until mounted: the server can't know the visitor's theme.
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    setTheme(currentTheme())
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onSystemChange = () => setTheme(currentTheme())
    media.addEventListener('change', onSystemChange)
    return () => media.removeEventListener('change', onSystemChange)
  }, [])

  function toggle() {
    const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {}
    setTheme(next)
  }

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      onClick={toggle}
      className="relative inline-flex h-11 w-[3.25rem] shrink-0 items-center justify-center rounded-full"
    >
      {/* 44px tall hit area around a smaller visual track. */}
      <span className="relative flex h-7 w-12 items-center justify-between rounded-full border border-line bg-chip px-1.5 text-muted">
        <Sun />
        <Moon />
        <span
          aria-hidden="true"
          className={`absolute left-0.5 top-0.5 flex h-[1.375rem] w-[1.375rem] items-center justify-center rounded-full bg-surface text-ink shadow-sm transition-transform duration-200 ${
            isDark ? 'translate-x-5' : 'translate-x-0'
          } ${theme === null ? 'opacity-0' : 'opacity-100'}`}
        >
          {isDark ? <Moon /> : <Sun />}
        </span>
      </span>
    </button>
  )
}

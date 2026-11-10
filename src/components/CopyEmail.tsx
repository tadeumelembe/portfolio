'use client'
import { useState } from 'react'

import { userData } from '@/utils/constants'
import { Check } from './Icons'

export default function CopyEmail() {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(userData.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${userData.email}`
    }
  }

  return (
    <button type="button" onClick={copy} className="btn px-3 text-muted hover:text-ink">
      {copied ? <Check /> : null}
      <span aria-live="polite">{copied ? 'Copied!' : userData.email}</span>
      {!copied && <span className="sr-only">(copy email address)</span>}
    </button>
  )
}

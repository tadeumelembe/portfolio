import { ImageResponse } from 'next/og'

import { fullName, userData } from '@/utils/constants'

export const alt = `${fullName} — ${userData.role}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#FAFAF7',
          color: '#111418',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, fontWeight: 700, color: '#0F6B63' }}>
          {userData.role} · {userData.focus}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 112, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>{fullName}</div>
          <div style={{ marginTop: 28, fontSize: 40, color: "#4A5260", maxWidth: 1040 }}>{userData.headline}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 28 }}>
          <div style={{ display: 'flex', color: '#4A5260' }}>tadeu.netlify.app</div>
          <div style={{ display: 'flex', background: '#0F6B63', color: '#FFFFFF', padding: '16px 32px', borderRadius: 999, fontWeight: 700 }}>
            {userData.email}
          </div>
        </div>
      </div>
    ),
    size,
  )
}

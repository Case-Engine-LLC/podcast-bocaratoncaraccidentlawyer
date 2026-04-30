import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#2B56B5',
          color: '#ffffff',
          fontSize: 96,
          fontWeight: 800,
          letterSpacing: '-0.04em',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', lineHeight: 1 }}>G</div>
        <div
          style={{
            display: 'flex',
            fontSize: 14,
            color: '#3A71EA',
            opacity: 0.95,
            fontWeight: 600,
            letterSpacing: '0.18em',
            marginTop: 6,
          }}
        >
          GRIFE LAW
        </div>
      </div>
    ),
    { ...size }
  )
}

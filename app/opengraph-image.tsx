import { ImageResponse } from 'next/og'
import { siteConfig } from './config/site'

export const runtime = 'edge'

export const alt = `${siteConfig.name} - Digital Commerce Consultant & Project Manager`
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Decorative gradient orbs */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '60px',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '60px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Location badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            color: '#94a3b8',
            fontSize: '24px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          {siteConfig.location.city}, {siteConfig.location.country}
        </div>

        {/* Name with gradient */}
        <div
          style={{
            fontSize: '96px',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #60a5fa 0%, #f8fafc 50%, #fb923c 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '24px',
            letterSpacing: '-0.02em',
          }}
        >
          {siteConfig.name}
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '32px',
            color: '#cbd5e1',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <span>Digital Commerce Consultant</span>
          <span style={{ color: '#2563eb' }}>|</span>
          <span>Project Manager</span>
          <span style={{ color: '#2563eb' }}>|</span>
          <span>Builder</span>
        </div>

        {/* Subtle footer */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            color: '#64748b',
            fontSize: '20px',
          }}
        >
          {siteConfig.url.replace('https://', '')}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

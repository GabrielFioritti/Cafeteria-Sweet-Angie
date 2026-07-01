// Logotipo de Sweet Ange reconstruido en SVG (taza + vapor + wordmark).
export default function Logo({ variant = 'full', className = '' }) {
  const mark = (
    <svg viewBox="0 0 120 96" className="logo-mark" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        {/* vapor */}
        <path d="M44 14 c-3 3 3 6 0 9 M60 10 c-3 3 3 6 0 9 M76 14 c-3 3 3 6 0 9" />
        {/* platillo */}
        <path d="M26 74 h68" />
        {/* taza */}
        <path d="M36 40 h48 v14 a24 24 0 0 1 -24 24 h0 a24 24 0 0 1 -24 -24 z" />
        {/* asa */}
        <path d="M84 45 h8 a10 10 0 0 1 0 20 h-6" />
      </g>
    </svg>
  )

  if (variant === 'mark') return <span className={`logo ${className}`}>{mark}</span>

  return (
    <span className={`logo logo-full ${className}`}>
      {mark}
      <span className="logo-word">
        <span className="logo-sweet">Sweet</span>
        <span className="logo-ange">Ange</span>
        <span className="logo-sub">Pastelería · Café</span>
      </span>
    </span>
  )
}

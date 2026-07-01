const words = [
  'Café Illy', 'Alfajores artesanales', 'Sin TACC', 'Mini postres',
  'Hecho con alma', 'Chipá', 'Avocado toast', 'Licuados frescos',
]

export default function Marquee() {
  const row = [...words, ...words]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((w, i) => (
          <span className="marquee__item" key={i}>
            {w}<span className="marquee__dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

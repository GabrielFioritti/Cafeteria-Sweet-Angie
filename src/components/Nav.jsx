import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { business } from '../data.js'

const links = [
  { href: '#menu', label: 'Menú' },
  { href: '#promos', label: 'Promos' },
  { href: '#sobre', label: 'Nosotros' },
  { href: '#visita', label: 'Visitá' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand" aria-label={business.fullName}>
          <Logo variant="mark" />
          <span className="nav__brandname">Sweet Ange</span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            className="nav__cta"
            href={`https://wa.me/${business.phoneRaw}`}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Pedí por WhatsApp
          </a>
        </nav>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

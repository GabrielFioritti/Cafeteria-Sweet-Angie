import { business } from '../data.js'
import Logo from './Logo.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__grain" />
      </div>

      <div className="hero__content reveal">
        <Logo variant="mark" className="hero__logo" />
        <p className="hero__eyebrow">{business.subtitle} · {business.city}</p>
        <h1 className="hero__title">
          Amor a<br /><em>primera mordida.</em>
        </h1>
        <p className="hero__lead">
          Pastelería artesanal, café Illy y momentos dulces en el corazón de Salto.
          Cada bocado, hecho con alma.
        </p>
        <div className="hero__actions">
          <a href="#menu" className="btn btn--primary">Ver el menú</a>
          <a
            href={`https://wa.me/${business.phoneRaw}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost"
          >
            Hacer un pedido
          </a>
        </div>
      </div>

      <a href="#menu" className="hero__scroll" aria-label="Bajar">
        <span />
      </a>
    </section>
  )
}

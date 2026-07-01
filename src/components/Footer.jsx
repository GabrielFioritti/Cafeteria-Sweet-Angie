import Logo from './Logo.jsx'
import { business } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Logo variant="full" />
          <p className="footer__tag">“{business.tagline}”</p>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <h4>Navegá</h4>
            <a href="#menu">Menú</a>
            <a href="#promos">Promociones</a>
            <a href="#sobre">Nosotros</a>
            <a href="#visita">Visitá</a>
          </div>
          <div className="footer__col">
            <h4>Contacto</h4>
            <a href={`https://wa.me/${business.phoneRaw}`} target="_blank" rel="noreferrer">
              WhatsApp {business.phone}
            </a>
            <a href={business.instagramUrl} target="_blank" rel="noreferrer">
              Instagram @{business.instagram}
            </a>
            <span>{business.address}</span>
          </div>
          <div className="footer__col">
            <h4>Horarios</h4>
            {business.hours.map((h) => (
              <span key={h.day}>{h.day}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} {business.fullName} · Salto, Uruguay</span>
        <span>Hecho con ♥ y mucho café</span>
      </div>
    </footer>
  )
}

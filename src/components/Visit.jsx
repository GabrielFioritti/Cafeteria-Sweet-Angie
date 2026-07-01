import { business } from '../data.js'

const mapSrc =
  'https://www.google.com/maps?q=' +
  encodeURIComponent('Misiones 184, Salto, Uruguay') +
  '&output=embed'

export default function Visit() {
  return (
    <section className="section visit" id="visita">
      <div className="section__head reveal">
        <p className="section__kicker">Pasá a saludarnos</p>
        <h2 className="section__title">Visitá el local</h2>
      </div>

      <div className="visit__grid">
        <div className="visit__info reveal">
          <div className="visit__block">
            <h3>Dirección</h3>
            <p>{business.address}</p>
            <a
              className="visit__link"
              href="https://www.google.com/maps/search/?api=1&query=Misiones+184+Salto+Uruguay"
              target="_blank"
              rel="noreferrer"
            >
              Cómo llegar →
            </a>
          </div>

          <div className="visit__block">
            <h3>Horarios</h3>
            <ul className="visit__hours">
              {business.hours.map((h) => (
                <li key={h.day}>
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="visit__block">
            <h3>WiFi para clientes</h3>
            <p className="visit__wifi">
              <span>{business.wifi.network}</span>
              <span>Clave: {business.wifi.password}</span>
            </p>
          </div>

          <div className="visit__actions">
            <a
              className="btn btn--primary"
              href={`https://wa.me/${business.phoneRaw}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp {business.phone}
            </a>
            <a
              className="btn btn--ghost"
              href={business.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              @{business.instagram}
            </a>
          </div>
        </div>

        <div className="visit__map reveal">
          <iframe
            title="Ubicación de Sweet Ange Café"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

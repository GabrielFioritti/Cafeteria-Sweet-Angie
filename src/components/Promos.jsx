import { promos, business } from '../data.js'

export default function Promos() {
  return (
    <section className="section promos" id="promos">
      <div className="section__head reveal">
        <p className="section__kicker section__kicker--light">Para compartir</p>
        <h2 className="section__title">Promociones</h2>
        <p className="section__lead">
          Combos pensados para disfrutar de a dos… o para darte un gusto solo.
        </p>
      </div>

      <div className="promos__grid">
        {promos.map((p, i) => (
          <article
            className={`promo-card reveal ${i === 0 ? 'promo-card--feature' : ''}`}
            key={p.n}
            style={{ '--d': `${(i % 3) * 90}ms` }}
          >
            <div className="promo-card__top">
              <span className="promo-card__n">{p.n}</span>
              <span className="promo-card__price">{p.price}</span>
            </div>
            <h3 className="promo-card__title">{p.title}</h3>
            <ul className="promo-card__items">
              {p.items.map((it) => (
                <li key={it}><span className="promo-card__tick">✦</span>{it}</li>
              ))}
            </ul>
            <a
              className="promo-card__cta"
              href={`https://wa.me/${business.phoneRaw}?text=${encodeURIComponent('Hola Sweet Ange! Quiero la ' + p.n + ' (' + p.title + ')')}`}
              target="_blank"
              rel="noreferrer"
            >
              Pedir esta promo →
            </a>
          </article>
        ))}
      </div>

      <p className="promos__note reveal">
        Línea Arcor disponible · Consultá precios en el local o por WhatsApp.
      </p>
    </section>
  )
}

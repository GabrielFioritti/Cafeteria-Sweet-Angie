import { menu } from '../data.js'

export default function Menu() {
  return (
    <section className="section menu" id="menu">
      <div className="section__head reveal">
        <p className="section__kicker">La carta</p>
        <h2 className="section__title">Todo lo que horneamos<br />para vos</h2>
        <p className="section__lead">
          Del primer café de la mañana a los dulces de la tarde. Precios en pesos uruguayos.
        </p>
      </div>

      <div className="menu__grid">
        {menu.map((cat, i) => (
          <article
            className="menu-card reveal"
            key={cat.id}
            style={{ '--d': `${(i % 3) * 90}ms` }}
          >
            <header className="menu-card__head">
              <span className="menu-card__kicker">{cat.kicker}</span>
              <h3 className="menu-card__title">{cat.title}</h3>
            </header>
            <ul className="menu-card__list">
              {cat.items.map((it) => (
                <li className="menu-item" key={it.name}>
                  <div className="menu-item__row">
                    <span className="menu-item__name">{it.name}</span>
                    <span className="menu-item__dots" aria-hidden="true" />
                    <span className="menu-item__price">{it.price}</span>
                  </div>
                  {it.desc && <p className="menu-item__desc">{it.desc}</p>}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

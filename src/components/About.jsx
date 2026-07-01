const stats = [
  { n: 'Illy', label: 'Café italiano premium' },
  { n: '100%', label: 'Pastelería artesanal' },
  { n: 'Sin TACC', label: 'Opciones para celíacos' },
]

export default function About() {
  return (
    <section className="section about" id="sobre">
      <div className="about__grid">
        <div className="about__text reveal">
          <p className="section__kicker">Nuestra historia</p>
          <h2 className="section__title">Un café con alma,<br />hecho a mano</h2>
          <p className="about__p">
            Sweet Ange nació de una idea simple: que cada visita se sienta como
            volver a casa. Horneamos temprano, elegimos ingredientes de verdad y
            servimos café Illy en tazas que invitan a quedarse.
          </p>
          <p className="about__p">
            Desde nuestros alfajores artesanales hasta las opciones sin TACC,
            todo se prepara con dedicación en Misiones 184, Salto. Porque creemos
            que las cosas ricas, hechas con cariño, se notan.
          </p>
          <div className="about__stats">
            {stats.map((s) => (
              <div className="about__stat" key={s.n}>
                <span className="about__statn">{s.n}</span>
                <span className="about__statl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about__art reveal">
          <div className="about__card about__card--a">
            <span className="about__emoji">🥐</span>
            <p>Recién horneado cada día</p>
          </div>
          <div className="about__card about__card--b">
            <span className="about__emoji">☕</span>
            <p>Café Illy, siempre</p>
          </div>
          <div className="about__card about__card--c">
            <span className="about__emoji">🍰</span>
            <p>Dulces con alma</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Logos() {
  return (
    <section className="logos" aria-labelledby="logos-title">
      <div className="container">
        <p className="logos__eyebrow">Join 4,000+ companies already growing</p>
        <ul className="logos__grid">
          <li>
            <img
              src={'/boltshift.svg'}
              alt="" aria-hidden="true"
            />
            Boltshift
          </li>
          <li>
            <img
              src={'/lightbox.svg'}
              alt="" aria-hidden="true"
            />
            Lightbox
          </li>
          <li>
            <img
              src={'/featherdev.svg'}
              alt="" aria-hidden="true"
            />
            FeatherDev
          </li>
          <li>
            <img
              src={'/spherule.svg'}
              alt="" aria-hidden="true"
            />
            Spherule
          </li>
          <li>
            <img
              src={'/globalbank.svg'}
              alt="" aria-hidden="true"
            />
            GlobalBank
          </li>
          <li>
            <img
              src={'/nietzsche.svg'}
              alt="" aria-hidden="true"
            />
            Nietzsche
          </li>
        </ul>
      </div>
    </section>
  )
}
import CreditCard from "./credit-card.component"

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="header-supertext">Super. Simple. Banking.</p>

          <h1 id="hero-title">
            Banking technology<br />that has your back.
          </h1>

          <p className="header-subtext">
            Simple, transparent banking. No hidden fees and free overdrafts.
          </p>

          <div className="hero__actions">
            <a className="btn btn-white demo" href="#" aria-label="Watch demo">
              <img
                src={'/play-icon.svg'}
                aria-hidden="true"
                width="16" height="16"
                decoding="async"
              />
              Demo
            </a>

            <a className="btn btn-purple signup" href="#">Sign up</a>
          </div>
        </div>

        <div className="hero__art card-container">
          <div className="mock-card-container">
            <CreditCard name={'LANA STEINER'} rotation={90} offset={'center'} />
            <CreditCard name={'OLIVIA RHYE'} rotation={60} offset={'left'} />
            <CreditCard name={'PHOENIX RISING'} rotation={30} offset={'far-left'} />
            <CreditCard name={'DEMI WILKINSON'} rotation={120} offset={'right'} />
            <CreditCard name={'CANDICE WU'} rotation={150} offset={'far-right'} />
          </div>

          <img
            className="card-image-container"
            src={'/full-card-stack.png'}
            alt=""
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
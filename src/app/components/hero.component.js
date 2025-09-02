export default function Hero() {
  return (
   <>
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
            // src="<?php echo esc_url( get_theme_file_uri('assets/img/play-icon.svg') ); ?>"
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
      <img
        // src="<?php echo esc_url( get_theme_file_uri('assets/img/full-card-stack.png') ); ?>"
        alt=""                               
        width="1308" height="464"              
        decoding="async"
        fetchPriority="high"                  
      />
    </div>
  </div>
</section>

   </>
  )
}
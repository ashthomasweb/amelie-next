export default function CTA() {
  return (
    <>
      <section className="cta" role="region" aria-labelledby="cta-title">
        <div className="container cta__card">
          <div className="cta__messaging">
            <div className="cta__copy">
              <h2 id="cta-title">Give us a shot</h2>
              <p>Join over 4,000+ startups already growing with Untitled.</p>
            </div>
            <div className="cta__actions">
              <a className="btn btn-white learn-more" href="#">Learn more</a>
              <a className="btn btn-purple get-started" href="#">Get started</a>
            </div>
          </div>

          <div className="cta__image">
            <img 
            // src="<?php echo esc_url(get_theme_file_uri('assets/img/people.jpg')); ?>" 
            alt="Happy people laughing"
              width="480" height="400" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>
    </>
  )
}
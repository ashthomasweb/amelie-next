export default function Logos() {
  return (
    <>
      <section className="logos" aria-labelledby="logos-title">
        <div className="container">
          <p className="logos__eyebrow">Join 4,000+ companies already growing</p>
          <ul className="logos__grid">
            <li><img
              // src="<?php echo get_template_directory_uri(); ?>/assets/img/boltshift.svg" 
              alt="" aria-hidden="true" />Boltshift</li>
            <li><img
              // src="<?php echo get_template_directory_uri(); ?>/assets/img/lightbox.svg" 
              alt="" aria-hidden="true" />Lightbox</li>
            <li><img
              // src="<?php echo get_template_directory_uri(); ?>/assets/img/featherdev.svg" 
              alt="" aria-hidden="true" />FeatherDev</li>
            <li><img
              // src="<?php echo get_template_directory_uri(); ?>/assets/img/spherule.svg" 
              alt="" aria-hidden="true" />Spherule</li>
            <li><img
              // src="<?php echo get_template_directory_uri(); ?>/assets/img/globalbank.svg" 
              alt="" aria-hidden="true" />GlobalBank</li>
            <li><img
              // src="<?php echo get_template_directory_uri(); ?>/assets/img/nietzsche.svg" 
              alt="" aria-hidden="true" />Nietzsche</li>
          </ul>
        </div>
      </section>

    </>
  )
}
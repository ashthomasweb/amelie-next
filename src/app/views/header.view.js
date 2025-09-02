export default function HeaderView() {
  return (
    <header className="site-header">
      <div className="container nav">
        <div className="nav__left-hand">
          <div className="brand">

            <a className="btn btn-ghost" href="" rel="home">
              <img
                // src="<?php echo esc_url( get_template_directory_uri() . '/assets/img/logo.svg' ); ?>"
                alt="Untitled UI"
                width="28" height="28" decoding="async"
              />
              <span className="brand-fallback">Untitled UI</span>
            </a>
          </div>

          <nav className="primary-nav" aria-label="Main">

          </nav>
        </div>

        <div className="auth">
          <a className="btn btn-ghost log-in" href="#">Log in</a>
          <a className="btn btn-purple sign-up" href="#">Sign up</a>
        </div>

        <button
          className="hamburger-menu"
          type="button"
          aria-label="Open menu"
          aria-controls="primary-menu"
          aria-expanded="false"
        >
          <img
            // src="<?php echo esc_url( get_template_directory_uri() . '/assets/img/hamburger-menu.svg' ); ?>"
            alt="Hamburger menu icon"
            width="24" height="24" decoding="async"
          />
        </button>
      </div>
    </header>
  )
}
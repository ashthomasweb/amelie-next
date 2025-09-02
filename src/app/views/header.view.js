export default function HeaderView() {
  return (
    <header className="site-header">
      <div className="container nav">
        <div className="nav__left-hand">
          <div className="brand">
            <a className="btn btn-ghost" href="" rel="home">
              <img
                src={'/logo.svg'}
                alt="Untitled UI"
                width="28" height="28" decoding="async"
              />
              <span className="brand-fallback">Untitled UI</span>
            </a>
          </div>

          <nav className="primary-nav" aria-label="Main">
            <ul className="menu">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="#">Products
                  <img
                    className="menu-icon"
                    src={'./chevron-down.svg'}
                  />
                </a>
              </li>
              <li>
                <a href="#">Resources
                  <img
                    className="menu-icon"
                    src={'./chevron-down.svg'}
                  />
                </a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
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
            src={'/hamburger-menu.svg'}
            alt="Hamburger menu icon"
            width="24" height="24" decoding="async"
          />
        </button>
      </div>
    </header>
  )
}
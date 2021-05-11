export function NavigationBar() {
  return (
<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item has-text-weight-bold" href="/">
        abetta me
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a href="/dashboard" className="navbar-item">
        Dashboard
      </a>

      <a href="/dashboard" className="navbar-item">
        Help
      </a>

    </div>
  </div>
</nav>
  );
}

export default NavigationBar;
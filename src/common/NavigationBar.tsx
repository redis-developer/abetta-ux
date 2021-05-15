export function NavigationBar() {
  return (
<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item has-text-weight-bold" href="/dashboard">
        abetta me
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">

      <a href="/about" className="navbar-item">
        about
      </a>

    </div>
  </div>
</nav>
  );
}

export default NavigationBar;
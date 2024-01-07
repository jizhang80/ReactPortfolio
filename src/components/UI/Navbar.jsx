// for navbar, accept navbar links as props

export default function Navbar({ links }) {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbars1" aria-controls="navbars1" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-lg-flex justify-content-between" id="navbars1">
            <a className="navbar-brand me-0" href="/"><img src="/programmer-icon-32.png" /> Jimmy Z</a>
            <ul className="navbar-nav justify-content-lg-center">
              {links.map((link) => <li key={link.key} className="nav-item">{link}</li>)}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
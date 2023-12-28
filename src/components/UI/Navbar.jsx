export default function Navbar({ links }) {
    return (
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-lg-flex">
            <a class="navbar-brand col-lg-3 me-0" href="#"><img src="./src/assets/programmer-icon-96.png" /> Jimmy Z</a>
            <ul className="navbar-nav col-lo-6 justify-content-lg-center">
              {links.map((link) => <li className="nav-item">{link}</li>)}
            </ul>
            <div className="d-lg-flx col-lg-3 justify-content-lg-end"></div>
          </div>
        </div>
      </nav>
    );
  }
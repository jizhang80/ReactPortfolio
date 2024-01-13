
export default function Footer() {
    return (
        <footer className="footer bg-secondary mt-auto">
            <div className="d-flex flex-wrap justify-content-between align-items-center mx-2 py-2">
                <div className="col-md-4 d-flex align-items-center gap-2 m-2">
                    <img src="/programmer-icon-32.png" type="image/png" />
                    <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Jimmy Z.</span>
                </div>
                <div className="header-social-links d-lg-flex col-lg-3 gap-1 justify-content-lg-end">
                  <button type="button" className="btn btn-secondary"><i className="bi bi-twitter"></i></button>
                  <button type="button" className="btn btn-secondary"><i className="bi bi-facebook"></i></button>
                  <button type="button" className="btn btn-secondary"><i className="bi bi-instagram"></i></button>
                  <button type="button" className="btn btn-secondary"><i className="bi bi-linkedin"></i></button>
                </div>
            </div>
        </footer>
    );
}
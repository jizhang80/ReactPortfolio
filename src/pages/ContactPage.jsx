import Form from "../components/Form"

export default function ContactPage() {
    return (
      <div>
        {/*contact title*/}
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Contact Me</h1>
            <p className="col-md-8 fs-4">Please contact me.</p>
          </div>
        </div>
        {/*contact info*/}
        <div className="row align-items-md-stretch">
          <div className="col-md-3 m-5">
            <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>

              </div>
          </div>
          <div className="col-md-7">
            <Form />
          </div>
        </div>
        
      </div>
    );
  }
  
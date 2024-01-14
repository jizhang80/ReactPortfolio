import Form from "../components/Form"
 import PageHeader from "../components/UI/PageHeader";

export default function ContactPage() {
    return (
      <div>
        {/*contact title*/}
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid py-5">
            <PageHeader text={"Contact Me"} />
            <p className="col-md-8 fs-4">
            Greetings! If you have technical inquiries, 
            project ideas, or just want to discuss all things tech, 
            I'm here to chat. Feel free to reach out using the options below.
            </p>
          </div>
        </div>
        {/*contact info*/}
        <div className="row align-items-md-stretch">
          <div className="col-md-3 m-5">
            <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>6 Jackson Street, Ottawa, ON, CA</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 613-000-00000</p>
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
  
import contact from "../assets/contact.png";

function ContactMe() {
  return (
    <section id="contactme" className="pt-5 pb-5 bg-light">
      <div className="container mt-5">
        <h2>Contact Me</h2>
        <div className="row align-items-center">
          <div className="col pt-2 text-start">
            <p>
              <i className="bi bi-envelope-fill me-2"></i> Email:
              elvina.amadea@gmail.com
            </p>
            <p>
              <i className="bi bi-phone-fill me-2"></i> Phone Number (WhatsApp):
              +62 897-5577-117
            </p>
            <p>
              <i className="bi bi-linkedin me-2"></i> LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/elvina-amadea-tanaka-71104b26a/">
                Elvina Amadea Tanaka
              </a>
            </p>
            <p>
              <i className="bi bi-geo-alt-fill me-2"></i> Based in: Solo,
              Indonesia (GMT+7)
            </p>
          </div>

          <div className="col text-start justify-content-center">
            <img
              className="img-fluid mx-auto d-block"
              src={contact}
              style={{ maxWidth: "50%" }}
            />
            <p>
              Feel free to message me through any of the contact information
              given!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;

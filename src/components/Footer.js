const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <img src="images/footer_logo.png" alt="image" />
        </div>
        <div className="footer-section">
          <h3>Postal address</h3>
          <p>
            P.O.Box8000 <br />
            FI-90014 University of Oulu <br />
            university.of.oulu(at)oulu.fi <br />
            Tel.+358 294 48 0000
          </p>
        </div>
        <div className="footer-section">
          <h3>Street address</h3>
          <p>
            Pentti Kaiteran katu 1 <br />
            Linnanmaa
          </p>
          <p>
            Staff e-mail addresses are <br />
            typically in the <br />
            <span className="underline">firstname.lastname@oulu.fi</span> <br />
            format.
          </p>
        </div>
        <div className="footer-section">
          <div className="links_wrapper">
            <a href="#">
              <span> Accessibility statement</span>
            </a>
            <a href="#">
              <span> Data privacy notice</span>
            </a>
            <a href="#">
              <span>Campuses</span>{" "}
            </a>
            <a href="#">
              <span> City of Oulu</span>
            </a>
          </div>
        </div>
      </div>
      <div className="social-media-icons">
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="#">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

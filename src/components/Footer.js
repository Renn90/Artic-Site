import "./Footer.css";

const Footer = () => {
  return (
    <section className="ft-section" id="footer">
      <div className="footer">
        <div className="news-letter">
          <h2>Suscribe to our Newsletter</h2>
          <div className="form-field">
            <input type="email" placeholder="Input your Email address" />
            <button>Submit</button>
          </div>
        </div>
        <div className="footer-links">
          <div className="logo-sec">
            <img src="./images/artic.png" className="logo-img-footer" alt="/"/>
            <h4>Making Merories</h4>
          </div>
          <div>
            <h4>
              <a href="#">WEEKLY BLOG</a>
            </h4>
            <h4>
              <a href="#">PRE-SALE FAQS</a>
            </h4>
            <h4>
              <a href="#">SUBMIT A TICKET</a>
            </h4>
          </div>
          <div>
            <h4>
              <a href="#">SERVICES</a>
            </h4>
            <h4>
              <a href="#">THEME TWEAK</a>
            </h4>
          </div>
          <div>
            <h4>
              <a href="#">SUPPORT</a>
            </h4>
            <h4>
              <a href="#">ADVERTISE</a>
            </h4>
            <h4>
              <a href="#">MAKE RESERVATIONS</a>
            </h4>
          </div>
          <div>
            <h4>
              <a href="#">ABOUT US</a>
            </h4>
            <h4>
              <a href="#">CONTACT US</a>
            </h4>
            <h4>
              <a href="#">AFFILIATES</a>
            </h4>
            <h4>
              <a href="#">RESOURCES</a>
            </h4>
          </div>
        </div>
      </div>
      <hr />

      <div className="social-media">
        <div className="icons">
          <i className="fa fa-square-facebook"></i>
          <i className="fa fa-twitter-square"></i>
          <i className="fa fa-wifi"></i>
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </div>
        <h4>&#169; Copyright All rights reserved</h4>
      </div>
      <div></div>
    </section>
  );
};

export default Footer;

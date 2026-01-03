import React from "react";
import "../styles/ContactSection.css";

const JKCContactSection: React.FC = () => {
  return (
    <section className="footer-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <p className="footer-top-head text-center">
              Contact <span>JKC</span>
            </p>

            <div className="row">
              {/* Email Box */}
              <div className="col-sm-6">
                <div className="contact-box email-box">
                  <h5>📧 Email Us</h5>
                  <ul>
                    <li>
                      <a href="mailto:penielchurchbangalore@pgf.com">
                        <i className="far fa-envelope"></i> penielchurchbangalore@pgf.com
                      </a>
                    </li>
                    <li>
                      <a href="mailto:cpenielchurchbangalore2@jpgf.com">
                        <i className="far fa-envelope"></i> cpenielchurchbangalore2@jpgf.com
                      </a>
                    </li>
                    <li>
                      <a href="mailto:penielchurchbangalore@peniel.com">
                        <i className="far fa-envelope"></i> penielchurchbangalore@peniel.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Phone Box */}
              <div className="col-sm-6">
                <div className="contact-box phone-box">
                  <h5>📞 Call Us</h5>
                  <ul>
                    <li>
                      <i className="fas fa-mobile-alt"></i> Grey Cement:{" "}
                      <a href="tel:18002664606">1800 266 4606</a>
                    </li>
                    <li>
                      <i className="fas fa-mobile-alt"></i> Putty:{" "}
                      <a href="tel:18001028868">1800 102 8868</a>
                    </li>
                    <li>
                      <i className="fas fa-mobile-alt"></i> Paints:{" "}
                      <a href="tel:18002034555">1800 203 4555</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Address Box */}
            <div className="row mt-4">
              <div className="col-sm-12">
                <div className="contact-box address-box">
                  <h5>📍 Main Church Address</h5>
                  <p>
                    Peniel Church, JKC Campus <br />
                    123 Church Road, Bangalore - 560001 <br />
                    Karnataka, India
                  </p>
                </div>
              </div>
            </div>

            {/* Sub-Branches */}
            <div className="row mt-4">
              <div className="col-sm-12">
                <div className="contact-box branch-box">
                  <h5>🏠 Our Branches</h5>
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt"></i> JKC Branch - Whitefield,
                      Bangalore
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i> JKC Branch - Hebbal,
                      Bangalore
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i> JKC Branch - Hosur,
                      Tamil Nadu
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default JKCContactSection;
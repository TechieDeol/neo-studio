import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "../Footer/Footer.css";

function Footer() {
  return (
    <>
      <div className="section footer-section">
        <div className="container">
          <div className="footer-container">
            <div className="footer-links-container">
              <div className="sign-up-wrapper">
                <div className="sign-up-box">
                  <div className="sign-up-text-wrapper">
                    <div className="font-size-14 uppercase subscribe-text">
                      Subscribe to our mailing list. <br />
                    </div>
                  </div>
                  <div className="subscribe-form-block">
                    <form
                      name="subscriptionForm"
                      aria-label="Subscription Form"
                      method="get"
                    >
                      <div className="form-wrapper">
                        <input
                          className="subscribe-field"
                          name="subscriptionEmail"
                          type="email"
                          maxLength="256"
                          required
                          placeholder="Your email"
                        />
                        <input
                          className="subscription-button"
                          type="submit"
                          defaultValue="Go"
                        />
                      </div>
                    </form>
                    <div
                      className="success-message"
                      aria-label="Subscription Form success"
                      role="region"
                      tabIndex="-1"
                    >
                      <div className="text-medium">
                        Thank you for subscribing!
                      </div>
                    </div>
                    <div
                      className="error-message"
                      aria-label="Subscription Form failure"
                      role="region"
                      tabIndex="-1"
                    >
                      <div className="text-small">
                        Oops! Something went wrong while submitting the form.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="_12-column-grid">
                <div className="footer-column-wrapper">
                  <a
                    className="footer-contact-link mb-16"
                    href="https://www.google.com/maps/place/Prague,+Czechia/@50.0597507,14.3832244,12z/data=!3m1!4b1!4m6!3m5!1s0x470b939c0970798b:0x400af0f66164090!8m2!3d50.0755381!4d14.4378005!16zL20vMDV5d2c?entry=ttu"
                    target="_blank"
                  >
                    NEO STUDIO
                    <br style={{ boxSizing: "border-box" }} />
                    MANCHESTER, UK
                    <br style={{ boxSizing: "border-box" }} />
                  </a>
                  <a className="footer-contact-link" href="tel:+420123456789">
                    0800 441 4444
                  </a>
                  <a
                    className="footer-contact-link mb-16"
                    href="mailto:info@example.com"
                  >
                    hello@neo-studio.co.uk
                  </a>
                  <div className="social-wrapper">
                    <a
                      className="social-link"
                      href="https://www.linkedin.com/"
                      target="_blank"
                    >
                      <img
                        className="social-icon"
                        alt="LinkedIn icon"
                        src="https://cdn.prod.website-files.com/65ce4aafaf8532dca05604dc/65ce4ab0af8532dca05605c4_Social-LinkedIn.svg"
                      />
                    </a>
                    <a
                      className="social-link"
                      href="https://www.instagram.com/"
                      target="_blank"
                    >
                      <img
                        className="social-icon"
                        alt="Instagram icon"
                        src="https://cdn.prod.website-files.com/65ce4aafaf8532dca05604dc/65ce4ab0af8532dca05605c5_Social-Instagram.svg"
                      />
                    </a>
                    <a
                      className="social-link"
                      href="https://twitter.com/"
                      target="_blank"
                    >
                      <img
                        className="social-icon"
                        alt="Twitter icon"
                        src="https://cdn.prod.website-files.com/65ce4aafaf8532dca05604dc/65ce4ab0af8532dca05605c1_Social-Twitter.svg"
                      />
                    </a>
                    <a
                      className="social-link"
                      href="https://www.youtube.com/"
                      target="_blank"
                    >
                      <img
                        className="social-icon"
                        alt="YouTube icon"
                        src="https://cdn.prod.website-files.com/65ce4aafaf8532dca05604dc/65ce4ab0af8532dca05605c3_Social-Youtube.svg"
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="footer-column-wrapper"
                  style={{
                    gridArea: "1 / 12 / 2 / 13",
                  }}
                >
                  <div className="text-small bold mb-16 text-align-left">
                    PAGES
                  </div>
                  <a
                    className="footer-link"
                    aria-current="page"
                    href="https://www.neo-studio.co.uk/"
                  >
                    Home
                  </a>
                  <a
                    className="footer-link"
                    href="https://www.neo-studio.co.uk/work"
                  >
                    Work
                  </a>
                  <a
                    className="footer-link"
                    href="https://www.neo-studio.co.uk/news-copy"
                  >
                    News
                  </a>
                  <a className="footer-link">About</a>
                  <a
                    className="footer-link mb-16"
                    href="https://www.neo-studio.co.uk/contact"
                  >
                    Contact
                  </a>
                  <a
                    className="footer-link"
                    href="https://www.neo-studio.co.uk/terms-conditions"
                  />
                  <a
                    className="footer-link"
                    href="https://www.neo-studio.co.uk/privacy-policy"
                  />
                  <a
                    className="footer-link"
                    href="https://espace-template.webflow.io/401"
                  />
                  <a
                    className="footer-link"
                    href="https://espace-template.webflow.io/404"
                  />
                </div>
                <div
                  id="w-node-_08260f79-f788-2642-9d5b-b3298aa82dde-8aa82d9c"
                  className="footer-column-wrapper"
                  style={{
                    gridArea: "1 / 11 / 2 / 13",
                  }}
                >
                  <a
                    className="footer-link"
                    href="https://www.neo-studio.co.uk/template-info/styleguide"
                  />
                  <a
                    className="footer-link"
                    href="https://www.neo-studio.co.uk/template-info/licenses"
                  />
                  <a
                    className="footer-link"
                    href="https://www.neo-studio.co.uk/template-info/changelog"
                  />
                </div>
              </div>
            </div>
            <div className="content-wrapper">
              <div className="text-small">
                © All rights reserved NEO STUDIO 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-image-wrapper" />
        <div className="hero-content-wrapper">
          <div className="container">
            <div className="_12-column-grid gap-1-rem">
              <div className="cta-wrapper">
                <div className="animated-transparent-button">
                  <a
                    className="transparent-button-wrapper"
                    href="https://www.neo-studio.co.uk/work"
                  >
                    <div className="transparent-button-text">Our work</div>
                    <div className="arrow-wrapper">
                      <img
                        className="transparent-button-arrow-hover"
                        alt="Arrow"
                        src="https://cdn.prod.website-files.com/65ce4aafaf8532dca05604dc/6604b0bf5adbc337f3f84266_whitearrow@2x.png"
                      />
                      <img
                        className="transparent-button-arrow"
                        alt="Arrow"
                        src="https://cdn.prod.website-files.com/65ce4aafaf8532dca05604dc/6604b0bf601b171d1e63a415_Asset 10@2x.png"
                      />
                    </div>
                    <div className="transparent-button-background" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="content-wrapper">
            <p
              className="text-huge"
              style={{
                gridArea: "span 1 / span 1 / span 1 / span 1",
              }}
            >
              neo studio ARCHITECTURe
              <sub>
                X<br style={{ boxSizing: "border-box" }} />‍
              </sub>
              DESIGN.
            </p>
            <div className="animated-button">
              <a
                className="button-wrapper"
                href="https://www.neo-studio.co.uk/about"
              >
                <div className="button-text">About us</div>
                <div className="arrow-wrapper">
                  <img
                    className="button-arrow-hover"
                    src="https://cdn.prod.website-files.com/65ce4aafaf8532dca05604dc/6604b0bf5adbc337f3f84266_whitearrow@2x.png"
                  />
                  <img
                    className="button-arrow"
                    alt="Arrow"
                    src="https://cdn.prod.website-files.com/65ce4aafaf8532dca05604dc/6604b0bf601b171d1e63a415_Asset 10@2x.png"
                  />
                </div>
                <div className="button-background" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;

import React from "react";
import "./HomePage.css";
import arrowMagenta from "../../assets/images/arrow-magenta.png";
import arrowWhite from "../../assets/images/arrow-white.png";

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
              <a className="button-wrapper" href="/about">
                <div className="button-text">About us</div>
                <div className="arrow-wrapper">
                  <img className="button-arrow-hover" src={arrowWhite} />
                  <img
                    className="button-arrow"
                    alt="Arrow"
                    src={arrowMagenta}
                  />
                </div>
                <div className="button-background" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section featured-section">
        <div>
          <div role="list" className="work-list">
            <div
              className="collection-item"
              role="listitem"
            >
              <a
                className="featured-work-container"
                href="https://www.neo-studio.co.uk/work/stroma-glass-set"
              >
                <div
                  className="featured-work-image-wrapper"
                  style={{
                    boxSizing: "border-box",
                    overflow: "hidden",
                    width: "100%",
                    height: "100vh",
                    minHeight: "100vh",
                    position: "relative",
                    gridArea: "1 / 1 / 3 / 13",
                    willChange: "transform",
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(0.925939, 0.925939, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <p
                    className="work-name"
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "10px",
                      fontSize: "1rem",
                      fontWeight: 400,
                      display: "none",
                    }}
                  >
                    STROMA GLASS SET{" "}
                  </p>
                  <img
                    className="featured-work-image"
                    alt="STROMA GLASS SET "
                    src="https://cdn.prod.website-files.com/65ce4ab0af8532dca056058f/666dd871e560199df28badfc_Image7-enhanced.png"
                    style={{
                      boxSizing: "border-box",
                      border: "0px",
                      verticalAlign: "middle",
                      maxWidth: "100%",
                      display: "inline-block",
                      overflow: "hidden",
                      aspectRatio: "3 / 2",
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;

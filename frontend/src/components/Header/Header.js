import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import Logo from '../../assets/images/logo.png';
import zIndex from '@mui/material/styles/zIndex';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'About', 'Services', 'Contact'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
    <section
        className="section hero-section"
        style={{
          boxSizing: "border-box",
          color: "white",
          backgroundColor: "transparent",
          width: "100%",
          minHeight: "16px",
          paddingBottom: "12rem",
          paddingLeft: "0px",
          position: "relative",
          alignItems: "flex-start",
          height: "100svh",
          paddingTop: "0px",
          display: "flex",
        }}
      >
      <div style={{zIndex : 11}}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src={Logo} alt="Neo Studio Logo" style={{ height: '40px' }} /> {/* Replace with your logo */}
            </Typography>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              Menu
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="top"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </div>
        <div
          className="hero-image-wrapper"
          style={{
            boxSizing: "border-box",
            inset: "0%",
            overflow: "hidden",
            width: "100%",
            height: "100svh",
            position: "absolute",
            backgroundPosition: "0px 0px, 50% center",
            backgroundImage:
              'linear-gradient(transparent, transparent), url("https://cdn.prod.website-files.com/65ce4aafaf8532dca05604dc/666ddb32174b035140efb825_Image1_000-enhanced.png")',
            backgroundRepeat: "repeat, repeat",
            backgroundSize: "auto, cover",
          }}
        />
        <div
          className="hero-content-wrapper"
          style={{
            boxSizing: "border-box",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
            height: "100svh",
            paddingBottom: "3rem",
            display: "flex",
          }}
        >
          <div
            className="container"
            style={{
              boxSizing: "border-box",
              flexDirection: "column",
              width: "100%",
              minHeight: "16px",
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: "3rem",
              paddingRight: "3rem",
              display: "flex",
              position: "relative",
            }}
          >
            <div
              className="_12-column-grid gap-1-rem"
              style={{
                boxSizing: "border-box",
                gridTemplateRows: "auto",
                gridTemplateColumns:
                  "minmax(16px, 1fr) minmax(16px, 1fr) minmax(16px, 1fr) minmax(16px, 1fr) minmax(16px, 1fr) minmax(16px, 1fr) minmax(16px, 1fr) minmax(16px, 1fr) minmax(16px, 1fr) minmax(16px, 1fr) minmax(16px, 1fr) minmax(16px, 1fr)",
                gridAutoColumns: "1fr",
                alignContent: "end",
                width: "100%",
                display: "grid",
                position: "relative",
                gap: "1rem",
                alignItems: "start",
              }}
            >
              <div
                id="w-node-_237fd272-359c-9856-aed4-993c9a3773e5-a056058c"
                className="cta-wrapper"
                style={{
                  boxSizing: "border-box",
                  gap: "1rem",
                  justifyContent: "flex-end",
                  display: "flex",
                  gridArea: "2 / 7 / 3 / 12",
                  transform:
                    "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  opacity: 1,
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="animated-transparent-button"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    columnGap: "4rem",
                    justifyContent: "flex-start",
                    alignSelf: "flex-start",
                    alignItems: "center",
                    display: "inline-block",
                  }}
                >
                  <a
                    className="transparent-button-wrapper w-inline-block"
                    href="https://www.neo-studio.co.uk/work"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                      fontWeight: 400,
                      maxWidth: "100%",
                      border: "2px solid white",
                      borderRadius: "20px",
                      padding: "1.25rem 2rem",
                      overflow: "hidden",
                      columnGap: "4rem",
                      color: "#070707",
                      display: "flex",
                      position: "relative",
                      borderColor: "rgb(255, 255, 255)",
                    }}
                  >
                    <div
                      className="transparent-button-text"
                      style={{
                        boxSizing: "border-box",
                        zIndex: 1,
                        fontSize: "2rem",
                        fontWeight: 500,
                        position: "relative",
                        color: "rgb(255, 255, 255)",
                      }}
                    >
                      Our work
                    </div>
                    <div
                      className="arrow-wrapper"
                      style={{
                        boxSizing: "border-box",
                        justifyContent: "center",
                        alignSelf: "flex-end",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <img
                        className="transparent-button-arrow-hover"
                        src="https://cdn.prod.website-files.com/65ce4aafaf8532dca05604dc/6604b0bf5adbc337f3f84266_whitearrow@2x.png"
                        style={{
                          boxSizing: "border-box",
                          border: "0px",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          zIndex: 10,
                          width: "40px",
                          height: "40px",
                          position: "absolute",
                          display: "none",
                        }}
                      />
                      <img
                        className="transparent-button-arrow"
                        alt="Arrow"
                        src="https://cdn.prod.website-files.com/65ce4aafaf8532dca05604dc/6604b0bf601b171d1e63a415_Asset 10@2x.png"
                        style={{
                          boxSizing: "border-box",
                          border: "0px",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          display: "inline-block",
                          color: "black",
                          width: "40px",
                          height: "40px",
                        }}
                      />
                    </div>
                    <div
                      className="transparent-button-background"
                      style={{
                        boxSizing: "border-box",
                        inset: "0%",
                        zIndex: 0,
                        backgroundColor: "magenta",
                        minHeight: "100%",
                        position: "absolute",
                        width: "0%",
                        height: "80%",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;

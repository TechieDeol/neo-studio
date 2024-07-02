import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Logo from "../../assets/images/logo.png";
import "../../components/Header/Header.css";
import { useTheme } from "@mui/material/styles";
import arrowMagenta from "../../assets/images/arrow-magenta.png";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="navbar-drawer"
    >
      <List>
        {["Work", "News", "About", "Contact"].map((text) => (
          <React.Fragment key={text}>
            <div class="divider-menu"></div>
            <a
              key={text}
              className="nav-link-container"
              href={`#${text.toLowerCase()}`}
            >
              <div className="nav-link">{text}</div>
              <img className="nav-arrow" alt="Arrow" src={arrowMagenta} />
            </a>
          </React.Fragment>
        ))}
        <div class="divider-menu"></div>
      </List>
    </div>
  );

  return (
    <>
      <div className="navbar-transparent">
        <AppBar
          position="static"
          elevation={0}
          style={{ backgroundColor: "transparent" }}
        >
          <Toolbar className="nav-container">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img className="navbar-logo" src={Logo} alt="Neo Studio Logo" />
            </Typography>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              className="menu-text"
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <div className="menu-button-grid">
                <div className="menu-text">Menu</div>
                <div className="menu-icon"></div>
              </div>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="top"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: theme.palette.primary.main,
            },
          }}
        >
          <AppBar
            position="static"
            elevation={0}
            style={{ backgroundColor: theme.palette.primary.main }}
          >
            <Toolbar className="nav-container">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img
                  className="navbar-logo-open"
                  src={Logo}
                  alt="Neo Studio Logo"
                />
              </Typography>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="close"
                onClick={toggleDrawer(false)}
                className="menu-text"
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <div className="menu-button-grid">
                  <div className="menu-text-close">Close</div>
                  <div className="menu-icon-close"></div>
                </div>
              </IconButton>
            </Toolbar>
          </AppBar>
          {list()}
        </Drawer>
      </div>
    </>
  );
}

export default Header;

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import styles from "./HeaderStyling.module.css";
import Grid from "@material-ui/core/Grid";
import logOff from "./../header/logOff.png";

const Header = (props) => {
  return (
    <AppBar className={styles.header} position="static">
      <Toolbar>
        <Grid container spacing={3}>
          <Grid item className={styles.gridItemUsername} sm={4} xs={12}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Typography>
                <span role="img" style={{ flexShrink: 1, margin: "5px" }}>
                  📺
                </span>
                <span role="img" style={{ flexShrink: 1, margin: "5px" }}>
                  Movie List
                </span>
                <span role="img" style={{ flexShrink: 1, margin: "5px" }}>
                  🍿
                </span>
                {props.user && (
                  <span className={styles.userName}>
                    User: {props.user.userName}
                  </span>
                )}
              </Typography>
            </IconButton>
          </Grid>
          {props.user && (
            <Grid
              item
              className={styles.gridActions}
              sm={2}
              xs={12}
              style={{
                display: "flex",
                alignItems: "flex-end",
                position: "relative",
                marginLeft: "800px",
              }}
            >
              <div
                style={{
                  width: "5%",
                  flexShrink: "1",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
              >
                <IconButton color="inherit">
                  <Link to="/Settings">
                    <SettingsIcon />
                  </Link>
                </IconButton>
              </div>
              <div
                style={{
                  width: "5%",
                  marginLeft: "20px",
                  marginRight: "20px",
                  flexShrink: "1",
                }}
              >
                <IconButton color="inherit">
                  <Link to="/FavoriteMovies">
                    <FavoriteIcon style={{ color: "red" }} />
                  </Link>
                </IconButton>
              </div>
              <div
                style={{
                  width: "5%",
                  marginLeft: "20px",
                  marginRight: "20px",
                  flexShrink: "1",
                }}
              >
                <IconButton>
                  <Link to="/">
                    <HomeIcon style={{ color: "white" }} />
                  </Link>
                </IconButton>
              </div>
              <div
                style={{
                  width: "5%",
                  marginLeft: "20px",
                  marginRight: "20px",
                  marginBottom: "6px",
                  flexShrink: "1",
                }}
              >
                <Button onClick={props.onLogout} color="inherit">
                  <img
                    src={logOff}
                    alt="logOff"
                    style={{ width: "60%", height: "auto" }}
                  />
                </Button>
              </div>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Header;

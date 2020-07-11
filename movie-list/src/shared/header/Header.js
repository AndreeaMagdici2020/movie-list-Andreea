import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Header = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography style={{ flexGrow: 1 }} variant="h6">
          📺 Movie List 🍿
        </Typography>

        {props.user && <span>{props.user.userName}</span>}
        {props.user && (
          <span>
            <IconButton color="inherit">
              <Link to="/Settings">
                <SettingsIcon />
              </Link>
            </IconButton>
            <IconButton color="inherit">
              <Link to="/FavoriteMovies">
                <FavoriteIcon />
              </Link>
            </IconButton>
            <IconButton>
              <Link to="/">
                <HomeIcon color="default" />
              </Link>
            </IconButton>

            <Button onClick={props.onLogout} color="inherit">
              Logout
            </Button>
          </span>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Header;

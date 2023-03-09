import React from "react";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./Navigation.module.css";

import Logo from "../assets/logo.svg";
import Avatar from "../assets/image-avatar.png";
import Login from "../assets/login-image.png";

import HomePageIcon from "../assets/icon-nav-home.svg";
import MoviesIcon from "../assets/icon-nav-movies.svg";
import TvSeriesIcon from "../assets/icon-nav-tv-series.svg";
import BookmarksIcon from "../assets/icon-nav-bookmark.svg";

const Navigation = () => {
  const user = useSelector((state) => state.auth.uid);

  const auth = getAuth();

  const handleLogOut = () => {
    auth.signOut(auth).then(() => console.log("User Logged out"));
  };

  return (
    <header>
      <nav className={classes.navigation}>
        <div>
          <Link to="/">
            <img className={classes.logo} src={Logo} alt="logo" />
          </Link>
        </div>
        <ul className={classes["nav-links"]}>
          <li>
            <Link to="/">
              <img
                alt="homepage"
                className={classes["navlink-img"]}
                src={HomePageIcon}
              />
            </Link>
          </li>
          <li>
            <Link to="/movies">
              <img
                alt="movies"
                className={classes["navlink-img"]}
                src={MoviesIcon}
              />
            </Link>
          </li>
          <li>
            <Link to="/tvseries">
              <img
                alt="tv series"
                className={classes["navlink-img"]}
                src={TvSeriesIcon}
              />
            </Link>
          </li>
          <li>
            <Link to="/bookmarks">
              <img
                alt="bookmarks"
                className={classes["navlink-img"]}
                src={BookmarksIcon}
              />
            </Link>
          </li>
        </ul>
        {user && (
          <div className={classes.user}>
            <img alt="user avatar" className={classes.avatar} src={Avatar} />
            <Link onClick={handleLogOut} to="/">
              Log Out
            </Link>
          </div>
        )}
        {!user && (
          <Link to="/login">
            <img className={classes.login} src={Login} alt="login" />
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navigation;

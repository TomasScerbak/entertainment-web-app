import React from "react";
import { Link } from "react-router-dom";
import app from "../base";

import classes from "./Navigation.module.css";

import Logo from "../assets/logo.svg";
import Avatar from "../assets/image-avatar.png";
import HomePageIcon from "../assets/icon-nav-home.svg";
import MoviesIcon from "../assets/icon-nav-movies.svg";
import TvSeriesIcon from "../assets/icon-nav-tv-series.svg";
import BookmarksIcon from "../assets/icon-nav-bookmark.svg";

const Navigation = () => {
  return (
    <header>
      <nav className={classes.navigation}>
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <ul className={classes["nav-links"]}>
          <li>
            <Link to="/">
              <img className={classes["navlink-img"]} src={HomePageIcon} />
            </Link>
          </li>
          <li>
            <Link to="/movies">
              <img className={classes["navlink-img"]} src={MoviesIcon} />
            </Link>
          </li>
          <li>
            <Link to="/tvseries">
              <img className={classes["navlink-img"]} src={TvSeriesIcon} />
            </Link>
          </li>
          <li>
            <Link to="/bookmarks">
              <img className={classes["navlink-img"]} src={BookmarksIcon} />
            </Link>
          </li>
        </ul>
        <div className={classes.user}>
          <img className={classes.avatar} src={Avatar} />
          <button onClick={() => app.auth().signOut()}>Sign Out</button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;

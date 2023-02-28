import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/movies">movies</Link>
          </li>
          <li>
            <Link to="/tvseries">tvseries</Link>
          </li>
          <li>
            <Link to="/bookmarks">bookmarks</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

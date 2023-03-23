import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveTrendMovies } from "../../store/trendMoviesSlice";

import classes from "./SearchBar.module.css";

import SearchIcon from "../../assets/icon-search.svg";

const SearchBar = (props) => {
  const dispatch = useDispatch();
  const trendMovies = useSelector((state) => state.trendMovies.trendMovies);
  const [searchInput, setSearchInput] = useState("");
  const movies = props.movies;

  const searchInputHandler = (e) => {
    e.preventDefault();

    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (searchInput) {
      const interval = setTimeout(() => {
        const result = movies.filter(({ title, name }) =>
          (title ?? name).toLowerCase().match(searchInput.toLowerCase())
        );
        if (!result) {
          return movies;
        } else {
          dispatch(saveTrendMovies(result));
        }
      }, 500);
      return () => clearInterval(interval);
    }
  }, [searchInput, dispatch, movies]);

  return (
    <div className={classes["search-wrapper"]}>
      <div className={classes["input-wrapper"]}>
        <label htmlFor="search">
          <img
            className={classes["search-icon"]}
            src={SearchIcon}
            alt="search"
          />
        </label>
        <input
          value={searchInput}
          onChange={searchInputHandler}
          id="search"
          className={classes.search}
          type="text"
          placeholder={props.placeholder}
        />
      </div>
      <div>
        {searchInput ? (
          <h1 className={classes["searched-heading"]}>
            {`Found ${trendMovies.map(
              (movie) => movie.length
            )} results for '${searchInput}'`}
          </h1>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;

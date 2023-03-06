import classes from "./SearchBar.module.css";

import SearchIcon from "../../assets/icon-search.svg";

const SearchBar = () => {
  return (
    <div className={classes["search-wrapper"]}>
      <label htmlFor="search">
        <img src={SearchIcon} alt="search" />
      </label>
      <input
        id="search"
        className={classes.search}
        type="text"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
};

export default SearchBar;

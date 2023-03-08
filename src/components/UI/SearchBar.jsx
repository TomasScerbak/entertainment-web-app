import classes from "./SearchBar.module.css";

import SearchIcon from "../../assets/icon-search.svg";

const SearchBar = (props) => {
  return (
    <div className={classes["search-wrapper"]}>
      <label htmlFor="search">
        <img src={SearchIcon} alt="search" />
      </label>
      <input
        id="search"
        className={classes.search}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default SearchBar;

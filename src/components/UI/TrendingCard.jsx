import MovieImage from "../../assets/thumbnails/112/regular/small.jpg";
import BookmarkIconEmpty from "../../assets/icon-bookmark-empty.svg";
import CategoryMovieImg from "../../assets/icon-category-movie.svg";
import CategoryTvImg from "../../assets/icon-category-tv.svg";

import classes from "./TrendingCard.module.css";

const TrendingCard = ({ title, year, category, rating }) => {
  return (
    <div className={classes["trending-card"]}>
      <img src={MovieImage} className={classes["trending-image"]} />
      <div className={classes["bookmark-icon-wrapper"]}>
        <img src={BookmarkIconEmpty} alt="bookmark icon" />
      </div>
      <div className={classes["description"]}>
        <div className={classes["movie-info"]}>
          <span>{year}</span>
          <span>&#x2022;</span>
          <span>
            <img
              className={classes.category}
              src={category === "Movie" ? CategoryMovieImg : CategoryTvImg}
              alt="#"
            />
            {category}
          </span>
          <span>&#x2022;</span>
          <span>{rating}</span>
        </div>
        <h2 className={classes["movie-title"]}>{title}</h2>
      </div>
    </div>
  );
};

export default TrendingCard;

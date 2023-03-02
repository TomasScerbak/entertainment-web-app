import BookmarkIconEmpty from "../../assets/icon-bookmark-empty.svg";
import CategoryMovieImg from "../../assets/icon-category-movie.svg";

import classes from "./TrendingCard.module.css";

const TrendingCard = ({ title, image }) => {
  return (
    <div className={classes["trending-card"]}>
      <img src={image} className={classes["trending-image"]} />
      <div className={classes["bookmark-icon-wrapper"]}>
        <img src={BookmarkIconEmpty} alt="bookmark icon" />
      </div>
      <div className={classes["description"]}>
        <div className={classes["movie-info"]}>
          <span></span>
          <span>&#x2022;</span>
          <span>
            <img className={classes.category} src={CategoryMovieImg} alt="#" />
          </span>
          <span>&#x2022;</span>
          <span></span>
        </div>
        <h2 className={classes["movie-title"]}>{title}</h2>
      </div>
    </div>
  );
};

export default TrendingCard;

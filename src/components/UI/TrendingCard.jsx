import IconPlay from "../../assets/icon-play.svg";
import MovieImage from "../../assets/thumbnails/112/regular/small.jpg";
import BookmarkIconEmpty from "../../assets/icon-bookmark-empty.svg";

import classes from "./TrendingCard.module.css";

const TrendingCard = ({ title, year, category, rating }) => {
  return (
    <div className={classes["trending-card"]}>
      <img src={MovieImage} className={classes["trending-image"]} />
      <div className={classes["bookmark-icon-wrapper"]}>
        <img src={BookmarkIconEmpty} alt="bookmark icon" />
      </div>
      <div className={classes["description"]}>
        <span>{year}</span>
        <span>{category}</span>
        <span>{rating}</span>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default TrendingCard;

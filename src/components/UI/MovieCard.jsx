import { useState } from "react";

import BookmarkIconEmpty from "../../assets/icon-bookmark-empty.svg";
import CategoryMovieImg from "../../assets/icon-category-movie.svg";
import CategoryTVImg from "../../assets/icon-category-tv.svg";
import PlayIcon from "../../assets/icon-play.svg";

import classes from "./MovieCard.module.css";

const MovieCard = ({ title, image, category, year, rating }) => {
  const [hovered, setIsHovered] = useState(false);

  const toggleHoverHandler = () => {
    setIsHovered(!hovered);
  };
  return (
    <div className={classes["movie-card__wrapper"]}>
      <div
        className={classes["movie-card"]}
        onMouseEnter={toggleHoverHandler}
        onMouseLeave={toggleHoverHandler}
      >
        {hovered && (
          <div className={hovered ? `${classes.overlay}` : ""}>
            <div className={classes["icon-wrapper"]}>
              <img src={PlayIcon} alt="#" />
              <p className={classes.play}>Play</p>
            </div>
          </div>
        )}
        <img
          src={image}
          className={classes["movie-image"]}
          alt="movie poster"
        />
        <div className={classes["bookmark-icon-wrapper"]}>
          <img src={BookmarkIconEmpty} alt="bookmark icon" />
        </div>
      </div>
      <div className={classes["description"]}>
        <div className={classes["movie-info"]}>
          <span>{year}</span>
          <span>&#x2022;</span>
          <span>
            <img
              className={classes.category}
              src={category === "movie" ? CategoryMovieImg : CategoryTVImg}
              alt="#"
            />
          </span>
          <span>&#x2022;</span>
          <span>{rating}</span>
        </div>
        <h2 className={classes["movie-title"]}>{title}</h2>
      </div>
    </div>
  );
};

export default MovieCard;

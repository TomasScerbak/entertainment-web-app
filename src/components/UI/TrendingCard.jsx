import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveBookmarkedMovie } from "../../store/bookMarkSlice";

import BookmarkIconEmpty from "../../assets/icon-bookmark-empty.svg";
import BookmarkIconFull from "../../assets/icon-bookmark-full.svg";
import CategoryMovieImg from "../../assets/icon-category-movie.svg";
import CategoryTVImg from "../../assets/icon-category-tv.svg";
import PlayIcon from "../../assets/icon-play.svg";

import classes from "./TrendingCard.module.css";

const TrendingCard = ({ title, image, category, year, rating, type, id }) => {
  const user = useSelector((state) => state.auth.value);
  const [hovered, setIsHovered] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const dispatch = useDispatch();

  const toggleHoverHandler = () => {
    setIsHovered(!hovered);
  };

  const isBookmarkedHandler = () => {
    if (user) {
      setBookmarked(!bookmarked);
      dispatch(
        saveBookmarkedMovie({
          id: id,
          title: title,
          image: image,
          category: category,
          year: year,
          rating: rating,
          type: type,
        })
      );
    } else {
      setBookmarked(bookmarked);
      console.log("Please log in");
    }
  };

  return (
    <div
      onMouseEnter={toggleHoverHandler}
      onMouseLeave={toggleHoverHandler}
      className={classes["trending-card"]}
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
        className={classes["trending-image"]}
        alt="movie poster"
      />
      <div
        onClick={isBookmarkedHandler}
        className={classes["bookmark-icon-wrapper"]}
      >
        <img
          src={bookmarked ? BookmarkIconFull : BookmarkIconEmpty}
          alt="bookmark icon"
        />
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
            <span className={classes["movie-type"]}>{type}</span>
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

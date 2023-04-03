import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  removeBookmarkedMovie,
  saveBookmarkedMovie,
} from "../../store/bookmarkedMovieSlice";

import ModalCard from "./ModalCard";

import BookmarkIconFull from "../../assets/icon-bookmark-full.svg";
import BookmarkIconEmpty from "../../assets/icon-bookmark-empty.svg";
import CategoryMovieImg from "../../assets/icon-category-movie.svg";
import CategoryTVImg from "../../assets/icon-category-tv.svg";
import PlayIcon from "../../assets/icon-play.svg";

import classes from "./MovieCard.module.css";

const MovieCard = ({ title, image, category, year, rating, type, id }) => {
  const [hovered, setIsHovered] = useState(false);
  const [bookmarkAllowance, setBookmarkAllowance] = useState(false);
  const [bookmarked, setBookmarked] = useState(true);
  const user = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();

  const toggleHoverHandler = () => {
    setIsHovered(!hovered);
  };

  const bookmarkAllowanceHandler = () => {
    if (!user) {
      setBookmarkAllowance(!bookmarkAllowance);
    } else {
      setBookmarkAllowance(bookmarkAllowance);
    }
  };

  const isBookmarkedHandler = () => {
    if (user) {
      setBookmarked(!bookmarked);
      if (bookmarked === true) {
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
        dispatch(removeBookmarkedMovie(id));
      }
    }
  };

  return (
    <>
      <div className={classes["movie-card__wrapper"]}>
        <div
          className={classes["movie-card"]}
          onMouseEnter={toggleHoverHandler}
          onMouseLeave={toggleHoverHandler}
        >
          {hovered && (
            <div className={hovered ? `${classes.overlay}` : ""}>
              <div className={classes["icon-wrapper"]}>
                <img className={classes["play-icon"]} src={PlayIcon} alt="#" />
                <p className={classes.play}>Play</p>
              </div>
            </div>
          )}
          <img
            src={image}
            className={classes["movie-image"]}
            alt="movie poster"
          />
          <div
            onClick={isBookmarkedHandler}
            className={classes["bookmark-icon-wrapper"]}
          >
            <img
              onClick={bookmarkAllowanceHandler}
              src={!bookmarked ? BookmarkIconFull : BookmarkIconEmpty}
              alt="bookmark icon"
            />
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
              <span className={classes["movie-type"]}>{type}</span>
            </span>
            <span>&#x2022;</span>
            <span>{rating}</span>
          </div>
          <h2 className={classes["movie-title"]}>{title}</h2>
        </div>
      </div>
      <>{bookmarkAllowance ? <ModalCard /> : null}</>
    </>
  );
};

export default MovieCard;

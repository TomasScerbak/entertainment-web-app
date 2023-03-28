import React from "react";
import { useSelector } from "react-redux";

import SearchBar from "../UI/SearchBar";
import MovieCard from "../UI/MovieCard";
import Modal from "../UI/ModalCard";
import MovieSection from "../MovieSection";

const Bookmarks = () => {
  const user = useSelector((state) => state.auth.value);
  const bookmarkedMovie = useSelector((state) => state.bookmarked.bookmarked);

  const findBookmarkedMovie = (id) => {
    const existingMovie = bookmarkedMovie.find((movie) => movie.id === id);
    return existingMovie;
  };

  return (
    <>
      <SearchBar placeholder="Search for bookmarked shows" />
      <>
        {bookmarkedMovie.length === 0 ? (
          <MovieSection title={"You have no bookmarked movies"} />
        ) : (
          <>
            <MovieSection title={"Bookmarked Movies"}>
              {bookmarkedMovie.map((movie) =>
                movie.category === "movie" ? (
                  <MovieCard
                    isBooked={!!findBookmarkedMovie(movie.id)}
                    key={movie.id}
                    id={movie.id}
                    title={movie.title || movie.name}
                    image={movie.image}
                    category={movie.type}
                    year={movie.year}
                    rating={movie.rating}
                  />
                ) : null
              )}
            </MovieSection>
            <MovieSection title={"Bookmarked TV series"}>
              {bookmarkedMovie.map((movie) =>
                movie.category === "tv" ? (
                  <MovieCard
                    isBooked={!!findBookmarkedMovie(movie.id)}
                    key={movie.id}
                    id={movie.id}
                    title={movie.title || movie.name}
                    image={movie.image}
                    category={movie.type}
                    year={movie.year}
                    rating={movie.rating}
                  />
                ) : null
              )}
            </MovieSection>
          </>
        )}
      </>
    </>
  );
};

export default Bookmarks;

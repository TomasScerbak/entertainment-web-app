import React from "react";
import { useSelector } from "react-redux";

import MovieCard from "../UI/MovieCard";
import Modal from "../UI/ModalCard";
import BookmarkSection from "../BookmarkSection";
import BookmarkResult from "../UI/BookmarkResult";

const Bookmarks = () => {
  const user = useSelector((state) => state.auth.value);
  const bookmarkedMovies = useSelector(
    (state) => state.bookmarkedMovies.bookmarkedMovies
  );

  return (
    <>
      {user ? (
        <>
          {bookmarkedMovies.length === 0 ? (
            <BookmarkResult title={"'You have no bookmarked movies'"} />
          ) : (
            <>
              <BookmarkSection title={"Bookmarked Movies"}>
                {bookmarkedMovies.map((movie) =>
                  movie.category === "movie" ? (
                    <MovieCard
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
              </BookmarkSection>
              <BookmarkSection title={"Bookmarked TV series"}>
                {bookmarkedMovies.map((movie) =>
                  movie.category === "tv" ? (
                    <MovieCard
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
              </BookmarkSection>
            </>
          )}
        </>
      ) : (
        <Modal />
      )}
    </>
  );
};

export default Bookmarks;

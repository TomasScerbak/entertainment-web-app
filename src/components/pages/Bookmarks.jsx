import React from "react";
import { useSelector } from "react-redux";

import MovieCard from "../UI/MovieCard";
import Modal from "../UI/ModalCard";

const Bookmarks = () => {
  const user = useSelector((state) => state.auth.value);
  const bookmarkedMovie = useSelector((state) => state.bookmarked.bookmarked);

  const findBookmarkedMovie = (id) => {
    const existingMovie = bookmarkedMovie.find((movie) => movie.id === id);
    return existingMovie;
  };

  return (
    <section>
      {user ? (
        <>
          {bookmarkedMovie.map((movie) => (
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
          ))}
        </>
      ) : (
        <Modal />
      )}
    </section>
  );
};

export default Bookmarks;

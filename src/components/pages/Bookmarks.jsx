import React from "react";
import { useSelector } from "react-redux";

// import SearchBar from "../UI/SearchBar";
import MovieCard from "../UI/MovieCard";
import Modal from "../UI/ModalCard";
import MovieSection from "../MovieSection";

const Bookmarks = () => {
  const user = useSelector((state) => state.auth.value);
  const bookmarkedMovies = useSelector(
    (state) => state.bookmarkedMovies.bookmarkedMovies
  );

  console.log(bookmarkedMovies);

  return (
    <>
      {user ? (
        <>
          {/* <SearchBar
            data={bookmarkedMovies}
            onSave={(result) => dispatch(saveTrendMovies(result))}
            onClear={() => dispatch(clearTrendMovies())}
            placeholder="Search for bookmarked shows"
          /> */}
          <>
            {bookmarkedMovies.length === 0 ? (
              <MovieSection title={"You have no bookmarked movies"} />
            ) : (
              <>
                <MovieSection title={"Bookmarked Movies"}>
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
                </MovieSection>
                <MovieSection title={"Bookmarked TV series"}>
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
                </MovieSection>
              </>
            )}
          </>
        </>
      ) : (
        <Modal />
      )}
    </>
  );
};

export default Bookmarks;

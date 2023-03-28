import { useEffect, useState } from "react";

import MovieSection from "../MovieSection";
import SearchBar from "../UI/SearchBar";
import MovieCard from "../UI/MovieCard";

import { FetchAllMovies } from "../../services/APIs/FetchMoviesAPI";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    FetchAllMovies().then((data) => {
      const movieData = data.items;
      setMovies(movieData);
    });
  }, []);

  return (
    <>
      <SearchBar placeholder={"Search for movies"} />
      <MovieSection title={"Movies"}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title || movie.name}
            image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            category={movie.media_type}
            year={parseInt(movie?.release_date) || ""}
            rating={movie.vote_average.toFixed(1)}
            type={movie.media_type}
          />
        ))}
      </MovieSection>
    </>
  );
};

export default Movies;

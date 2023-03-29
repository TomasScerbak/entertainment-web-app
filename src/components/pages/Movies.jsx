import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchedSection from "../SearchedSection";
import MovieSection from "../MovieSection";
import SearchBar from "../UI/SearchBar";
import MovieCard from "../UI/MovieCard";

import { FetchAllMovies } from "../../services/APIs/FetchMoviesAPI";
import { saveAllMovies, clearAllMovies } from "../../store/allMoviesSlice";

const Movies = () => {
  const dispatch = useDispatch();
  const allMovies = useSelector((state) => state.allMovies.allMovies);
  const [fetchedAllMovies, setFetchedAllMovies] = useState([]);

  useEffect(() => {
    FetchAllMovies().then((data) => {
      const movieData = data.items;
      setFetchedAllMovies(movieData);
    });
  }, []);

  return (
    <>
      <SearchBar
        data={fetchedAllMovies}
        onSave={(result) => dispatch(saveAllMovies(result))}
        onClear={() => dispatch(clearAllMovies())}
        placeholder={"Search for movies"}
      />
      <SearchedSection>
        {allMovies.length
          ? allMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title || movie.name}
                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                category={movie.media_type}
                year={parseInt(movie?.release_date) || ""}
                rating={movie.vote_average.toFixed(1)}
                type={movie.media_type}
              />
            ))
          : null}
      </SearchedSection>
      {allMovies.length === 0 ? (
        <>
          <MovieSection title={"Movies"}>
            {fetchedAllMovies.map((movie) => (
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
      ) : null}
    </>
  );
};

export default Movies;

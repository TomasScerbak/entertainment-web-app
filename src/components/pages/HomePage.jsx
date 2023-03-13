import { useEffect, useState } from "react";

import TrendingSection from "../TrendingSection";
import RecommendedSection from "../RecommendedSection";
import TrendingCard from "../UI/TrendingCard";

import { FetchTrendingMoviesAPI } from "../../services/APIs/FetchTrendingMoviesAPI";

import SearchBar from "../UI/SearchBar";
import MovieCard from "../UI/MovieCard";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    FetchTrendingMoviesAPI().then((data) => {
      const movieData = data.results;
      console.log(movieData);
      setMovies(movieData);
    });
  }, []);

  return (
    <>
      <SearchBar placeholder="Search for movies or TV series" />
      <TrendingSection>
        {movies.map((movie) => (
          <TrendingCard
            key={movie.id}
            title={movie.title || movie.name}
            image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            category={movie.media_type}
            year={parseInt(movie?.release_date) || ""}
            rating={movie.vote_average.toFixed(1)}
            type={movie.media_type}
          />
        ))}
      </TrendingSection>
      <RecommendedSection>
        {movies.map((movie) =>
          movie.vote_average > "7.5" ? (
            <MovieCard
              key={movie.id}
              title={movie.title || movie.name}
              image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              category={movie.media_type}
              year={parseInt(movie?.release_date) || ""}
              rating={movie.vote_average.toFixed(1)}
              type={movie.media_type}
            />
          ) : null
        )}
      </RecommendedSection>
    </>
  );
};

export default HomePage;

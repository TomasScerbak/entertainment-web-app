import { useEffect, useState } from "react";

import TrendingSection from "../TrendingSection";
import TrendingCard from "../UI/TrendingCard";

import { FetchTrendingMoviesAPI } from "../../services/APIs/FetchTrendingMoviesAPI";

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
      <TrendingSection>
        {movies.map((movie) => (
          <TrendingCard
            key={movie.id}
            title={movie.title || movie.name}
            image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
        ))}
      </TrendingSection>
    </>
  );
};

export default HomePage;

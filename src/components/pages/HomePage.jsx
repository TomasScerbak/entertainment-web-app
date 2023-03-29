import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TrendingSection from "../TrendingSection";
import TrendingCard from "../UI/TrendingCard";
import RecommendedSection from "../RecommendedSection";
import SearchedSection from "../SearchedSection";
import SearchBar from "../UI/SearchBar";
import MovieCard from "../UI/MovieCard";

import { FetchTrendingMoviesAPI } from "../../services/APIs/FetchTrendingMoviesAPI";

import {
  clearTrendMovies,
  saveTrendMovies,
} from "../../store/trendMoviesSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const trendMovies = useSelector((state) => state.trendMovies.trendMovies);
  const [fetchedTrendMovies, setFetchedTrendMovies] = useState([]);

  console.log(trendMovies);

  useEffect(() => {
    FetchTrendingMoviesAPI().then((data) => {
      const movieData = data.results;
      setFetchedTrendMovies(movieData);
    });
  }, []);

  return (
    <>
      <SearchBar
        data={fetchedTrendMovies}
        onSave={(result) => dispatch(saveTrendMovies(result))}
        onClear={() => dispatch(clearTrendMovies())}
        placeholder="Search for movies or TV series"
      />
      <SearchedSection>
        {trendMovies.length
          ? trendMovies.map((movie) => (
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
      {trendMovies.length === 0 ? (
        <>
          <TrendingSection title={"Trending"}>
            {fetchedTrendMovies.map((movie) => (
              <TrendingCard
                key={movie.id}
                id={movie.id}
                title={movie.title || movie.name}
                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                category={movie.media_type}
                year={parseInt(movie?.release_date) || ""}
                rating={movie.vote_average.toFixed(1)}
                type={movie.media_type}
              />
            ))}
          </TrendingSection>
          <RecommendedSection title={"Recommended for you"}>
            {fetchedTrendMovies.map((movie) =>
              movie.vote_average > "5" ? (
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
              ) : null
            )}
          </RecommendedSection>
        </>
      ) : null}
    </>
  );
};

export default HomePage;

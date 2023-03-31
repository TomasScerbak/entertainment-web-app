import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchedSection from "../SearchedSection";
import MovieSection from "../MovieSection";
import SearchBar from "../UI/SearchBar";
import MovieCard from "../UI/MovieCard";
import Result from "../UI/Result";

import { FetchTVShowsAPI } from "../../services/APIs/FetchTVShowsAPI";
import { clearTVShows, saveTVShows } from "../../store/tvShowsSlice";

const TvSeries = () => {
  const dispatch = useDispatch();
  const tvShows = useSelector((state) => state.tvShows.tvShows);
  const searchValue = useSelector(
    (state) => state.searchInputValue.searchValue
  );
  const [fetchedTVShows, setFetchedTVShows] = useState([]);

  useEffect(() => {
    FetchTVShowsAPI().then((data) => {
      const movieData = data.items;
      setFetchedTVShows(movieData);
    });
  }, []);

  return (
    <>
      <SearchBar
        data={fetchedTVShows}
        onSave={(result) => dispatch(saveTVShows(result))}
        onClear={() => dispatch(clearTVShows())}
        placeholder={"Search for TV series"}
      />
      {searchValue ? (
        <Result text={`Found ${tvShows.length} results for "${searchValue}"`} />
      ) : null}
      <SearchedSection>
        {tvShows.length
          ? tvShows.map((movie) => (
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
      {tvShows.length === 0 ? (
        <>
          <MovieSection title={"TV Series"}>
            {fetchedTVShows.map((movie) => (
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

export default TvSeries;

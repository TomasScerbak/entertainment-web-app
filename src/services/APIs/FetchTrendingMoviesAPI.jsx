import axios from "axios";

const trendingMovies = `https://api.themoviedb.org/3/trending/all/week?api_key=affb7efecd98772b925fd529e5bd3521`;

export const FetchTrendingMoviesAPI = async () => {
  try {
    const { data } = await axios.get(trendingMovies);
    return data;
  } catch (error) {
    console.log(error);
  }
};

import axios from "axios";

const allMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=affb7efecd98772b925fd529e5bd3521&language=en-US&page=1`;

export const FetchAllMovies = async () => {
  try {
    const { data } = await axios.get(allMovies);
    return data;
  } catch (error) {
    console.log(error);
  }
};

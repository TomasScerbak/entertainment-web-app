import axios from "axios";

const tvShows = `https://api.themoviedb.org/3/list/8245867?api_key=affb7efecd98772b925fd529e5bd3521&language=en-US`;

export const FetchTVShowsAPI = async () => {
  try {
    const { data } = await axios.get(tvShows);
    return data;
  } catch (error) {
    console.log(error);
  }
};

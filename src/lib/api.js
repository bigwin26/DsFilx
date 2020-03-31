import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const params = {
  params: { api_key: "248a52d680518fd97f6e7be12c21157d", language: "ko" },
};
//language: "en-US"

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing", params),
  upcoming: () => api.get("movie/upcoming", params),
  popular: () => api.get("movie/popular", params),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated", params),
  popular: () => api.get("tv/popular", params),
  airingToday: () => api.get("tv/airing_today", params),
};

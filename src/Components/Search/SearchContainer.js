import React, { useState, useEffect } from "react";
import SearchPresenter from "./SearchPresenter";
import * as Api from "../../lib/api";

export default () => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = e => {
    if (searchTerm !== "") {
      setSearchTerm(e.target.value);
      searchByTerm();
    }
  };

  const searchByTerm = async () => {
    try {
      setLoading(true);
      const {
        data: { results: movieResult },
      } = await Api.movieApi.search(searchTerm);
      setMovieResults(movieResult);

      const {
        data: { results: tvResult },
      } = await Api.tvApi.search(searchTerm);
      setTvResults(tvResult);
    } catch (error) {
      setError("해당 정보를 찾지 못했습니다.");
    }
    setLoading(false);
  };

  useEffect(() => {}, [searchTerm, movieResults, tvResults]);

  return (
    <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      handleSubmit={handleSubmit}
      loading={loading}
      error={error}
    />
  );
};

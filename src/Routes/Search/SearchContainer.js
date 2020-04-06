import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import * as Api from "../../lib/api";
import { useCallback } from "react";

export default () => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm !== ("" || undefined)) {
      setSearchTerm(e.target.value);
      searchByTerm();
    }
  };

  const searchByTerm = useCallback(async () => {
    try {
      setLoading(true);
      const {
        data: { results: movieResult },
      } = await Api.movieApi.search(searchTerm);
      console.log("movie", movieResult);
      setMovieResults(movieResult);

      const {
        data: { results: tvResult },
      } = await Api.tvApi.search(searchTerm);
      console.log("show", tvResult);
      setTvResults(tvResult);
    } catch (error) {
      setError("해당 정보를 찾지 못했습니다.");
    }
    setLoading(false);
  }, [searchTerm]);

  const updateTerm = useCallback((event) => {
    const {
      target: { value },
    } = event;
    setSearchTerm(value);
  }, []);

  return (
    <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      handleSubmit={handleSubmit}
      updateTerm={updateTerm}
      loading={loading}
      error={error}
    />
  );
};

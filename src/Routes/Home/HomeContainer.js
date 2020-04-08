import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import * as Api from "../../lib/api";

export default () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [popular, setPopular] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const {
          data: { results: nowplaying },
        } = await Api.movieApi.nowPlaying();
        setNowPlaying(nowplaying);
        const {
          data: { results: popular },
        } = await Api.movieApi.popular();
        setPopular(popular);
        const {
          data: { results: upcoming },
        } = await Api.movieApi.upcoming();
        setUpcoming(upcoming);
      } catch (error) {
        setError("영화정보를 불러올 수 없습니다.");
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <HomePresenter
      nowPlaying={nowPlaying}
      popular={popular}
      upcoming={upcoming}
      loading={loading}
      error={error}
    />
  );
};

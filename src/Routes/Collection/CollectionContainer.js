import React, { useEffect, useState, useCallback } from "react";
import CollectionPresenter from "./CollectionPresenter";
import { withRouter } from "react-router-dom";
import * as Api from "../../lib/api";

export default withRouter(({ history, location, match }) => {
  const { id } = match.params;
  const { push } = history;
  const { pathname } = location;

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const setData = useCallback(async () => {
    try {
      setLoading(true);
      if (pathname.includes("/movie/")) {
        const { data: movieDetail } = await Api.movieApi.movieDetail(id);
        setResult(movieDetail);
      } else if (pathname.includes("/show/")) {
        const { data: showDetail } = await Api.tvApi.tvDetail(id);
        setResult(showDetail);
      }
    } catch (error) {
      setError("존재하지 않는 정보입니다.");
    }
    setLoading(false);
  }, [id, pathname]);

  useEffect(() => {
    if (isNaN(parseInt(id))) {
      push("/");
    }
    if (result === null) {
      setData();
    }
  }, []);

  return <CollectionPresenter />;
});

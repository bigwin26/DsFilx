import React, { useState, useEffect, useCallback } from "react";
import DetailPresenter from "./DetailPresenter";
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
    console.log("111");
    try {
      console.log("222");
      setLoading(true);
      if (pathname.includes("/movie/")) {
        console.log("333");
        const { data: movieDetail } = await Api.movieApi.movieDetail(id);
        setResult(movieDetail);
        console.log("444");
      } else if (pathname.includes("/show/")) {
        console.log("555");
        const { data: showDetail } = await Api.tvApi.tvDetail(id);
        setResult(showDetail);
        console.log("666");
      }
    } catch (error) {
      console.log("999");
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
  }, [id, push, result, setData]);

  return <DetailPresenter result={result} error={error} loading={loading} />;
});

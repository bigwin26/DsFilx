import React from "react";

export default ({ topRated, popular, airingToday, loading, error }) => {
  if (loading) {
    return <div>loading</div>;
  } else {
    return <div>TV</div>;
  }
};

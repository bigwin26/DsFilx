import React from "react";
import ReactPlayer from "react-player";

const Youtube = ({ url }) => {
  console.log(url);

  return (
    <>
      <ReactPlayer url={url} controls />
    </>
  );
};

export default Youtube;

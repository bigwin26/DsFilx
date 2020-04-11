import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px 0;
  overflow: auto;
  white-space: nowrap;
  iframe {
    margin-right: 5px;
  }
`;

const Youtube = ({ src, title }) => {
  return (
    <>
      <Container>
        <iframe
          width="inherit"
          height="inherit"
          src={`https://www.youtube.com/embed/${src}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        ></iframe>
        <iframe
          width="inherit"
          height="inherit"
          src={`https://www.youtube.com/embed/${src}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        ></iframe>
      </Container>
    </>
  );
};

export default Youtube;

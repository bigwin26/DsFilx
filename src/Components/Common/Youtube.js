import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px 0;
`;

const Youtube = ({ src, title }) => {
  return (
    <>
      <Container>
        <iframe
          width="inherit"
          height="inherit"
          src={`https://www.youtube.com/embed/${src}`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title={title}
        ></iframe>
      </Container>
    </>
  );
};

export default Youtube;

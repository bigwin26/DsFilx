import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 100%;
  width: 100%;
  background-size: cover;
  border-radius: 4px;
`;

const Logo = ({ imageUrl }) => {
  return (
    <Image bgUrl={imageUrl && `https://image.tmdb.org/t/p/w300${imageUrl}`} />
  );
};

Logo.propTypes = {
  imageUrl: PropTypes.string,
};

export default Logo;

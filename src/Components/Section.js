import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
  :first-child {
    margin-top: 15px;
  }
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const Grid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 20px;
  text-align: center;
  img {
    width: 150px;
    height: 150px;
  }
  span {
    margin-top: 10px;
    display: inline-block;
  }
`;

const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default Section;

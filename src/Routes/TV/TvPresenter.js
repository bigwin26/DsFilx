import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Common/Section";
import Message from "../../Components/Common/Message";

const Container = styled.div`
  padding: 0px 10px;
`;

const TvPresenter = ({ topRated, popular, airingToday, loading, error }) => {
  return loading ? (
    <div>loading</div>
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">{topRated.map((show) => show.name)}</Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map((show) => show.name)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">{popular.map((show) => show.name)}</Section>
      )}
      {error && <Message text={error} color={"#e74c3c"} />}
    </Container>
  );
};

TvPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TvPresenter;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Common/Section";
import Loader from "../../Components/Common/Loader";
import Message from "../../Components/Common/Message";
import Poster from "../../Components/Common/Poster";

const Container = styled.div`
  padding: 0px 10px;
`;
const getPoster = (image) => `https://image.tmdb.org/t/p/original${image}`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie) => (
            <Poster />
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Up Coming">
          {upcoming.map((movie) => (
            <Poster />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map((movie) => (
            <Poster />
          ))}
        </Section>
      )}
      {error && <Message text={error} />}
    </Container>
  );
};

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;

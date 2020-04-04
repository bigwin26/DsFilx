import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../Section";
import Loader from "../Loader";

const Container = styled.div`
  padding: 0px 10px;
`;
const getPoster = image => `https://image.tmdb.org/t/p/original${image}`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => (
            <div>
              <img src={getPoster(movie.poster_path)} alt="poster" />
              <span key={movie.id}>{movie.title}</span>
            </div>
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Up Coming">
          {upcoming.map(movie => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map(movie => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
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

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import Loader from "Components/Common/Loader";
import Youtube from "Components/Common/Youtube";
import Message from "Components/Common/Message";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
  z-index: 0;
  @media (max-width: 768px) {
    padding: 0px;
  }
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: calc(100% - 50px);
  height: 100%;
  background-image: url(${(props) => props.Bgimg});
  background-size: cover;
  background-position: center;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 1;
  @media (max-width: 768px) {
    width: 100%;
    height: 40%;
  }
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${(props) => props.Bgimg});
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 40%;
    height: 40%;
  }
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-left: 0px;
  }
`;

const Title = styled.h3`
  font-size: 40px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const ItemContainer = styled.div`
  font-size: 13px;
  margin-bottom: 20px;
`;

const Item = styled.span`
  margin-bottom: 10px;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  width: 50%;
  line-height: 2;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  src: ${(props) => props.src};
`;

const LinkContainer = styled.ul`
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
`;

const LinkItem = styled.li`
  border-radius: 3px;
  border: solid black 3px;
  padding: 5px;
  margin-right: 20px;
  text-transform: uppercase;
  font-weight: 600;
  color: ${(props) => (props.selected ? "black" : "white")};
  opacity: ${(props) => (props.selected ? "0.8" : "0.5")};
  background-color: ${(props) => (props.selected ? "white" : "black")};
`;

const VideoContainer = styled.div`
  margin: 10px 0;
  overflow: auto;
  white-space: nowrap;
  iframe {
    margin-right: 5px;
  }
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const DetailPresenter = ({ result, error, loading }) => {
  return loading ? (
    <>
      <Helmet>
        <title>Loading... | DSflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>{result.title ? result.title : result.name} | DSflix</title>
      </Helmet>
      <Backdrop
        Bgimg={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          Bgimg={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("assets/noPosterSmall.png")
          }
        />
        <Data>
          <Title>{result.title ? result.title : result.name}</Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>ㆍ</Divider>
            <Item>
              {result.runtime || result.runtime === 0
                ? result.runtime
                : result.episode_run_time[0]}
              min
            </Item>
            <Divider>ㆍ</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `,
                )}
            </Item>
          </ItemContainer>
          {result.videos.results.length > 0 && (
            <>
              <Icon src={require("assets/youtube_icon.png")} />
              <VideoContainer>
                {result.videos.results.map((video, index) => (
                  <Youtube
                    key={index}
                    src={video.key}
                    title={video.title ? video.title : video.name}
                  />
                ))}
              </VideoContainer>
            </>
          )}
          <Overview>{result.overview}</Overview>
          <LinkContainer>
            {result.production_companies && (
              <LinkItem selected={true}>
                <Link to="#">Production</Link>
              </LinkItem>
            )}
            {result.created_by && (
              <LinkItem selected={true}>
                <Link to="#">Director</Link>
              </LinkItem>
            )}
            {result.belongs_to_collection && (
              <LinkItem selected={true}>
                <Link to="#">Collection</Link>
              </LinkItem>
            )}
            {result.seasons && (
              <LinkItem selected={false}>
                <Link to="#">Seasons</Link>
              </LinkItem>
            )}
          </LinkContainer>
        </Data>
      </Content>
      {error && <Message text={error} color={"#e74c3c"} />}
    </Container>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;

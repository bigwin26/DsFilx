import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
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

const DetailPresenter = ({
  result,
  error,
  loading,
  handleImgClick,
  trVisible,
}) => {
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
              {result.runtime ? result.runtime : result.episode_run_time[0]}min
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
            <Icon
              src={require("assets/youtube_icon.png")}
              onClick={handleImgClick}
            />
          )}
          {trVisible && (
            <Youtube
              url={`https://www.youtube.com/watch?v=${result.videos.results[0].key}`}
            />
          )}
          <Overview>{result.overview}</Overview>
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

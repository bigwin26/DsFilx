import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Helmet from "react-helmet";
import Loader from "Components/Common/Loader";
import Message from "Components/Common/Message";

const Container = styled.div`
  padding: 0px 10px;
`;

const CollectionPresenter = withRouter(
  ({ result, error, loading, location, match }) => {
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
          <title> | DSflix</title>
        </Helmet>
        <h1>Collection</h1>
        {error && <Message text={error} color={"#e74c3c"} />}
      </Container>
    );
  },
);

CollectionPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default CollectionPresenter;

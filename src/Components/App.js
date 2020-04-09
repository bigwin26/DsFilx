import React from "react";
import Router from "Components/Router";
import Header from "Components/Common/Header";
import GlobalStyles from "Components/Common/GlobalStyles";
import Responsive from "Components/Common/Responsive";

function App() {
  return (
    <>
      <Responsive>
        <Header />
        <Router />
        <GlobalStyles />
      </Responsive>
    </>
  );
}

export default App;

import React from "react";
import Router from "Components/Router";
import Header from "Components/Common/Header";
import GlobalStyles from "Components/Common/GlobalStyles";

function App() {
  return (
    <>
      <Header />
      <Router />
      <GlobalStyles />
    </>
  );
}

export default App;

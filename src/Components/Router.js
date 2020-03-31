import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/tv" component={TV} />
      <Route exact path="/search" component={Search} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Router;

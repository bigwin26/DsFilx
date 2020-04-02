import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "Components/Home";
import Search from "Components/Search";
import TV from "Components/TV";
import Detail from "Components/Detail";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/tv" component={TV} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/movie/:id" component={Detail} />
      <Route exact path="/show/:id" component={Detail} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

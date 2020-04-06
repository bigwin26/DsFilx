import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Detail from "Routes/Detail";

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

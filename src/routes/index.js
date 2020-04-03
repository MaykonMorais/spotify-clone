import React from "react";

import { Switch, Route } from "react-router-dom";

import Browse from "../pages/browse";
import Playlist from "../pages/playlist";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
    <Playlist path="/playlist/:id" component={Playlist} />
  </Switch>
);

export default Routes;

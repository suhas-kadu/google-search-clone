import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Results } from "./Results";

export const Routes = () => {
  return (
    <div className="p-4">
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route exact path={["/search", "image", "/news", "/video"]}>
          <Results />
        </Route>
        {/* <Route path="/image">
          <Results />
        </Route>
        <Route path="/news">
          <Results />
        </Route>
        <Route path="/video">
          <Results />
        </Route> */}
      </Switch>
    </div>
  );
};

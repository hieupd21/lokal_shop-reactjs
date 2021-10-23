import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import ProductIndex from "./pages";
import ProductDetail from "./pages/detail";

export default function ProductFeature() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={match.url} exact component={ProductIndex} />
      <Route path={`${match.url}/:productId`} component={ProductDetail} />
    </Switch>
  );
}

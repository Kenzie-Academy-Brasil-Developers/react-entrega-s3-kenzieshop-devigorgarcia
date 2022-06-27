import React from "react";
import { Switch, Route } from "react-router-dom";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/CartPage">
        <CartPage />
      </Route>
    </Switch>
  );
}

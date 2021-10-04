import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Layout } from "../components/layout/Layout";
import { BrowserRouter } from "react-router-dom";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Switch>
            <Route exact path="/" component={<Home />} />
          </Switch>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

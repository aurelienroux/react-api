import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "../App";
import Site from "../components/Site";

const Router = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={App} exact />
      <Route path="/site/:id" component={Site} />
    </div>
  </BrowserRouter>
);

export default Router;

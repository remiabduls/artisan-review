import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import { Route, Switch } from "react-router-dom";
import Search from "./Search/Search";
import Login from "./Login";

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/search" component={Search} />
      <Route path="/" component={LandingPage} />
    </Switch>
  );
}

export default App;

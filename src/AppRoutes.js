import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Deshboard from "./components/Dashboard";
import Profile from "./components/Profile";

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/deshboard" component={Deshboard} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;

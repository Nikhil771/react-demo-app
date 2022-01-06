import React from "react";
import TopAppBar from "./components/Appbar";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Container from '@mui/material/Container';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
// import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
     <Container>
     <TopAppBar />
     <Switch>
     <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/logout" component={Logout} />
        <Route path="/deshboard" component={Dashboard} />
        <Route path="/profile" component={Profile} />
     </Switch>
   </Container>
   </BrowserRouter>
  );
};
export default App;

import React, { useCallback, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import User from "./users/pages/User";
import NewPlace from "./places/pages/NewPlace";
import MainHeader from "./shared/components/Navigation/MainHeader";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import { AuthContext } from "./shared/context/auth-context";
import Login from "./users/pages/Login";
import Signup from "./users/pages/Signup";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <User />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Route path="/places/:placeId" exact>
          <UpdatePlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <User />
        </Route>

        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/auth/login" exact>
          <Login />
        </Route>
        <Route path="/auth/signup" exact>
          <Signup />
        </Route>
        <Redirect to="/auth/login" />
      </Switch>
    );
  }

  const login = useCallback(() => {
    setIsLoggedIn(true);
  });

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  });

  const ctxValue = {
    isLoggedIn: isLoggedIn,
    login: login,
    logout: logout,
  };
  return (
    <AuthContext.Provider value={ctxValue}>
      <Router>
        <MainHeader />
        <main className="my-4">{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
}

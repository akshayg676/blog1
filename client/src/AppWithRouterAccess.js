import React from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";

import { Box } from "@material-ui/core";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./components/home/Home.jsx";
import DetailedPost from "./components/post/DetailedPost.jsx";
import CreatePost from "./components/post/CreatePost.jsx";
import UpdatePost from "./components/post/UpdatePost.jsx";

import Login from "./components/account/Login.jsx";
import { oktaAuthConfig, oktaSignInConfig } from "./config";

const oktaAuth = new OktaAuth(oktaAuthConfig);

function AppWithRouterAccess() {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push("/login");
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };
  return (
    <Security
      oktaAuth={oktaAuth}
      onAuthRequired={customAuthHandler}
      restoreOriginalUri={restoreOriginalUri}
    >
      <SecureRoute path="/" component={Header} />

      <Box style={{ marginTop: 64 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/login"
            render={() => <Login config={oktaSignInConfig} />}
          />
          <Route path="/login/callback" component={LoginCallback} />
          <Route path="/details/:id" component={DetailedPost} />
          <Route path="/create" component={CreatePost} />
          <Route path="/update/:id" component={UpdatePost} />
        </Switch>
      </Box>
      <SecureRoute path="/" component={Footer} />
    </Security>
  );
}

export default AppWithRouterAccess;

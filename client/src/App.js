import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Box } from "@material-ui/core";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import DetailedPost from "./components/post/DetailedPost.jsx";
import CreatePost from "./components/post/CreatePost.jsx";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box style={{ marginTop: 64 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={DetailedPost} />
          <Route path="/create" component={CreatePost} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;

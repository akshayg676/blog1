import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Box } from "@material-ui/core";

import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import DetailedPost from "./components/post/DetailedPost.jsx";
import CreatePost from "./components/post/CreatePost.jsx";
import UpdatePost from "./components/post/UpdatePost.jsx";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box style={{ marginTop: 64 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={DetailedPost} />
          <Route path="/create" component={CreatePost} />
          <Route path="/update/:id" component={UpdatePost} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Box>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

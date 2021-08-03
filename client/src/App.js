import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppWithRouterAccess from "./AppWithRouterAccess";

// import Header from "./components/header/Header.jsx";
// import Home from "./components/home/Home.jsx";
// import DetailedPost from "./components/post/DetailedPost.jsx";
// import CreatePost from "./components/post/CreatePost.jsx";
// import UpdatePost from "./components/post/UpdatePost.jsx";
function App() {
  return (
    <BrowserRouter>
      <AppWithRouterAccess />
      {/* <Header />
      <Box style={{ marginTop: 64 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={DetailedPost} />
          <Route path="/create" component={CreatePost} />
          <Route path="/update/:id" component={UpdatePost} />
        </Switch>
      </Box> */}
    </BrowserRouter>
  );
}

export default App;

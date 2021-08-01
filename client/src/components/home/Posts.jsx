import { useState, useEffect } from "react";
import Post from "./Post";
import { Grid, Box } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { getAllPosts } from "../../service/api.js";

function Posts() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      let data = await getAllPosts(search);
      if (isMounted) setPosts(data);
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {posts.length ? (
        posts.map((post) => (
          <Grid item lg={3} sm={4} xs={12} key={post._id}>
            <Link
              to={`/details/${post._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Post post={post} />
            </Link>
          </Grid>
        ))
      ) : (
        <Box style={{ color: "878787", margin: "30px 80px", fontSize: 18 }}>
          No data is available for selected category
        </Box>
      )}
    </>
  );
}

export default Posts;

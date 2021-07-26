import Post from "./Post";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

function Posts() {
  const array = [1, 2, 3, 4, 5, 6, 6, 6, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 44];
  return array.map((post) => (
    <Grid item lg={3} sm={4} xs={12}>
      <Link
        to={"/details"}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Post />
      </Link>
    </Grid>
  ));
}

export default Posts;

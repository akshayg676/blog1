import { useState, useEffect } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { getPost, deletePost } from "../../service/api.js";
import { useHistory } from "react-router-dom";

import Comments from "../comments/Comments.js";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "20px 100px",
    [theme.breakpoints.down("md")]: {
      padding: "0 50px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 10px",
    },
  },
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "contain",
    [theme.breakpoints.down("xs")]: {
      objectFit: "contain",
    },
  },
  icons: {
    float: "right",
  },
  icon: {
    margin: 5,
    border: "1px solid #343434",
    padding: 5,
    borderRadius: 10,
  },
  heading: {
    fontSize: 38,
    fontWeight: 600,
    textAlign: "centre",
    margin: "50px 0 10px 0",
  },
  subHeading: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0",
    color: "#575757",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

function DetailedPost({ match }) {
  const classes = useStyles();
  const url =
    "https://t4.ftcdn.net/jpg/02/84/64/51/360_F_284645131_hE2W3bbPxFBkk2aNqNyiTgLiraaiAuDh.jpg";
  const history = useHistory();

  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let data = await getPost(match.params.id);
      setPost(data);
    };
    fetchData();
  }, []);

  const deleteBlog = async () => {
    await deletePost(post._id);
    history.push("/");
  };

  return (
    <Box className={classes.container}>
      <img className={classes.image} src={post.picture || url} alt="" />
      <Box className={classes.icons}>
        <Link to={`/update/${post._id}`}>
          <Edit className={classes.icon} color="primary" />
        </Link>
        <Delete
          onClick={() => deleteBlog()}
          className={classes.icon}
          color="error"
        />
      </Box>
      <Typography className={classes.heading}>{post.title}</Typography>
      <Box className={classes.subHeading}>
        <Link to={`/?username=${post.username}`} className={classes.link}>
          <Typography>
            Author:{" "}
            <span style={{ fontWeight: 600, textTransform: "uppercase" }}>
              {post.username}
            </span>
          </Typography>
        </Link>
        <Typography>{new Date(post.createDate).toDateString()}</Typography>
      </Box>
      <Typography>{post.description}</Typography>
      <Comments post={post} />
    </Box>
  );
}

export default DetailedPost;

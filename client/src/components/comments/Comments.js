import { Box, TextareaAutosize, Button, makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import { newComment, getComment } from "../../service/api";

import Comment from "./Comment.jsx";

const useStyles = makeStyles({
  component: {
    marginTop: 100,
    display: "flex",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: "50%",
  },
  textarea: {
    width: "100%",
  },
  button: {
    height: 40,
    margin: "0 20px",
  },
});

const initialValue = {
  name: "",
  postId: "",
  date: new Date(),
  comments: "",
};

function Comments({ post }) {
  const classes = useStyles();
  const url = "https://static.thenounproject.com/png/12017-200.png";

  const [comment, setComment] = useState(initialValue);
  const [comments, setComments] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getData = async () => {
      let response = await getComment(post._id);
      setComments(response);
    };
    getData();
  }, [post, toggle]);

  const handleChange = (e) => {
    setComment({
      ...comment,
      name: post.username,
      postId: post._id,
      comments: e.target.value,
    });
  };

  const postComment = async () => {
    await newComment(comment);
    setToggle((prev) => !prev);
  };

  return (
    <Box>
      <Box className={classes.component}>
        <img src={url} alt="" className={classes.image} />
        <TextareaAutosize
          onChange={(e) => handleChange(e)}
          className={classes.textarea}
          minRows={5}
        />
        <Button
          variant="contained"
          color="primary"
          size="medium"
          className={classes.button}
          onClick={() => postComment()}
        >
          Post
        </Button>
      </Box>
      {comments &&
        comments.map((comment) => (
          <Comment comment={comment} toggle={toggle} />
        ))}
    </Box>
  );
}

export default Comments;

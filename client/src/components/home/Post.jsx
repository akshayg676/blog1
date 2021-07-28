import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    height: 350,
    margin: 10,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& > *": {
      padding: "0 5px 5px 5px",
    },
  },
  image: {
    width: "100%",
    objectFit: "cover",
    height: 150,
    borderRadius: "10px 10px 0 0",
  },
  text: {
    fontSize: 12,
  },
  heading: {
    fontSize: 18,
  },
  detail: {
    fontSize: 14,
    wordBreak: "break-word",
  },
});
function Post({ post }) {
  const classes = useStyles();
  const url =
    post.picture ||
    "https://t4.ftcdn.net/jpg/02/84/64/51/360_F_284645131_hE2W3bbPxFBkk2aNqNyiTgLiraaiAuDh.jpg";
  return (
    <Box className={classes.container}>
      <img className={classes.image} src={url} alt="" />
      <Typography className={classes.text}>{post.categories}</Typography>
      <Typography className={classes.heading}>{post.title}</Typography>
      <Typography className={classes.text}>author: {post.username}</Typography>
      <Typography className={classes.detail}>{post.description}</Typography>
    </Box>
  );
}

export default Post;

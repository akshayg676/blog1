import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    height: 350,
    margin: 10,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    border: "1px solid darkgrey",
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
    fontWeight: 600,
    textAlign: "center",
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

  const addElipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };
  return (
    <Box className={classes.container}>
      <img className={classes.image} src={url} alt="" />
      <Typography className={classes.text}>{post.categories}</Typography>
      <Typography className={classes.heading}>
        {addElipsis(post.title, 50)}
      </Typography>
      <Typography className={classes.text}>author: {post.username}</Typography>
      <Typography className={classes.detail}>
        {addElipsis(post.description, 100)}
      </Typography>
    </Box>
  );
}

export default Post;

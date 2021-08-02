import { Typography, Box, makeStyles } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const useStyles = makeStyles({
  component: {
    marginTop: 30,
    background: "#f5f5f5",
    padding: 10,
  },
  container: {
    display: "flex",
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 600,
    marginRight: 20,
    textTransform: "uppercase",
  },
  date: {
    fontSize: 14,
    color: "#878787",
  },
  delete: {
    marginLeft: "auto",
  },
});

const Comment = ({ comment }) => {
  const classes = useStyles();
  return (
    <Box className={classes.component}>
      <Box className={classes.container}>
        <Typography className={classes.name}>{comment.name}</Typography>
        <Typography className={classes.date}>
          {new Date(comment.date).toDateString()}
        </Typography>
        <Delete className={classes.delete} />
      </Box>
      <Typography>{comment.comments}</Typography>
    </Box>
  );
};

export default Comment;

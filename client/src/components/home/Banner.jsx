import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    height: "50vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    "& :first-child": {
      fontSize: 50,
      textAlign: "center",
    },
    "& :last-child": {
      fontSize: 30,
      textAlign: "center",
    },
  },
});

function Banner() {
  const classes = useStyles();
  return (
    <Box className={classes.image}>
      <Typography>“Create content that teaches.”</Typography>
      <Typography>-Neil Patel</Typography>
    </Box>
  );
}

export default Banner;

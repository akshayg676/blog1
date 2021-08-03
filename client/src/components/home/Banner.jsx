import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  image: {
    height: "50vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    "& :first-child": {
      fontSize: 100,
      textAlign: "center",
      fontFamily: "Roboto",
      [theme.breakpoints.down("sm")]: {
        fontSize: 80,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 50,
      },
    },
    "& :last-child": {
      fontSize: 30,
      textAlign: "center",
    },
  },
}));

function Banner() {
  const classes = useStyles();
  return (
    <Box className={classes.image}>
      <Typography className={classes.quote}>
        “Create content that teaches.”
      </Typography>
      <Typography>-Neil Patel</Typography>
    </Box>
  );
}

export default Banner;

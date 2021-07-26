import { AppBar, Toolbar, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  component: {
    backgroundColor: "#fff",
    color: "#303030",
  },
  container: {
    justifyContent: "center",
    "& > *": {
      padding: 20,
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.component}>
      <Toolbar className={classes.container}>
        <Link to="/" className={classes.link}>
          <Typography>Home</Typography>
        </Link>
        <Typography>Contact</Typography>
        <Typography>Write</Typography>
        <Typography>Logout</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

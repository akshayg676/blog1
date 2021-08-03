import { AppBar, Toolbar, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  component: {
    backgroundColor: "#060042",
    color: "#fff",
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
          <Typography>HOME</Typography>
        </Link>
        <Typography>
          <a
            href="https://www.google.com"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            CONTACT
          </a>
        </Typography>
        <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography>ABOUT</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

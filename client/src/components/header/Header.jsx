import { AppBar, Toolbar, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useOktaAuth } from "@okta/okta-react";

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
  const history = useHistory();

  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) return null;

  const login = async () => history.push("/login");

  const logout = async () => oktaAuth.signOut();

  const button = authState.isAuthenticated ? (
    <button
      onClick={logout}
      style={{
        background: "unset",
        border: "none",
        textTransform: "uppercase",
        fontSize: 16,
        cursor: "pointer",
        color: "#fff",
      }}
    >
      LOGOUT
    </button>
  ) : (
    <button onClick={login}>LOGIN</button>
  );
  return (
    <AppBar position="fixed" className={classes.component}>
      <Toolbar className={classes.container}>
        <Link to="/" className={classes.link}>
          <Typography>HOME</Typography>
        </Link>
        <Typography>CONTACT</Typography>
        <Typography>{button}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

import { Typography, Box, makeStyles } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LanguageIcon from "@material-ui/icons/Language";

const useStyles = makeStyles({
  sticky: {
    marginTop: "auto",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 0",
    backgroundColor: "#060042",
    color: "#fff",
    flexDirection: "column",
  },
  social: {
    marginBottom: 10,
    "& > *": {
      margin: "0 10px",
      fontSize: 30,
    },
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.sticky}>
      <Box className={classes.footer}>
        <Box className={classes.social}>
          <LanguageIcon />
          <GitHubIcon />
          <MailOutlineIcon />
          <LinkedInIcon />
        </Box>
        <Typography>© 2021 | All rights reserved</Typography>
      </Box>
    </Box>
  );
}

export default Footer;

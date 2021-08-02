import { Typography, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 0 60px 0",
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Typography>© 2021 | All rights reserved</Typography>
    </Box>
  );
}

export default Footer;

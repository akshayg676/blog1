import { Typography, Box, makeStyles } from "@material-ui/core";
import { AutorenewTwoTone } from "@material-ui/icons";

const useStyles = makeStyles({
  about: {
    display: "flex",
    // alignItems:"",
    // justifyContent: "center",
    padding: "60px 0",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    color: "#000",
    margin: "10px 20px",
    height: "60vh",
  },
  title: {
    marginRight: "auto",
    marginBottom: 20,
    fontWeight: 600,
    fontSize: 40,
  },
  desc: {
    fontSize: 25,
  },
});

function About() {
  const classes = useStyles();
  return (
    <Box className={classes.about}>
      <Typography className={classes.title}>ABOUT</Typography>
      <Typography className={classes.desc}>
        The best ideas can change who we are. !404 is where those ideas take
        shape, take off, and spark powerful conversations. We’re an open
        platform where readers come to find insightful and dynamic thinking.
        Here, expert and undiscovered voices alike dive into the heart of any
        topic and bring new ideas to the surface. Our purpose is to spread these
        ideas and deepen understanding of the world. We’re creating a new model
        for digital publishing. One that supports nuance, complexity, and vital
        storytelling without giving in to the incentives of advertising. It’s an
        environment that’s open to everyone but promotes substance and
        authenticity. And it’s where deeper connections forged between readers
        and writers can lead to discovery and growth. Together with millions of
        collaborators, we’re building a trusted and vibrant ecosystem fueled by
        important ideas and the people who think about them.
      </Typography>
    </Box>
  );
}

export default About;

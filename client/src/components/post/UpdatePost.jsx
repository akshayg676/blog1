import { useState, useEffect } from "react";
import {
  Box,
  makeStyles,
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { getPost, updatePost, uploadFile } from "../../service/api";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0 100px",
    [theme.breakpoints.down("md")]: {
      padding: "0 50px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 10px",
    },
  },
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "contain",
    [theme.breakpoints.down("xs")]: {
      objectFit: "contain",
    },
  },
  form: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  textField: {
    flex: 1,
    margin: "0 30px",
    fontSize: 25,
  },
  textarea: {
    width: "100%",
    border: "none",
    marginTop: 50,
    fontSize: 18,
    "&:focus-visible": {
      outline: "none",
    },
  },
}));

const initialValues = {
  title: "",
  description: "",
  picture: "",
  username: "akshay",
  categories: "All",
  createDate: new Date(),
};

function UpdatePost({ match }) {
  const classes = useStyles();
  const history = useHistory();

  const [post, setPost] = useState(initialValues);
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");

  const url = post.picture
    ? post.picture
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUz_h7HXWWk5k3YiXLVbktArKFQ51pFjH3D-hijQBrtoUvV6aR6cV9CZHLX3l5NBYErQM&usqp=CAU";

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const image = await uploadFile(data);
        post.picture = image.data;
        setImage(image.data);
      }
    };
    getImage();
  }, [file]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getPost(match.params.id);
      setPost(data);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const updateBlog = async () => {
    await updatePost(match.params.id, post);
    history.push(`/details/${match.params.id}`);
  };

  return (
    <Box className={classes.container}>
      <img className={classes.image} src={url} alt="" />
      <FormControl className={classes.form}>
        <label htmlFor="fileInput">
          <AddCircleIcon
            fontSize="large"
            color="action"
            style={{ cursor: "pointer" }}
          />
        </label>
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          id="fileInput"
          style={{ display: "none" }}
        />
        <InputBase
          placeholder="Title"
          name="title"
          value={post.title}
          className={classes.textField}
          onChange={(e) => handleChange(e)}
        />
        <Button
          onClick={() => updateBlog()}
          variant="contained"
          color="primary"
        >
          Update
        </Button>
      </FormControl>
      <TextareaAutosize
        minRows={5}
        placeholder="Tell your story"
        name="description"
        className={classes.textarea}
        value={post.description}
        onChange={(e) => handleChange(e)}
      />
    </Box>
  );
}

export default UpdatePost;

import axios from "axios";

const URL = "http://localhost:8000";

export const createPostApi = async (post) => {
  try {
    return await axios.post(`${URL}/create`, post);
  } catch (error) {
    console.log("Error while calling createPost API", error);
  }
};

export const getAllPosts = async (param) => {
  try {
    let response = await axios.get(`${URL}/posts${param}`);

    return response.data;
  } catch (error) {
    console.log("Error while getting Allpost", error);
  }
};

export const getPost = async (id) => {
  try {
    let response = await axios.get(`${URL}/post/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while getting singlepost", error);
  }
};

export const updatePost = async (id, post) => {
  try {
    await axios.post(`${URL}/update/${id}`, post);
  } catch (error) {
    console.log("Error while updating post", error);
  }
};

export const deletePost = async (id) => {
  try {
    await axios.delete(`${URL}/delete/${id}`);
  } catch (error) {
    console.log("Error while deleting post", error);
  }
};

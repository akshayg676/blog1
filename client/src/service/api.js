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
    return await axios.put(`${URL}/update/${id}`, post);
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

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${URL}/file/upload`, data);
  } catch (error) {
    console.log("Error while uploading picture", error);
  }
};

export const newComment = async (data) => {
  try {
    return await axios.post(`${URL}/comment/new`, data);
  } catch (error) {
    console.log("Error while fetching comments", error);
  }
};

export const getComment = async (id) => {
  try {
    let response = await axios.get(`${URL}/comment/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while getCommentsApi comments", error);
  }
};

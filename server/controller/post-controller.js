// import { request, response } from "express";
import Post from "../schema/postSchema.js";

export const createPost = async (request, response) => {
  try {
    const post = await new Post(request.body);
    post.save();
    response.status(200).json("blog saved successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getAllPosts = async (request, response) => {
  try {
    let posts = await Post.find({});

    response.status(200).json(posts);
  } catch (error) {
    response.status(500).json(error);
  }
};
export const getPost = async (request, response) => {
  try {
    let post = await Post.findById(request.params.id);
    response.status(200).json(post);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const updatePost = async (request, response) => {
  try {
    await Post.findByIdAndUpdate(request.params.id, { $set: request.body });
    response.status(500).response("blog updated successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

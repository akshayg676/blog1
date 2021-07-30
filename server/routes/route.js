import express from "express";
import {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
} from "../controller/post-controller.js";
import { uploadImage } from "../controller/image-controller.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.post("/create", createPost);
router.get("/posts", getAllPosts);
router.get("/post/:id", getPost);
router.post("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);
router.post("/file/upload", upload.single("file"), uploadImage);

export default router;

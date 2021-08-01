import Comment from "../schema/comment-schema.js";

export const newComment = async (request, response) => {
  try {
    const comment = new Comment(request.body);
    comment.save();
    response.status(200).json("Comment saved successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

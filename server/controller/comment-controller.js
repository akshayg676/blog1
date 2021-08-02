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

export const getComments = async (request, response) => {
  try {
    const comment = await Comment.find({ postId: request.params.id });
    response.status(200).json(comment);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const deleteComment = async (request, response) => {
  try {
    const comment = await Comment.findByIdAndDelete(request.params.id);
    response.status(200).json("comment deleted successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

const url = "http://localhost:8000";

export const uploadImage = (request, response) => {
  try {
    if (!request.file) {
      return response.status(404).json("file not found");
    }
    const imageURL = `${url}/file/${request.file.filename}`;

    response.status(200).json(imageURL);
  } catch (error) {
    response.status(500).json(error);
  }
};

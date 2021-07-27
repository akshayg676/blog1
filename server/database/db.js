import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();
const Connection = async () => {
  try {
    const URL = process.env.MONGO_URL;
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Database connected succesfully");
  } catch (error) {
    console.log("Error while connecting MongoDb", error);
  }
};

export default Connection;

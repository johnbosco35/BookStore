/** @format */

import mongoose from "mongoose";

const DB_URL: string = "mongodb://localhost/projectdb";
const DB1_URL: string = "mongodb://0.0.0.0.27017/project1";

mongoose.connect(DB1_URL);

mongoose.connection
  .on("open", () => {
    console.log("");
    console.log("Database is connected");
  })
  .once("error", () => {
    console.log("An error occured in connecting Database");
  });

export default mongoose;

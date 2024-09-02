/** @format */

import express, { Application } from "express";
import mongoose from "./Config/DataBase";

const port: number = 3500;

const app: Application = express();

app.use(express.json());

app.listen(port, () => {
  console.log("Server is now on");
});

/** @format */

import mongoose from "mongoose";

interface Books {
  title: string;
  description: string;
  Author: string;
  view: number[];
  coverImage: string;
  category: string;
}

interface IBook extends Books, mongoose.Document {}

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
    },
    description: {
      type: String,
    },
    Author: {
      type: String,
    },
    view: {
      type: [],
    },
    coverImage: {
      type: String,
    },
    category: {
      type: String,
    },
  },
  { timestamps: true }
);

const BookModels = mongoose.model<IBook>("Books", BookSchema);

export default BookModels;

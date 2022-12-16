import mongoose from "mongoose";
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  name: String,
  score: Number,
});

export default mongoose.model("Scores", scoreSchema);

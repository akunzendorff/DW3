import mongoose from "mongoose";

const awardSchema = new mongoose.Schema({
  title: String,
  winner: String,
});

const Award = mongoose.model("Award", awardSchema);

export default Award;

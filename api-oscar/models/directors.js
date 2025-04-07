import mongoose from "mongoose";

const directorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthdate: { type: Date },
  movies_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
  nominations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Award' }]
});

const Director = mongoose.model("Director", directorSchema);

export default Director;

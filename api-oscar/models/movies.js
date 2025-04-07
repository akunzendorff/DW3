import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  release_date: Date,
  director_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Director' },
  actors_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Actor' }],
  nominations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Award' }]
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;

import mongoose from "mongoose";

const actorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthdate: { type: Date },
  movies_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
  nominations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Award' }]
});

const Actor = mongoose.model("Actor", actorSchema);

export default Actor;

import mongoose from "mongoose";

const nomineeSchema = new mongoose.Schema({
  type: { type: String, enum: ['movie', 'actor', 'director'], required: true },
  entity_id: { type: mongoose.Schema.Types.ObjectId, required: true }
}, { _id: false });

const awardSchema = new mongoose.Schema({
  category: { type: String, required: true },
  year: { type: Number, required: true },
  nominees: [nomineeSchema],
  winner: nomineeSchema
});

const Award = mongoose.model("Award", awardSchema);

export default Award;

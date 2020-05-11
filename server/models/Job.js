import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Job = new Schema(
  {
    title: { type: String, required: true, maxlength: 20 },
    pay: { type: Number, required: true },
    location: { type: String },
    description: { type: String, maxlength: 250 },
    filled: { type: Boolean, default: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Job;

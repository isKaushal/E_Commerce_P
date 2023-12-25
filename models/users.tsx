import mongoose from "mongoose";

const Users = new mongoose.Schema({
  // id: Number,
  email: String,
  address: String,
  lastname: String,
  password: String,
  contact: Number,
  firstname: String,
  // cart: Array,
});

export default mongoose.models.user || mongoose.model("user", Users);

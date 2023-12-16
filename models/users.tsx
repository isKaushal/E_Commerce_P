import mongoose from "mongoose";

const Users = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  id: String,
});

export default mongoose.models.users || mongoose.model("user", Users);

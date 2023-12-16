import mongoose from "mongoose";

export default function dbConnect() {
  return mongoose.connect(`${process.env.NEXTAUTH_URI}`);
}

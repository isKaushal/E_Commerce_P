import mongoose from "mongoose";

const Items = new mongoose.Schema({
  item_key: Number,
  item_name: String,
  item_image: String,
  item_price: Number,
  item_disc: String,
});

export default mongoose.models.items || mongoose.model("items", Items);

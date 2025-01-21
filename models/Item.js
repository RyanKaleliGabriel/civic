import { Schema, model } from "mongoose";

const itemSchema = new Schema({
  todo: {
    type: String,
    required: [true, "ToDo is required"],
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const Item = model("Item", itemSchema);

export default Item;

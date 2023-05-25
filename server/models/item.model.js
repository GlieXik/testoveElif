const { Schema, model } = require("mongoose");

const itemSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    type: { type: String, trim: true },
    img: { type: String },
  },
  { versionKey: false, timestamps: true }
);
const Item = model("item", itemSchema);

module.exports = Item;

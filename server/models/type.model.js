const { Schema, model } = require("mongoose");

const typeSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { versionKey: false, timestamps: true }
);
const Type = model("type", typeSchema);

module.exports = Type;

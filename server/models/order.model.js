const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: Number, required: true, trim: true },
    totalPrice: { type: Number, required: true, trim: true },
    totalQuantity: { type: Number, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    address: { type: String, trim: true, lowercase: true },
    items: [
      {
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);
const Order = model("order", orderSchema);

module.exports = Order;

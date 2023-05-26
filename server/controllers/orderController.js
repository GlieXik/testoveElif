const ApiError = require("../err/ApiError");
const Order = require("../models/order.model");

const create = async (req, res, next) => {
  try {
    const { name, phone, email, address, items, totalPrice, totalQuantity } =
      req.body;
    const order = await Order.create({
      name,
      phone,
      email,
      address,
      items,
      totalPrice,
      totalQuantity,
    });
    return res.json(order);
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
};
const getAll = async (req, res) => {
  try {
    const orders = await Order.find();
    return res.json(orders);
  } catch (error) {}
};

module.exports = { create, getAll };

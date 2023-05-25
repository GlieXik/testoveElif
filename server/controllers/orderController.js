const ApiError = require("../err/ApiError");
const Order = require("../models/order.model");

const create = async (req, res, next) => {
  try {
    const { clientName, phone, email, address, items } = req.body;
    const order = await Order.create({
      clientName,
      phone,
      email,
      address,
      items,
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

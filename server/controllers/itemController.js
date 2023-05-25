const uuid = require("uuid");
const path = require("path");
const Item = require("../models/item.model");
const ApiError = require("../err/ApiError");
const create = async (req, res, next) => {
  try {
    const { name, price, type } = req.body;
    const { img } = req.files;
    let fileName = uuid.v4() + ".jpg";
    img.mv(path.resolve(__dirname, "..", "static", fileName));

    const item = await Item.create({ name, price, type, img: fileName });
    return res.json(item);
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
};
const getAll = async (req, res) => {
  try {
    const { type } = req.query;
    let items;
    if (!type) {
      items = await Item.find();
    }
    if (type) {
      items = await Item.find({ type });
    }
    return res.json(items);
  } catch (error) {}
};
const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findById(id);
    return res.json(item);
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
};

module.exports = { create, getAll, getOne };

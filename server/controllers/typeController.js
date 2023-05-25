const ApiError = require("../err/ApiError");
const Type = require("../models/type.model");
const create = async (req, res) => {
  try {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  } catch (error) {}
};
const getAll = async (req, res) => {
  try {
    const types = await Type.find();
    return res.json(types);
  } catch (error) {}
};

module.exports = { create, getAll };

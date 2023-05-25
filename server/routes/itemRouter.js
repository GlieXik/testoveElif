const express = require("express");
const { getAll, create, getOne } = require("../controllers/itemController");
const router = express.Router();

router.get("/", getAll);
router.post("/addItem", create);
router.get("/:id", getOne);

module.exports = router;

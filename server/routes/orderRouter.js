const express = require("express");
const { getAll, create } = require("../controllers/orderController");
const router = express.Router();

router.get("/", getAll);
router.post("/addOrder", create);

module.exports = router;

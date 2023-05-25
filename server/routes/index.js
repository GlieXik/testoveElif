const express = require("express");
const router = express.Router();
const typeRouter = require("./typeRouter");
const itemRouter = require("./itemRouter");
const orederRouter = require("./orderRouter");

router.use("/type", typeRouter);
router.use("/item", itemRouter);
router.use("/order", orederRouter);

module.exports = router;

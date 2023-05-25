require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const connectDB = require("./db");
const router = require("./routes/index");
const errorHandler = require("./middlewares/ErrorHandle");
const app = express();

const path = require("path");
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use("/api", express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);
// !
app.use(errorHandler);

connectDB
  .then(() => {
    app.listen(PORT, () => console.log("server started on port", PORT));
  })
  .catch((error) => {
    console.log(`Server not running. Error message: ${error.message}`);
    process.exit(1);
  });

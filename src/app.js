require("../configs/db");
const express = require("express");
const cors = require("cors");
const mainRouter = require("./routers/main");

const app = express();

//!SETTINGS
app.set("view engine", "ejs");
app.set("views", "./src/views");

//!REQUIREMENTS
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//!ROUTERS
app.use(mainRouter);

module.exports = app;

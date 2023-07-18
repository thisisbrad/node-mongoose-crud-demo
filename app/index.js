const express = require("express");
const morgan = require("morgan");
const routerHandler = require("./routes");
const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1", routerHandler);

module.exports = app;

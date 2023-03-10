var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var expressLayouts = require("express-ejs-layouts");
const systemConfig = require("./configs/system");
const mongoose = require("./configs/connect");
var app = express();
// var router = require("./routes/backend/index");
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layout");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// mongodb

// const ItemsCollection = require("./schemas/items");
// const small = new ItemsCollection({
//   name: "cuong",
//   status: "1",
//   ordering: "69",
// });
// small.save((err) => {
//   if (err) return console.error(err);
// });

// find
// ItemsCollection.find({ name: "cuong" }, (err, result) => {
//   if (err) return console.error(err);
//   console.log(result);
// });

// c2
// const query = ItemsCollection.find({ name: "cuong" });
// query.select("");
// query.exec((err, result) => {
//   if (err) return console.error(err);
//   console.log(result);
// });

// local variable
app.locals.systemConfig = systemConfig;

// config router
app.use(`/${systemConfig.prefixAdmin}`, require("./routes/backend/index"));

// router(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { title: "Error Page" });
});

module.exports = app;

var express = require("express");
var router = express.Router();

/* GET users listing. */

router.get("/list", function (req, res, next) {
  res.render("pages/items/list", { title: "List Items" });
});

router.get("/", function (req, res, next) {
  res.send("respond with video router");
});

module.exports = router;

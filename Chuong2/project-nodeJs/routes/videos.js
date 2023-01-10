var express = require("express");
var router = express.Router();

/* GET users listing. */

router.get("/edit", function (req, res, next) {
  res.send("respond with video edit router");
});

router.get("/", function (req, res, next) {
  res.send("respond with video router");
});

module.exports = router;

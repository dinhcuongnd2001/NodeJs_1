var express = require("express");
var router = express.Router();
router.get("/", function (req, res, next) {
  res.render("index", { title: "HomePage" });
  // res.send("this is the homepage");
});
module.exports = router;

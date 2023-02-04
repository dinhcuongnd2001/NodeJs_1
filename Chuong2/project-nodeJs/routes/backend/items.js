var express = require("express");
var router = express.Router();

/* GET users listing. */

router.get("/list", function (req, res, next) {
  res.render("pages/items/list", { title: "List Items" });
});

router.get("/", function (req, res, next) {
  // ItemsModel la mot doi tuong tham chieu den Items Collection trong db
  const ItemsModel = require("./../../schemas/items");
  ItemsModel.find({}, (err, result) => {
    if (err) return console.error("Error in router Items ", err);
    res.render("pages/items/index", {
      title: "this is the index items",
      items: result,
    });
  });
  // ItemsModel.find({}, "name").then((result) => {
  //   res.render("pages/items/index", {
  //     title: "this is the index items",
  //     items: result,
  //   });
  // });
});

module.exports = router;

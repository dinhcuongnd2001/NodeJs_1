var express = require("express");
var router = express.Router();

/* GET users listing. */

router.get("/list", function (req, res, next) {
  res.render("pages/items/list", { title: "List Items" });
});

router.get("/", function (req, res, next) {
  // ItemsModel la mot doi tuong tham chieu den Items Collection trong db
  const ItemsModel = require("./../../schemas/items");
  const statusFilter = [
    { name: "All", count: 4, link: "#", class: "me-3 btn btn-primary" },
    { name: "Active", count: 2, link: "#", class: "me-3 btn btn-success" },
    { name: "InActive", count: 2, link: "#", class: "btn btn-warning" },
  ];
  ItemsModel.find({}, (err, result) => {
    if (err) return console.error("Error in router I ems ", err);
    res.render("pages/items/index", {
      title: "this is the index items",
      items: result,
      statusFilter: statusFilter,
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
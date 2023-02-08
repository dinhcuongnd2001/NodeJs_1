var express = require("express");
var router = express.Router();

/* GET users listing. */

router.get("/list", function (req, res, next) {
  res.render("pages/items/list", { title: "List Items" });
});

router.get("(/:status)?", function (req, res, next) {
  // ItemsModel la mot doi tuong tham chieu den Items Collection trong db
  const ItemsModel = require("./../../schemas/items");
  const helper = require("./../../helper/utils");
  const paramHelper = require("./../../helper/param");
  let statusFilterCurrent = paramHelper.getParams(req.params, "status", "all");
  let searchCurrent = paramHelper.getParams(req.query, "search", "");
  const statusFilter = helper.createStatusFilter(
    ItemsModel,
    statusFilterCurrent
  );
  // ordering: { $gt: 0, $lt: 100 }
  const conditionFilter =
    statusFilterCurrent == "all"
      ? searchCurrent == ""
        ? {}
        : { name: { $regex: searchCurrent, $options: "i" } }
      : searchCurrent == ""
      ? { status: statusFilterCurrent }
      : {
          status: statusFilterCurrent,
          name: { $regex: searchCurrent, $options: "i" },
        };

  // console.log("condition:", conditionFilter);
  ItemsModel.find(conditionFilter, (err, result) => {
    if (err) return console.error("Error in router Items ", err);
    res.render("pages/items/index", {
      title: "this is the index items",
      items: result,
      statusFilter: statusFilter,
      searchCurrent,
    });
  });
  // ItemsModel.find({}, "name").then((result) => {
  //   res.render("pages/items/index", {
  //     title: "this is the index items",
  //     items: result,
  //   });
  // });
});

// router.get("/:status", (req, res, next) => {
//   res.send(req.params.status);
//   res.end();
// });

module.exports = router;

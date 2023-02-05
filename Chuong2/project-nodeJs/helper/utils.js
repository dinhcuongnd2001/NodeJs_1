const createStatusFilter = (ItemsModel) => {
  const statusFilter = [
    {
      name: "All",
      value: "all",
      count: 4,
      link: "all",
      class: "me-3 btn btn-default",
    },
    {
      name: "Active",
      value: "active",
      count: 2,
      link: "active",
      class: "me-3 btn btn-success",
    },
    {
      name: "InActive",
      value: "inactive",
      count: 2,
      link: "inactive",
      class: "btn btn-default",
    },
  ];
  statusFilter.forEach((each) => {
    if (each.value == "all") {
      // ItemsModel.count({}, (err, result) => {
      //   if (err) return console.error(err);
      //   // console.log(result);
      //   each.count = result;
      // });
      ItemsModel.count({}).then((result) => {
        each.count = result;
      });
    } else {
      ItemsModel.count({ status: each.value }).then((result) => {
        each.count = result;
      });
      // ItemsModel.count({ status: each.value }, (err, result) => {
      //   if (err) return console.error(err);
      //   // console.log(result);
      //   each.count = result;
      // });
    }
  });
  return statusFilter;
};

module.exports = {
  createStatusFilter,
};

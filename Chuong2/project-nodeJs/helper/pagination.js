const ItemMode = require("./../schemas/items");
const numberElementPerPage = 2;
const totalElement = 1;
// const totalElement = ItemMode.countDocuments().then((res) => res);
// const totalPages = Math.ceil(totalElement / numberElementPerPage);
const currentPage = 1;

module.exports = {
  numberElementPerPage,
  totalElement,
  // totalPages,
  currentPage,
};

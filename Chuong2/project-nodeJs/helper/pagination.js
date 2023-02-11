const ItemMode = require("./../schemas/items");
const numberElementPerPage = 1;
const totalElement = 1;
// const totalElement = ItemMode.countDocuments().then((res) => res);
// const totalPages = Math.ceil(totalElement / numberElementPerPage);
const currentPage = 1;
const pageRange = 5;

module.exports = {
  numberElementPerPage,
  totalElement,
  // totalPages,
  currentPage,
  pageRange,
};

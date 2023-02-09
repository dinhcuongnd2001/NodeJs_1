const ItemMode = require("./../schemas/items");
const numberElementPerPage = 2;
// const totalElement = async () => {
//   var totalCount = await ItemMode.count().then((res) => res);
//   return totalCount;
// };
const totalElement = ItemMode.countDocuments().then((res) => res);
const totalPages = Math.ceil(totalElement / numberElementPerPage);
const initialIndex = 1;

module.exports = {
  numberElementPerPage,
  totalElement,
  totalPages,
  initialIndex,
};

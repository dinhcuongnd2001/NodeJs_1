function showNotify() {
  console.log("Hello NodeJs");
}
const hostname = "127.0.0.1";
const port = 6969;

// module.exports.show = showNotify;
module.exports = {
  show: showNotify(),
  hostname: hostname,
  port: port,
};

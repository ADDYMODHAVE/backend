const rootDir = require("../util/path");
const path = require("path");

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
};

exports.getSuccessFull = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "successfull.html"));
};

exports.getBookACall = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "book-call.html"));
};
exports.postBookACall = (req, res, next) => {
  console.log(req.body);
  res.redirect("successfull");
};

exports.getShop = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};

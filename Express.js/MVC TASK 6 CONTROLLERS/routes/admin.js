const path = require("path");

const express = require("express");

const router = express.Router();

// /admin/add-product => GET
const shopProduct = require("../controllers/products");

router.get("/add-product",shopProduct.getAddProduct);

// /admin/add-product => POST
router.post("/add-product",shopProduct.postAddProduct);
router.get("/successfull",shopProduct.getSuccessFull);

router.get("/book-call",shopProduct.getBookACall);

// /admin/add-product => POST
router.post("/book-call",shopProduct.postBookACall);

module.exports = router;

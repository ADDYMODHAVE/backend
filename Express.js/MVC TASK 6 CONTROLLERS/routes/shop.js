const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const shopProduct = require("../controllers/products");

const router = express.Router();

router.get('/',shopProduct.getShop);

module.exports = router;

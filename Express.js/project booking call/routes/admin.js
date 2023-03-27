const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET


router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});
router.get('/successfull', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'successfull.html'));
});

router.get('/book-call', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'book-call.html'));
});

// /admin/add-product => POST
router.post('/book-call', (req, res, next) => {
  console.log(req.body);
  res.redirect('successfull');
});


module.exports = router;

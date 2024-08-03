const express = require('express');
const router = express.Router();
const db = require('../models/store.js');
const productsController = require('../controllers/productsController.js');


router.get('/',  productsController.getData, (req, res) => {
    // console.log('hit product router');
    // return next();
        return res.status(200).json(res.locals.queryResult);
});

module.exports = router;

//productsController.getData ,

const express = require('express');
const router = express.Router();
const basketController = require('../controllers/basketController');


router.post('/addtobasket/:userId', basketController.addToBasket);

router.get('/getbasket/:userId', basketController.getBasket);

// // Handle deleting item from basket
router.post('/removefrombasket/:userId/', basketController.deleteFromBasket);

// // Handle getting basket contents
// router.get('/getbasket/:userId', basketController.getBasket);

module.exports = router;


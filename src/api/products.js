const express = require('express');
const router = express.Router();
const mongoose = require('../Config/db'); // Import mongoose from db.js
const ProductCard = require('../models/ProductCard');

// Endpoint to fetch products from the database
router.get('/api/products', async (req, res) => {
  try {
    const products = await ProductCard.find(); // Use your ProductCard model
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/api/products/getProductById', async (req, res) => {
  try {
    const { productId } = req.body;

    // Find the product in the database based on the productId
    const product = await ProductCard.findOne({ id: productId });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Return the found product
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

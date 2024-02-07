const express = require('express');
const router = express.Router();


const ProductCard = require('../models/ProductCard'); // Import your ProductCard model

// Connect to MongoDB
async function conCheck() {
  try {
    await mongoose.connect(
      'mongodb+srv://your-username:your-password@cluster0.0t9vaxx.mongodb.net/BareillyBasket',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }
}

conCheck();

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

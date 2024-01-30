const mongoose = require('mongoose');

// Define a schema for the ProductBanners
const productCardSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  offerprice: {
    type: Number,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

// Create a model based on the schema
const ProductCard = mongoose.model('ProductCard', productCardSchema);

module.exports = ProductCard;

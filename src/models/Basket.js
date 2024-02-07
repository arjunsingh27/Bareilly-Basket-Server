const mongoose = require('mongoose');

const basketSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true
  },
  items: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product', // Reference to the Product model
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }]
});

module.exports = mongoose.model('Basket', basketSchema);

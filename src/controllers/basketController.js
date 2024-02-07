// const express = require('express');
// const router = express.Router();
// const Basket = require('../models/Basket');
// const mongoose = require('mongoose');

// const conCheck = async () => {
// try {
//   // Use environment variable for the password
//   await mongoose.connect(
//     `mongodb+srv://arjunsingh27:Test123@cluster0.0t9vaxx.mongodb.net/BareillyBasket`,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   );
//   console.log('Connected to MongoDB');
// } catch (err) {
//   console.error(err);
// }
// }


// conCheck();

// // Route to add an item to the basket
// exports.addToBasket = async (req, res) => {
//   // Your route handling logic here
//   try {
//     const { userId } = req.params;
//     const { productId, quantity } = req.body;

//     let basket = await Basket.findOne({ userId });

//     if (!basket) {
//       basket = new Basket({ userId, items: [] });
//     }

//     const existingItemIndex = basket.items.findIndex(item => item.productId.toString() === productId);

//     if (existingItemIndex !== -1) {
//       basket.items[existingItemIndex].quantity += quantity;
//     } else {
//       basket.items.push({ productId, quantity });
//     }

//     await basket.save();

//     res.status(201).json({ message: 'Item added to basket', addedItemId: productId });
//   } catch (error) {
//     console.error('Error adding item to basket:', error);
//     res.status(500).json({ message: 'Error adding item to basket' });
//   }
// };

// // Route to remove an item from the basket
// exports.deleteFromBasket =  async (req, res) => {
//   try {
//     const { userId, itemId } = req.params;

//     let basket = await Basket.findOne({ userId });

//     if (!basket) {
//       return res.status(404).json({ message: 'Basket not found' });
//     }

//     const updatedItems = basket.items.filter(item => item._id.toString() !== itemId);

//     basket.items = updatedItems;
//     await basket.save();

//     res.status(200).json({ message: 'Item removed from basket', removedItemId: itemId });
//   } catch (error) {
//     console.error('Error removing item from basket:', error);
//     res.status(500).json({ message: 'Error removing item from basket' });
//   }
// };

// // Route to get all items from the basketrs
// exports.getBasket= async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const basket = await Basket.findOne({ userId });

//     if (!basket) {
//       return res.status(404).json({ message: 'Basket not found' });
//     }

//     res.status(200).json({ basket });
//   } catch (error) {
//     console.error('Error fetching basket items:', error);
//     res.status(500).json({ message: 'Error fetching basket items' });
//   }
// };

// module.exports = router;

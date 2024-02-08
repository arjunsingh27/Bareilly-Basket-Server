// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// async function conCheck() {
//     try {
//       // Use environment variable for the password
//       await mongoose.connect(
//         `mongodb+srv://arjunsingh27:Test123@cluster0.0t9vaxx.mongodb.net/BareillyBasket`,
//         {
//           useNewUrlParser: true,
//           useUnifiedTopology: true,
//         }
//       );
//       console.log('Connected to MongoDB');
//     } catch (err) {
//       console.error(err);
//     }
//   }
  
//   conCheck();

// // Define a schema for the ProductBanners
// const productBannerSchema = new mongoose.Schema({
//   id: Number,
//   title: String,
//   url: String,
// });

// // Create a model based on the schema
// const ProductBanner = mongoose.model('ProductBanner', productBannerSchema);

// // Endpoint to fetch ProductBanners from the database
// router.get('/api/productbanner', async (req, res) => {
//   try {
//     const productBanners = await ProductBanner.find();
//     res.json(productBanners);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// module.exports = router;

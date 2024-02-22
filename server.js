const express = require('express');
const cors = require('cors');  // Import the cors middleware
const productbanner = require('./src/api/productbanner.js');
const products = require('./src/api/products');
const authRoutes = require('./src/routes/authRoutes');
const basketRoutes = require('./src/routes/basketRoutes');
const orderRoutes = require('./src/routes/orderRoutes');

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 5002;

// Use cors middleware to enable cross-origin requests
app.use(cors());

// Use the productbanner router
// app.use(productbanner);

app.use(products);

app.use(authRoutes);

app.use(basketRoutes);

app.use(orderRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port || process.env.PORT, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

const express = require('express');
const cors = require('cors');  // Import the cors middleware
const productbanner = require('./api/productbanner');

const app = express();
const port = 5002;

// Use cors middleware to enable cross-origin requests
app.use(cors());

// Use the productbanner router
app.use(productbanner);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

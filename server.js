const express = require('express');
const testRoutes = require('./routes/testRoutes.js');

const app = express();
const port = 5002;

// Use the testRoutes in your express app
app.use('/test', testRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

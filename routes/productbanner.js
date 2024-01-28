const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello, world! I am a test route.');
});

module.exports = router;

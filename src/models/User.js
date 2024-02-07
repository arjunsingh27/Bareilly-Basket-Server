const mongoose = require('mongoose');

// Define a schema for the User
const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      required: true,
   }
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;

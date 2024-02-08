const mongoose = require("mongoose");

// MongoDB Atlas connection URI
const uri =
  "mongodb+srv://arjunsingh27:Test123@cluster0.0t9vaxx.mongodb.net/BareillyBasket";

// Connect to MongoDB Atlas cluster
mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB in config/db.js"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Export the Mongoose object to be used elsewhere in the application
module.exports = mongoose;

const mongoose = require('../Config/db');
const User = require('../models/User');

exports.addToBasket = async (req, res) => {
  const userId = req.params.userId;
  const item = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.basket.push(item);
    await user.save();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

exports.deleteFromBasket = async (req, res) => {
  const userId = req.params.userId;
  const { id } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const index = user.basket.findIndex(item => item.id === id);

    if (index === -1) {
      return res.status(404).json({ error: "Item not found in the user's basket" });
    }

    user.basket.splice(index, 1);
    await user.save();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

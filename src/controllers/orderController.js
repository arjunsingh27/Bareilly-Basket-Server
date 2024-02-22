const mongoose = require("../Config/db");
const User = require("../models/User");
const stripe = require('stripe')('sk_test_51Oac52SElcdkcjvW1AfVyJ2lzqwxoDEJgHCaP7HeEkGYvMx0YQOZkMukYGX5hXvnZdy8OcQSpcqHXh1bUtD0i5XT00ecSmw7dZ');

exports.createPaymentIntent = async (req, res) => {
    console.log("Received request to create payment intent");

    // Extract userId and total from request body
    const { userId, total } = req.body;
    console.log("User ID:", userId);
    console.log("Total Amount:", total);

    try {
        // Find user by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Create payment intent with Stripe
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: "usd",
        });

        // Update user's orders
        user.orders.push({
            orderID: paymentIntent.id,
            amount: total,
            items: user.basket,
            paymentStatus: "Pending",
        });
        await user.save();

        // Send client secret back to the client
        console.log("Payment intent created:", paymentIntent.id);
        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error("Error creating payment intent:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.getOrders = async (req, res) => {
    console.log("Received request to get orders");

    // Extract userId from request parameters
    const { userId } = req.params;
    console.log("User ID:", userId);

    try {
        // Find user by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Send user's orders back to the client
        res.json({ orders : user.orders });
    } catch (error) {
        console.error("Error getting orders:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

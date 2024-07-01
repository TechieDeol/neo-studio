const Subscription = require("../models/Subscription");

exports.subscribe = async (req, res) => {
  const { email } = req.body;
  try {
    const newSubscription = new Subscription({ email });
    await newSubscription.save();
    res.status(201).json({ message: "Subscribed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

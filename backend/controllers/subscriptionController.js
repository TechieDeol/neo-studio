const Subscription = require("../models/Subscription");

exports.subscribe = async (req, res) => {
  const { email } = req.body;
  try {
    const successMessage = "Thank you for subscribing!";
    const existingSubscription = await Subscription.findOne({ email });
    console.log("existingSubscription", existingSubscription);
    if (existingSubscription) {
      return res.status(201).json({ message: successMessage });
    }

    const newSubscription = new Subscription({ email });
    await newSubscription.save();
    res.status(201).json({ message: successMessage });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Oops! Something went wrong while submitting the form.",
        error: error.message,
      });
  }
};

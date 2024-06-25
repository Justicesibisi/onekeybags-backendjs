const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY');

const createPaymentIntent = async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: 'Zar',
    payment_method_types: ['card']
  });
  res.json({ clientSecret: paymentIntent.client_secret });
};

module.exports = { createPaymentIntent };

const mongoose = require('mongoose');

const SubscriptionUser = new mongoose.Schema({
    user_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  subscription_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Subscription',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('SubscriptionUser', SubscriptionUser);